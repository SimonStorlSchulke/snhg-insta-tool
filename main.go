package main

import (
	"encoding/json"
	"fmt"
	"image"
	"io"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"path/filepath"

	"github.com/Davincible/goinsta/v3"
	"github.com/google/uuid"
)

var withUpload bool = false

type SubImager interface {
	SubImage(r image.Rectangle) image.Image
}

type PostSetup struct {
	Lable  string   `json:"lable"`
	Text   string   `json:"text"`
	Images []string `json:"images"`
}

func main() {

	instaUsername := os.Args[0]
	instaPassword := os.Args[1]

	var insta *goinsta.Instagram

	if withUpload {
		insta = goinsta.New(instaUsername, instaPassword)

		if err := insta.Login(); err != nil {
			fmt.Println(err)
		}
	}

	http.HandleFunc("/create-snhg-insta-post", func(w http.ResponseWriter, request *http.Request) {

		body, err := ioutil.ReadAll(request.Body)

		if err != nil {

		}

		postSetup := PostSetup{}

		os.RemoveAll("downloaded_images")

		err = os.Mkdir("downloaded_images", os.ModePerm)
		err = os.Mkdir("downloaded_images/edited", os.ModePerm)

		if err != nil {

		}

		err = json.Unmarshal(body, &postSetup)

		if err != nil {

		}

		createPost(insta, postSetup)

		fmt.Println(postSetup.Text)
	})

	log.Fatal(http.ListenAndServe(":8080", nil))
}

func createPost(instance *goinsta.Instagram, postSetup PostSetup) {

	var album []io.Reader

	for i, img := range postSetup.Images {

		id := uuid.New()

		fileName := "downloaded_images/" + id.String() + "_" + filepath.Base((img))

		lableTexst := ""

		if i == 0 {
			lableTexst = postSetup.Lable
		} else {
			lableTexst = postSetup.Lable
		}

		img, err := prepareImage(img, fileName, lableTexst)

		if err != nil {
			continue
		}

		file, err := os.Open(img.Name())

		if err != nil {
			fmt.Println(err)
			continue
		}

		defer img.Close()

		album = append(album, file)

	}

	if withUpload {
		item, err := instance.Upload(
			&goinsta.UploadOptions{
				Caption: postSetup.Text,
				Album:   album,
			},
		)

		if err != nil {
			fmt.Println(err)
		} else {
			fmt.Println(item)
		}
	}

}
