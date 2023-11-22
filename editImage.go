package main

import (
	"errors"
	"fmt"
	"image"
	"image/color"
	"image/jpeg"
	"io"
	"math"
	"net/http"
	"os"
	"path/filepath"
	"regexp"
	"strings"

	"github.com/fogleman/gg"
)

func replaceThumbnailWithImageUrl(url string) string {
	// make this: https://.../dimension=1920x400:format=jpg...
	// into this: https://.../none/...

	var re = regexp.MustCompile(`dimension[^/]+`)
	s := re.ReplaceAllString(url, "none")
	return s
}

func prepareImage(URL, fileName string, label string) (*os.File, error) {
	//Get the response bytes from the url
	response, err := http.Get(replaceThumbnailWithImageUrl(URL))
	if err != nil {
		return nil, err
	}
	defer response.Body.Close()

	if response.StatusCode != 200 {
		return nil, errors.New("Received non 200 response code")
	}
	//Create a empty file
	file, err := os.Create(fileName)
	if err != nil {
		return nil, err
	}

	//Write the bytes to the fiel
	_, err = io.Copy(file, response.Body)
	if err != nil {
		return nil, err
	}
	file.Close()

	imageFile, err := editImage(file.Name(), label)

	return imageFile, err
}

func editImage(filePath string, label string) (*os.File, error) {

	originalImageFile, err := os.Open(filePath)

	if err != nil {
		fmt.Println("open", err)
	}
	defer originalImageFile.Close()

	originalImage, err := jpeg.Decode(originalImageFile)

	if err != nil {
		fmt.Println("decode", err)
		return nil, err
	}

	bounds := originalImage.Bounds()
	width := bounds.Dx()
	height := bounds.Dy()

	var cropSize image.Rectangle

	// for very stupid reasons, text has to be drawn before cropping...
	if width > height {
		shiftAmmount := (width - height) / 2
		cropSize = image.Rect(shiftAmmount, 0, shiftAmmount+height, height)

		if label != "" {
			originalImage, _ = TextOnImg(originalImage, label, height)
		}
	} else {
		shiftAmmount := (height - width) / 2
		cropSize = image.Rect(0, shiftAmmount, width, shiftAmmount+width)

		if label != "" {
			originalImage, _ = TextOnImg(originalImage, label, width)
		}
	}

	croppedImage := originalImage.(SubImager).SubImage(cropSize)

	imageFile, err := os.Create(filepath.Join("downloaded_images", "edited", filepath.Base(originalImageFile.Name())))

	if err != nil {
		fmt.Println("creating", err)
	}

	if err := jpeg.Encode(imageFile, croppedImage, &jpeg.Options{Quality: 90}); err != nil {
		fmt.Println("encode", err)
		return nil, nil
	}

	return imageFile, nil
}

func TextOnImg(bgImage image.Image, text string, referenceSize int) (image.Image, error) {

	text = strings.ToUpper(text)
	fontPath := "Montserrat-Regular.ttf"
	imgWidth := bgImage.Bounds().Dx()
	imgHeight := bgImage.Bounds().Dy()

	reference := int(math.Max(float64(imgWidth), float64(imgHeight)))

	dc := gg.NewContext(imgWidth, imgHeight)
	dc.DrawImage(bgImage, 0, 0)

	if err := dc.LoadFontFace(fontPath, float64(referenceSize)/8.0); err != nil {
		return nil, err
	}

	textArray := strings.Split(text, "")
	spacedLabel := ""

	for _, l := range textArray {
		spacedLabel += " "
		spacedLabel += l
	}

	x := float64(reference / 2)
	y := float64(reference / 2)
	maxWidth := float64(referenceSize)
	dc.SetColor(color.White)
	dc.DrawStringWrapped(spacedLabel, x, y, 0.5, 0.5, maxWidth, 1.2, gg.AlignCenter)

	return dc.Image(), nil
}
