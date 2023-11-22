export function addStyle() {
      
  // @ts-ignore
  GM_addStyle(
    `
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
  
      `
  );
}