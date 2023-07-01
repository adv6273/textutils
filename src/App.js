

import React,{ useState } from 'react';
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
// import { Switch } from 'react-router-dom'
// import TextForm from "./components/TextForm";
import Alert from './Components/Alert';
import ReloadConfirmation from './Components/ReloadConfirmation';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
  
// } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";


// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert] =useState(null);
  const showAlert =(messasge, type)=>{
     setAlert({ 
      msg: messasge,
      type : type
     })
     setTimeout(() => {
       setAlert(null);
       
     }, 3000);
  }
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#546783';
      // setAlert(
      //   "Dark mode has enabled", "success"
      // )
      // document.title='TextUtils-Dark Mode';
      
      showAlert( "Dark mode has enabled", "success");
      }
      else
      {
        setMode('light');
        document.body.style.backgroundColor='white ';
        // setAlert(
          //   "Light mode has enabled", "success"
          //   )
          // document.title='TextUtils-light Mode';
          showAlert( "Light mode has enabled", "success");
    }

  }
  return  (
    <>
   
    <Router> 

    <Navbar title="textutil1" about="About Us"  mode={mode} toggleMode={toggleMode} />
  <Alert alert= {alert} />
  <div className="container mt-3" > 
   
          <Routes> 

  <Route path="/about" element={<About mode={mode}  />} />
  <Route path="/" element={<TextForm heading="Enter your text for analyzing" mode={mode} showAlert={showAlert} />} />

          </Routes>

  </div>

 
  <ReloadConfirmation showAlert={showAlert} />
  

    </Router>

    </>
  );
}

export default App;
