import React, { useState } from "react";

export default function TextForm(props) {
  const onhandleUpClick = () => {
    var upperText = text.toUpperCase();
    setText(upperText);
  };
  const onhandleLowerClick = () => {
    var lowerText = text.toLowerCase();
    setText(lowerText);
  };
  const onhandleClearClick = () => {
    var clearText = "";
    setText(clearText);
  };

  const onchangeClick = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter Your Text Here");
  const CapFClick = () => {
    let CapitalizeWords = text[0].toUpperCase();
    for (let i = 1; i <= text.length - 1; i++) {
      let currentCharacter,
        previousCharacter = text[i - 1];
      if (previousCharacter && previousCharacter === " ") {
        currentCharacter = text[i].toUpperCase();
      } else {
        currentCharacter = text[i];
      }
      CapitalizeWords = CapitalizeWords + currentCharacter;
    }
    setText(CapitalizeWords);
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  return (
    <>
      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div class="form-group mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={onchangeClick}
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        <button
          className="btn btn-primary mx-1 mb-2 mb-sm-0"
          onClick={onhandleUpClick}
        >
          Covert to Uppercase
        </button>

        <button
          className="btn btn-primary mx-1 mb-2 mb-sm-0"
          onClick={onhandleLowerClick}
        >
          Covert to Lowercase
        </button>
        <button
          type="submit"
          onClick={CapFClick}
          className="btn btn-primary mx-1 mb-2 mb-sm-0"
        >
          Captalize
        </button>
        <button
          className="btn btn-primary mx-1 mb-2 mb-sm-0"
          onClick={onhandleClearClick}
        >
          Clear text
        </button>

        <button
          type="submit"
          onClick={speak}
          className="btn btn-warning mx-1 mb-2 mb-sm-0"
        >
          Speak
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.trim() === "" ? 0 : text.match(/\S+/g).length} words and{" "}
          {text.replace(/\s+/g, "").length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
      </div>
    </>
  );
}
