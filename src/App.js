// import About from "./About";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";


function App() {
  
  const [mode , setMode] = useState('light');
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#121212';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
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
      <Navbar title="Prajwal" aboutText="About" mode ={mode} toggleMode={toggleMode}/>
      <div className="container my-4">
        <TextForm heading = "Enter Text Here" mode ={mode} toggleMode= {toggleMode}/>
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
