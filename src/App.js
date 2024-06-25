import React,{ useState } from 'react';
import './App.css';
//  import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import Alert from './components/Alert';
// import { BrowserRouter as Router,
//   Routes,
//   Route,
//   BrowserRouter
// } from "react-router-dom";


 
function App() {
  const [mode,setmode]=useState("light");

  const togglemode=()=>{
    if(mode==='light'){
      setmode("dark")
   document.body.style.backgroundColor='#001861'
  }
  else{
    setmode("light")
    document.body.style.backgroundColor='white'
  }
  }
  return (
    <>
        <Navbar
          title="TextUtils"
          aboutText="TextAbouts"
          mode={mode}
          togglemode={togglemode}
        />
        {/* <Alert/> */}
        <div className="container my-4" mode={mode}>
                <Textform heading="Try TextUtils" mode={mode}/>
            </div>
            {/* <About/> */}
    </>
  );
}

export default App;
