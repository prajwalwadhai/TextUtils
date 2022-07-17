import React, { useState } from "react";

export default function About(props) {
  
  let mystyle ={
    color : props.mode === 'dark'?'white':'black',
    backgroundColor : props.mode === 'dark'?'#121212':'white',
    // border:'1px solid',
    // borderColor:'white'
  }
  
  
  // ****** This is for dark mode button inside the about section which is not use when dark mode is present in navbar section ******
  // const [mystyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });


  // const [btnText , setBtnText] = useState("Enable Dark Mode");
  // const toggleStyle = () => {
  //   if (mystyle.color === "black") {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //       // border : '1px solid red'
  //     });
  //     setBtnText("Enable Light Mode");
  //   }
  //   else {
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setBtnText("Enable Dark Mode");
  //   }
  // };

  return (
    <div className="container my-5" style={{color : props.mode === 'dark'?'white':'black'}}>
    {/* make sho */}
      <h1 className="my-2">About Us</h1>
      <div
        className="accordion accordion-flush"
        id="accordionFlushExample"
      >
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
              style={mystyle}
            >
              TextUtils extension
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
            style={mystyle}
          >
            <div className="accordion-body">
            TextUtils extension will allow you to quickly perform such functions as:
            Reverse a text to read from end to start
            Title Case sentence
            Format number for thousand separator and to include decimal points. This will also use proper country-based formatting!
            Compare 2 strings to find if they are equal – can also ignore case
            Perform search using Regular Expression Search on Steroid :o
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
              style={mystyle}
            >
              TextUtils Fuctions
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
            style={mystyle}
          >
            <div className="accordion-body">
            Accessibility is all about making websites more usable for everyone, and especially for people with disabilities (like visual or audible impairments, sicknesses, or situational disabilities). It’s a broad term with even broader guidelines, but one of the ways you can make your site more accessible is by optimizing the alt text on your images.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
              style={mystyle}
            >
              TextUtils Blogs
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
            style={mystyle}
          >
            <div className="accordion-body">
             Hossein Amerkashi posted: “TextUtils extension will allow you to quickly > perform such functions as: Reverse a text to read from end to start Title  Case sentence Format number for thousand separator and to include decimal > points Compare 2 strings to find if they are equal – can” 
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
        <button type="button" className="btn btn-primary" onClick={toggleStyle}>
          {btnText}
        </button>
      </div> */}
    </div>
  );
}
  