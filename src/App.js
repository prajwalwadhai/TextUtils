// import { keyboard } from "@testing-library/user-event/dist/keyboard";
import { useState } from "react";
import "./App.css";
// import About from "./About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React from "react";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   // Link,
// } from "react-router-dom";


function App() {
  
  // const inlineRadio2 = document.getElementById('inlineRadio2');
  const [mode , setMode] = useState('light');
  const [alert , setAlert] = useState(null);
  const [greyMode , setGreyMode] =useState('light');

  const showAlert=(message , type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#121212';
      showAlert("Dark mode has been Enabled", "success");
      document.title ='TextTutils - Dark Mode'
      
      // setInterval(() =>{
      //   document.title = 'TextTutils - Join the MemberShip'
      // }, 2000)
      // setInterval(()=>{
      //   document.title = 'TextTutils - download TextTutils'
      // }, 1500)
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been Enabled", "success");
      document.title ='TextTutils - Light Mode';
    }
  }

  const toggleGreyMode=()=>{
    document.body.style.backgroundColor = 'red';
    if(greyMode === 'light'){
      setGreyMode('dark');
      showAlert("Dark mode has been Enabled", "success"); 
    }
    else{
      setGreyMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been Enabled", "success");
      document.title ='TextTutils - Light Mode';
    }
  }

  return (
    // <div classNameName="App">
    //   <header classNameName="App-header">
    //     <img src={logo} classNameName="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       classNameName="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React with Prajwal
    //     </a>
    //   </header>
    // </div>

    <>
    <Navbar title="TextUtils" aboutText="About" mode ={mode} toggleMode={toggleMode}/>
    <Alert alert = {alert} showAlert ={showAlert}/>
      <div className="container my-4">
              <TextForm heading = "Enter Text Here" mode ={mode} greyMode={greyMode} toggleMode={toggleMode} toggleGreyMode={toggleGreyMode} showAlert={showAlert}/>
              {/* <About /> */}
      </div>

    {/* <BrowserRouter>
    <Navbar title="TextUtils" aboutText="About" mode ={mode} toggleMode={toggleMode}/>
    <Alert alert = {alert} showAlert ={showAlert}/>
      <div className="container my-4">
      <Routes>
        <Route path="/" element={<TextForm heading = "Enter Text Here" mode ={mode} greyMode={greyMode} toggleMode={toggleMode} toggleGreyMode={toggleGreyMode} showAlert={showAlert}/>} />
        <Route path="about/*" element={<About />} />
      </Routes>
      </div>
    </BrowserRouter> */}
    </>
  );
}

export default App;
