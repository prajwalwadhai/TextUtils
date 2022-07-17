// Hooks : bina className ko use kiye className ke feature ko ham use kar sakte hai using Hooks(variable ko update ham normal method se nani kar sakte to state ka use karte hai)
// search on google "react hooks" documentation me hooks ka ye syntax mil jayega (useState is a Hooks)

import React, {useState} from "react";

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("clicked");
        // setText("You have clicked on handleUpClick" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!" , "success");
    }

    const handleLowClick=()=>{
      let newText = text.toLocaleLowerCase();
      setText(newText);
      props.showAlert("Converted to LowerCase!" , "success");
    }

    const handleClearClick=()=>{
      let newText = '';
      setText(newText);
      props.showAlert("Text Cleared!" , "success");
    }

    const handleCopy=()=>{
        var text = document.getElementById("myBox");
        text.select();
        document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied!" , "success");
    }

    const handleOnChange= (event)=>{
        // console.log("on change");
        setText(event.target.value);
    }
    
    const [text, setText] = useState(" ");   // Ye syntax 'text' ko useState vale fuction ki string assign karta hai badme ham setText fuction ka use karke use update kar sakte hai
  return (
    <>
    <div>
      <div className={`mb-3 text-${props.mode==='light'?'dark':'light'}`}>
        <h1>{props.heading}</h1>
        <textarea
          className={`form-control text-${props.mode==='light'?'dark':'light'}`}
          id="myBox"
          rows="8"
          value = {text}
          onChange = {handleOnChange}  // ye isliye use kiya taki ham textarea me our likh paye our vo update ho paye
          style={{backgroundColor: props.mode==='dark'?'#121212':'white'}}
          ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>Convert to Upper-Case</button> {/* must use onClick event listnear for when we click on button it run's the fuction handleUpclick */}
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleLowClick}>Convert to Lower-Case</button> 
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleClearClick}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleCopy}>Copy Text</button>
    </div>

    <div className={`container my-4 text-${props.mode==='light'?'dark':'light'}`}>
      <h2>Your text Summmary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.split(" ").filter((element)=>{return element.length!==0}).length} Character's</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length>0 ? text : "Nothing to preview"}</p>
    </div>

    </>
  );
}
