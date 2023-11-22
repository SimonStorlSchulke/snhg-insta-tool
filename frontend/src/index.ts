// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.streunernothilfe-grenzenlos.de/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=streunernothilfe-grenzenlos.de
// @grant        GM_addStyle
// @grant        GM.xmlHttpRequest
// ==/UserScript==

import { addStyle } from "./add-style";

const hashtags = [
    "zuhausegesucht",
    "mischling",
    "mixbreed",
    "rescuedog",
    "hundeleben",
    "zuhausegesucht",
    "mischling",
    "mixbreed",
    "rescuedog",
    "hundeleben",
    "zuhausegesucht",
    "mischling",
    "mixbreed",
    "rescuedog",
    "hundeleben",
    "adoptdontshop",
  ];
  
  
  document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key === "i") {
      createPopup();
    }
    if (event.key === "Escape") {
      document.querySelector("#insta-preview")!.remove();
    }
  });
  

  async function sendPostRequest(imageList: string[]) {
      console.log("SENDING DATA TO BOT");
  
      const postTitle = document.querySelector<HTMLInputElement>(".label-input")!.value;
      const postText = document.querySelector<HTMLInputElement>(".post-text-input")!.value;
  
      const postData = {
          lable: postTitle,
          text: postText,
          images: imageList,
      }
  
      // @ts-ignore
      GM.xmlHttpRequest ({
          method:     "POST",
          url:        "http://localhost:8080/create-snhg-insta-post",
          data:       JSON.stringify(postData),
          headers:    {
              "Content-Type": "application/json"
          },
          onload:     function (response: any) {
              console.log(response); //display "ok"
          }
      });
  }
  
  function createPopup() {
    const title = document.querySelector("h1")!.innerText;
    const text = document.querySelector<HTMLElement>(".j-text")!.innerText.trim();
    let images = document.querySelectorAll("img");
  
    let imageArr = Array.from(images).filter(img => {
      // filter out default logos etc.
      if(img.src.includes("icdf2e2a345fd22f7")) return false;
      if(img.src.includes("ic1d00c22d37d1974")) return false;
      if(img.src.includes("iae5b5bca0cc54c10")) return false;
      if(img.src.includes("video-play.svg")) return false;
      if(img.src.includes("pixel.gif")) return false;
      return true;
    });
  
    console.log(imageArr);
  
    let imagesElements = "";
  
    for (let i = 0; i < imageArr.length; i++) {
  
      const classString = i < 6 ? "selected " : "";
      const labelHereClass = i == 0 ? "lable-here here" : "lable-here";
  
      imagesElements += `
      <div class="snhg-insta-thumbnail-wrapper">
        <img src="${images[i].src}" class="${classString}snhg-insta-thumbnail">
        <span class="${labelHereClass}">${title}</span>
        <button class="up">^</button>
        <button class="right">></button>
        <button class="down">v</button>
        <button class="left"><</button>
        <button class="lable-here-btn">label hier</button>
      </div>
          `;
    }
  
    const hashTagsText =
      "#" +
      hashtags
        .sort((a, b) => 0.5 - Math.random())
        .slice(0, 8)
        .join(" #");
  
    const dialog = document.createElement("div");
    dialog.id = "insta-preview";
    dialog.innerHTML = `
      <div class="window">
          <button class="insta-close">×</button>
          <div class="insta-thumbs">
          ${imagesElements}
          </div>
          <div style="display: flex; gap: 8px;"><span>Label:</span><input type="text" class="label-input" value="${title}"></div>
          <textarea class="post-text-input" cols=10>${text}\n\n${hashTagsText}
          </textarea>
          <button class="insta-post">Post</button>
      </div>`;
  
    document.body.appendChild(dialog);
  
    const imageThumbnails = dialog.querySelectorAll(".snhg-insta-thumbnail");
  
    const lableInput = dialog.querySelector("input");
  
    lableInput!.addEventListener("input", (e) => {
        document.querySelector<HTMLElement>(".here")!.innerText = lableInput!.value;
    });
  
    for (const thumbnail of Array.from(imageThumbnails)) {
      thumbnail.addEventListener("click", (e: any) => {
        if ((e.target! as HTMLElement).classList.contains("selected")) {
          (e.target! as HTMLElement).classList.remove("selected");
        } else {
          (e.target! as HTMLElement).classList.add("selected");
        }
      });
    }
  
    dialog.querySelector(".insta-close")!.addEventListener("click", () => {
      dialog.remove();
    });
  
    dialog.querySelector(".insta-post")!.addEventListener("click", () => {
      const selectedImages = dialog.querySelectorAll<HTMLImageElement>(".snhg-insta-thumbnail.selected");
      sendPostRequest(Array.from(selectedImages).map(_ => _.src));
    });
  
    dialog.querySelectorAll("button.lable-here-btn").forEach(button => {
  
      button.addEventListener("click", (e) => {
        const imageWrapper = (e.target as HTMLElement).parentNode!;
        const previousHere = dialog.querySelector(".here");
        if (previousHere) {
          previousHere.classList.remove("here");
        }
        imageWrapper.querySelector("span")!.classList.add("here");
        imageWrapper.querySelector("img")!.classList.add("selected");
        imageWrapper.parentNode!.prepend(imageWrapper);
  
      });
    });
  }

  addStyle();