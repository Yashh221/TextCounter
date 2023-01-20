// import React from 'react';
import PropTypes from "prop-types";
import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText= text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success");
  };
  const handleLoClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText= text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success");
  };
  const handleClearText=()=>{
    console.log("Clear Text Clicked");
    let newText="";
    setText(newText);
    props.showAlert("Text Cleared","success");
  }
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const handleReverseText=()=>{
    console.log("Reverse Text Clicked" + text);
    let newText=text.split('').reverse().join('');
    setText(newText);
    props.showAlert("Text Reversed","success");
  };
  const handleExtraSpace=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Space Removed","success");
  }
  const [text, setText] = useState("");
  // setText=("");
  return (
    <>
    <div className="container" style={ {color:props.mode==='dark'? 'white':'#042743'}} >
      <h1 >{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange} 
          style={ {backgroundColor:props.mode==='dark'? 'grey':'white',color:props.mode==='dark'?'white':'#042743'}}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-4" onClick={handleLoClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-4" onClick={handleClearText}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-4" onClick={handleReverseText}>
        Reverse Text
      </button>
      <button className="btn btn-primary mx-4" onClick={handleExtraSpace}>
        Remove Extra Space
      </button>
    </div>
    <div className="container my-2" style={ {color:props.mode==='dark'? 'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.length ? text.split(" ").length:0} words and {text.length} characters</p>
      <p>Time to read the data-{text.split(" ").length*0.008} minutes.</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  );
}

Textform.proptype = {
  heading: PropTypes.string,
};
