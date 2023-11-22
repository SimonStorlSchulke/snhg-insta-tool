/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/add-style.ts":
/*!**************************!*\
  !*** ./src/add-style.ts ***!
  \**************************/
/*! exports provided: addStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStyle", function() { return addStyle; });
function addStyle() {
    // @ts-ignore
    GM_addStyle(`
      #insta-preview {
          position: fixed;
          top: 0px;
          z-index: 10000;
          display: flex;
          width: 100dvw;
          height: 100dvh;
          background: #000b;
          margin: auto;
          justify-content: center;
          align-items: center;
      }
  
      #insta-preview .window {
          background: #fff;
          padding: 12px;
          border-radius: 8px;
          max-width: 80%;
          max-height: 80%;
          font-size: 16px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          position: relative;
          overflow: auto;
      }
  
      #insta-preview textarea {
          min-height: 250px;
          font-family: system-ui;
          font-size: 16px;
      }
  
      .insta-thumbs {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
      }
  
      .snhg-insta-thumbnail-wrapper {
        position: relative;
      }
  
  
      .snhg-insta-thumbnail-wrapper button {
        position: absolute;
        z-index: 100;
        width: 30px;
        font-weight: bold;
        height: 30px;
        visibility: hidden;
        border: none;
        background: #ffffff94;
      }
      .snhg-insta-thumbnail-wrapper .up {
        left: 80px;
      }
  
      .snhg-insta-thumbnail-wrapper .left {
        left: 0px;
        top: 80px;
      }
  
      .snhg-insta-thumbnail-wrapper .down {
        bottom: 0px;
        left: 80px;
      }
  
      .snhg-insta-thumbnail-wrapper .right {
        right: 0px;
        top: 80px;
      }
  
      .snhg-insta-thumbnail-wrapper .lable-here {
        position: absolute;
        text-transform: uppercase;
        letter-spacing: 0.7rem;
        font-size: 20px;
        width: 100%;
        text-align: center;
        padding: 0;
        font-weight: 500;
        transform: translateX(0.6rem);
        display: none;
        color: #fff;
        top: 150px;
      }
  
      .snhg-insta-thumbnail-wrapper button.lable-here {
        display: block;
      }
  
      .snhg-insta-thumbnail-wrapper:hover button {
        visibility: visible;
      }
  
  
      .snhg-insta-thumbnail-wrapper span.here {
        display: block;
      }
  
      .insta-thumbs img {
          width: 180px;
          height: 180px;
          object-fit: cover;
          outline: 1px solid #aaa;
      }
  
      .insta-thumbs .selected {
          outline: 4px solid #66ee66;
      }
  
      .insta-close {
          position: absolute;
          top: 4px;
          right: 4px;
          width: 32px;
          font-size: 24px;
      }
  
      `);
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-style */ "./src/add-style.ts");
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

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
        document.querySelector("#insta-preview").remove();
    }
});
function sendPostRequest(imageList) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("SENDING DATA TO BOT");
        const postTitle = document.querySelector(".label-input").value;
        const postText = document.querySelector(".post-text-input").value;
        const postData = {
            lable: postTitle,
            text: postText,
            images: imageList,
        };
        // @ts-ignore
        GM.xmlHttpRequest({
            method: "POST",
            url: "http://localhost:8080/create-snhg-insta-post",
            data: JSON.stringify(postData),
            headers: {
                "Content-Type": "application/json"
            },
            onload: function (response) {
                console.log(response); //display "ok"
            }
        });
    });
}
function createPopup() {
    const title = document.querySelector("h1").innerText;
    const text = document.querySelector(".j-text").innerText.trim();
    let images = document.querySelectorAll("img");
    let imageArr = Array.from(images).filter(img => {
        // filter out default logos etc.
        if (img.src.includes("icdf2e2a345fd22f7"))
            return false;
        if (img.src.includes("ic1d00c22d37d1974"))
            return false;
        if (img.src.includes("iae5b5bca0cc54c10"))
            return false;
        if (img.src.includes("video-play.svg"))
            return false;
        if (img.src.includes("pixel.gif"))
            return false;
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
    const hashTagsText = "#" +
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
    lableInput.addEventListener("input", (e) => {
        document.querySelector(".here").innerText = lableInput.value;
    });
    for (const thumbnail of Array.from(imageThumbnails)) {
        thumbnail.addEventListener("click", (e) => {
            if (e.target.classList.contains("selected")) {
                e.target.classList.remove("selected");
            }
            else {
                e.target.classList.add("selected");
            }
        });
    }
    dialog.querySelector(".insta-close").addEventListener("click", () => {
        dialog.remove();
    });
    dialog.querySelector(".insta-post").addEventListener("click", () => {
        const selectedImages = dialog.querySelectorAll(".snhg-insta-thumbnail.selected");
        sendPostRequest(Array.from(selectedImages).map(_ => _.src));
    });
    dialog.querySelectorAll("button.lable-here-btn").forEach(button => {
        button.addEventListener("click", (e) => {
            const imageWrapper = e.target.parentNode;
            const previousHere = dialog.querySelector(".here");
            if (previousHere) {
                previousHere.classList.remove("here");
            }
            imageWrapper.querySelector("span").classList.add("here");
            imageWrapper.querySelector("img").classList.add("selected");
            imageWrapper.parentNode.prepend(imageWrapper);
        });
    });
}
function setLableHere(e) {
    const lableSpan = e.target.parentNode.querySelector("span");
    lableSpan.classList.add("here");
}
function updateLabelPreview() {
    const postTitle = document.querySelector(".label-input").addEventListener("change", (val) => {
    });
}
Object(_add_style__WEBPACK_IMPORTED_MODULE_0__["addStyle"])();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkZC1zdHlsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzVIQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3QiwyQkFBMkIsK0RBQStELGdCQUFnQixFQUFFLEVBQUU7QUFDOUc7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IscUZBQXFGO0FBQ3BIO0FBQ0EsS0FBSztBQUNMO0FBQ3VDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixjQUFjLFdBQVcsWUFBWTtBQUN6RCx1QkFBdUIsZUFBZSxJQUFJLE1BQU07QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQSxvQ0FBb0MsVUFBVSxxRUFBcUUsTUFBTTtBQUN6SCxzREFBc0QsS0FBSyxNQUFNO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDJEQUFRIiwiZmlsZSI6InRhbXBlcm1vbmtleXNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGFkZFN0eWxlKCkge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBHTV9hZGRTdHlsZShgXG4gICAgICAjaW5zdGEtcHJldmlldyB7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgIHotaW5kZXg6IDEwMDAwO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgd2lkdGg6IDEwMGR2dztcbiAgICAgICAgICBoZWlnaHQ6IDEwMGR2aDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwYjtcbiAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cbiAgXG4gICAgICAjaW5zdGEtcHJldmlldyAud2luZG93IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgIG1heC13aWR0aDogODAlO1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDgwJTtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGdhcDogMTZweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICB9XG4gIFxuICAgICAgI2luc3RhLXByZXZpZXcgdGV4dGFyZWEge1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuICBcbiAgICAgIC5pbnN0YS10aHVtYnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGdhcDogMTJweDtcbiAgICAgIH1cbiAgXG4gICAgICAuc25oZy1pbnN0YS10aHVtYm5haWwtd3JhcHBlciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgXG4gIFxuICAgICAgLnNuaGctaW5zdGEtdGh1bWJuYWlsLXdyYXBwZXIgYnV0dG9uIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjk0O1xuICAgICAgfVxuICAgICAgLnNuaGctaW5zdGEtdGh1bWJuYWlsLXdyYXBwZXIgLnVwIHtcbiAgICAgICAgbGVmdDogODBweDtcbiAgICAgIH1cbiAgXG4gICAgICAuc25oZy1pbnN0YS10aHVtYm5haWwtd3JhcHBlciAubGVmdCB7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgdG9wOiA4MHB4O1xuICAgICAgfVxuICBcbiAgICAgIC5zbmhnLWluc3RhLXRodW1ibmFpbC13cmFwcGVyIC5kb3duIHtcbiAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgIGxlZnQ6IDgwcHg7XG4gICAgICB9XG4gIFxuICAgICAgLnNuaGctaW5zdGEtdGh1bWJuYWlsLXdyYXBwZXIgLnJpZ2h0IHtcbiAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgdG9wOiA4MHB4O1xuICAgICAgfVxuICBcbiAgICAgIC5zbmhnLWluc3RhLXRodW1ibmFpbC13cmFwcGVyIC5sYWJsZS1oZXJlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC43cmVtO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwLjZyZW0pO1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgdG9wOiAxNTBweDtcbiAgICAgIH1cbiAgXG4gICAgICAuc25oZy1pbnN0YS10aHVtYm5haWwtd3JhcHBlciBidXR0b24ubGFibGUtaGVyZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICBcbiAgICAgIC5zbmhnLWluc3RhLXRodW1ibmFpbC13cmFwcGVyOmhvdmVyIGJ1dHRvbiB7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICB9XG4gIFxuICBcbiAgICAgIC5zbmhnLWluc3RhLXRodW1ibmFpbC13cmFwcGVyIHNwYW4uaGVyZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICBcbiAgICAgIC5pbnN0YS10aHVtYnMgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTgwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAxODBweDtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICBvdXRsaW5lOiAxcHggc29saWQgI2FhYTtcbiAgICAgIH1cbiAgXG4gICAgICAuaW5zdGEtdGh1bWJzIC5zZWxlY3RlZCB7XG4gICAgICAgICAgb3V0bGluZTogNHB4IHNvbGlkICM2NmVlNjY7XG4gICAgICB9XG4gIFxuICAgICAgLmluc3RhLWNsb3NlIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiA0cHg7XG4gICAgICAgICAgcmlnaHQ6IDRweDtcbiAgICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICB9XG4gIFxuICAgICAgYCk7XG59XG4iLCIvLyA9PVVzZXJTY3JpcHQ9PVxuLy8gQG5hbWUgICAgICAgICBOZXcgVXNlcnNjcmlwdFxuLy8gQG5hbWVzcGFjZSAgICBodHRwOi8vdGFtcGVybW9ua2V5Lm5ldC9cbi8vIEB2ZXJzaW9uICAgICAgMC4xXG4vLyBAZGVzY3JpcHRpb24gIHRyeSB0byB0YWtlIG92ZXIgdGhlIHdvcmxkIVxuLy8gQGF1dGhvciAgICAgICBZb3Vcbi8vIEBtYXRjaCAgICAgICAgaHR0cHM6Ly93d3cuc3RyZXVuZXJub3RoaWxmZS1ncmVuemVubG9zLmRlLypcbi8vIEBpY29uICAgICAgICAgaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zMi9mYXZpY29ucz9zej02NCZkb21haW49c3RyZXVuZXJub3RoaWxmZS1ncmVuemVubG9zLmRlXG4vLyBAZ3JhbnQgICAgICAgIEdNX2FkZFN0eWxlXG4vLyBAZ3JhbnQgICAgICAgIEdNLnhtbEh0dHBSZXF1ZXN0XG4vLyA9PS9Vc2VyU2NyaXB0PT1cbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgYWRkU3R5bGUgfSBmcm9tIFwiLi9hZGQtc3R5bGVcIjtcbmNvbnN0IGhhc2h0YWdzID0gW1xuICAgIFwienVoYXVzZWdlc3VjaHRcIixcbiAgICBcIm1pc2NobGluZ1wiLFxuICAgIFwibWl4YnJlZWRcIixcbiAgICBcInJlc2N1ZWRvZ1wiLFxuICAgIFwiaHVuZGVsZWJlblwiLFxuICAgIFwienVoYXVzZWdlc3VjaHRcIixcbiAgICBcIm1pc2NobGluZ1wiLFxuICAgIFwibWl4YnJlZWRcIixcbiAgICBcInJlc2N1ZWRvZ1wiLFxuICAgIFwiaHVuZGVsZWJlblwiLFxuICAgIFwienVoYXVzZWdlc3VjaHRcIixcbiAgICBcIm1pc2NobGluZ1wiLFxuICAgIFwibWl4YnJlZWRcIixcbiAgICBcInJlc2N1ZWRvZ1wiLFxuICAgIFwiaHVuZGVsZWJlblwiLFxuICAgIFwiYWRvcHRkb250c2hvcFwiLFxuXTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudC5jdHJsS2V5ICYmIGV2ZW50LmtleSA9PT0gXCJpXCIpIHtcbiAgICAgICAgY3JlYXRlUG9wdXAoKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2luc3RhLXByZXZpZXdcIikucmVtb3ZlKCk7XG4gICAgfVxufSk7XG5mdW5jdGlvbiBzZW5kUG9zdFJlcXVlc3QoaW1hZ2VMaXN0KSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJTRU5ESU5HIERBVEEgVE8gQk9UXCIpO1xuICAgICAgICBjb25zdCBwb3N0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxhYmVsLWlucHV0XCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBwb3N0VGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9zdC10ZXh0LWlucHV0XCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBwb3N0RGF0YSA9IHtcbiAgICAgICAgICAgIGxhYmxlOiBwb3N0VGl0bGUsXG4gICAgICAgICAgICB0ZXh0OiBwb3N0VGV4dCxcbiAgICAgICAgICAgIGltYWdlczogaW1hZ2VMaXN0LFxuICAgICAgICB9O1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIEdNLnhtbEh0dHBSZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2NyZWF0ZS1zbmhnLWluc3RhLXBvc3RcIixcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHBvc3REYXRhKSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9ubG9hZDogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpOyAvL2Rpc3BsYXkgXCJva1wiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY3JlYXRlUG9wdXAoKSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDFcIikuaW5uZXJUZXh0O1xuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmotdGV4dFwiKS5pbm5lclRleHQudHJpbSgpO1xuICAgIGxldCBpbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW1nXCIpO1xuICAgIGxldCBpbWFnZUFyciA9IEFycmF5LmZyb20oaW1hZ2VzKS5maWx0ZXIoaW1nID0+IHtcbiAgICAgICAgLy8gZmlsdGVyIG91dCBkZWZhdWx0IGxvZ29zIGV0Yy5cbiAgICAgICAgaWYgKGltZy5zcmMuaW5jbHVkZXMoXCJpY2RmMmUyYTM0NWZkMjJmN1wiKSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKGltZy5zcmMuaW5jbHVkZXMoXCJpYzFkMDBjMjJkMzdkMTk3NFwiKSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKGltZy5zcmMuaW5jbHVkZXMoXCJpYWU1YjViY2EwY2M1NGMxMFwiKSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKGltZy5zcmMuaW5jbHVkZXMoXCJ2aWRlby1wbGF5LnN2Z1wiKSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKGltZy5zcmMuaW5jbHVkZXMoXCJwaXhlbC5naWZcIikpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKGltYWdlQXJyKTtcbiAgICBsZXQgaW1hZ2VzRWxlbWVudHMgPSBcIlwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2xhc3NTdHJpbmcgPSBpIDwgNiA/IFwic2VsZWN0ZWQgXCIgOiBcIlwiO1xuICAgICAgICBjb25zdCBsYWJlbEhlcmVDbGFzcyA9IGkgPT0gMCA/IFwibGFibGUtaGVyZSBoZXJlXCIgOiBcImxhYmxlLWhlcmVcIjtcbiAgICAgICAgaW1hZ2VzRWxlbWVudHMgKz0gYFxuICAgICAgPGRpdiBjbGFzcz1cInNuaGctaW5zdGEtdGh1bWJuYWlsLXdyYXBwZXJcIj5cbiAgICAgICAgPGltZyBzcmM9XCIke2ltYWdlc1tpXS5zcmN9XCIgY2xhc3M9XCIke2NsYXNzU3RyaW5nfXNuaGctaW5zdGEtdGh1bWJuYWlsXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiJHtsYWJlbEhlcmVDbGFzc31cIj4ke3RpdGxlfTwvc3Bhbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInVwXCI+XjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwicmlnaHRcIj4+PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJkb3duXCI+djwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwibGVmdFwiPjw8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImxhYmxlLWhlcmUtYnRuXCI+bGFiZWwgaGllcjwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICAgICAgYDtcbiAgICB9XG4gICAgY29uc3QgaGFzaFRhZ3NUZXh0ID0gXCIjXCIgK1xuICAgICAgICBoYXNodGFnc1xuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IDAuNSAtIE1hdGgucmFuZG9tKCkpXG4gICAgICAgICAgICAuc2xpY2UoMCwgOClcbiAgICAgICAgICAgIC5qb2luKFwiICNcIik7XG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaWFsb2cuaWQgPSBcImluc3RhLXByZXZpZXdcIjtcbiAgICBkaWFsb2cuaW5uZXJIVE1MID0gYFxuICAgICAgPGRpdiBjbGFzcz1cIndpbmRvd1wiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJpbnN0YS1jbG9zZVwiPsOXPC9idXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImluc3RhLXRodW1ic1wiPlxuICAgICAgICAgICR7aW1hZ2VzRWxlbWVudHN9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGdhcDogOHB4O1wiPjxzcGFuPkxhYmVsOjwvc3Bhbj48aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImxhYmVsLWlucHV0XCIgdmFsdWU9XCIke3RpdGxlfVwiPjwvZGl2PlxuICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cInBvc3QtdGV4dC1pbnB1dFwiIGNvbHM9MTA+JHt0ZXh0fVxcblxcbiR7aGFzaFRhZ3NUZXh0fVxuICAgICAgICAgIDwvdGV4dGFyZWE+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImluc3RhLXBvc3RcIj5Qb3N0PC9idXR0b24+XG4gICAgICA8L2Rpdj5gO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGlhbG9nKTtcbiAgICBjb25zdCBpbWFnZVRodW1ibmFpbHMgPSBkaWFsb2cucXVlcnlTZWxlY3RvckFsbChcIi5zbmhnLWluc3RhLXRodW1ibmFpbFwiKTtcbiAgICBjb25zdCBsYWJsZUlucHV0ID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgICBsYWJsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlcmVcIikuaW5uZXJUZXh0ID0gbGFibGVJbnB1dC52YWx1ZTtcbiAgICB9KTtcbiAgICBmb3IgKGNvbnN0IHRodW1ibmFpbCBvZiBBcnJheS5mcm9tKGltYWdlVGh1bWJuYWlscykpIHtcbiAgICAgICAgdGh1bWJuYWlsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInNlbGVjdGVkXCIpKSB7XG4gICAgICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoXCIuaW5zdGEtY2xvc2VcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZGlhbG9nLnJlbW92ZSgpO1xuICAgIH0pO1xuICAgIGRpYWxvZy5xdWVyeVNlbGVjdG9yKFwiLmluc3RhLXBvc3RcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRJbWFnZXMgPSBkaWFsb2cucXVlcnlTZWxlY3RvckFsbChcIi5zbmhnLWluc3RhLXRodW1ibmFpbC5zZWxlY3RlZFwiKTtcbiAgICAgICAgc2VuZFBvc3RSZXF1ZXN0KEFycmF5LmZyb20oc2VsZWN0ZWRJbWFnZXMpLm1hcChfID0+IF8uc3JjKSk7XG4gICAgfSk7XG4gICAgZGlhbG9nLnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b24ubGFibGUtaGVyZS1idG5cIikuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbWFnZVdyYXBwZXIgPSBlLnRhcmdldC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNIZXJlID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoXCIuaGVyZVwiKTtcbiAgICAgICAgICAgIGlmIChwcmV2aW91c0hlcmUpIHtcbiAgICAgICAgICAgICAgICBwcmV2aW91c0hlcmUuY2xhc3NMaXN0LnJlbW92ZShcImhlcmVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWFnZVdyYXBwZXIucXVlcnlTZWxlY3RvcihcInNwYW5cIikuY2xhc3NMaXN0LmFkZChcImhlcmVcIik7XG4gICAgICAgICAgICBpbWFnZVdyYXBwZXIucXVlcnlTZWxlY3RvcihcImltZ1wiKS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICBpbWFnZVdyYXBwZXIucGFyZW50Tm9kZS5wcmVwZW5kKGltYWdlV3JhcHBlcik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gc2V0TGFibGVIZXJlKGUpIHtcbiAgICBjb25zdCBsYWJsZVNwYW4gPSBlLnRhcmdldC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpO1xuICAgIGxhYmxlU3Bhbi5jbGFzc0xpc3QuYWRkKFwiaGVyZVwiKTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZUxhYmVsUHJldmlldygpIHtcbiAgICBjb25zdCBwb3N0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxhYmVsLWlucHV0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKHZhbCkgPT4ge1xuICAgIH0pO1xufVxuYWRkU3R5bGUoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=