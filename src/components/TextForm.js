// Hooks : bina class ko use kiye class ke feature ko ham use kar sakte hai using Hooks(variable ko update ham normal method se nani kar sakte to state ka use karte hai)
// search on google "react hooks" documentation me hooks ka ye syntax mil jayega (useState is a Hooks)

import React, {useState} from "react";

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("clicked");
        // setText("You have clicked on handleUpClick" + text);
        let newText = text.toUpperCase();
        setText(newText);
        
    }

    const handleLowClick=()=>{
      let newText = text.toLocaleLowerCase();
      setText(newText);
    }

    const handleClearClick=()=>{
      let newText = '';
      setText(newText);
    }

    const handleOnChange= (event)=>{
        // console.log("on change");
        setText(event.target.value);
    }
    
    const [text, setText] = useState("Enter the text you want to convert");   // Ye syntax 'text' ko useState vale fuction ki string assign karta hai badme ham setText fuction ka use karke use update kar sakte hai
  return (
    <>
    <div>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value = {text}
          onChange = {handleOnChange}  // ye isliye use kiya taki ham textarea me our likh paye our vo update ho paye
          ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Upper-Case</button> {/* must use onClick event listnear for when we click on button it run's the fuction handleUpclick */}
      <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lower-Case</button> 
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
    </div>

    <div className="container my-4">
      <h2>Your text Summmary</h2>
      <p>{text.split(" ").length} words and {text.length} Character's</p>
      <p>{0.008 * text.split(" ").length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
