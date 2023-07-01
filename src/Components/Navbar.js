// Start  components always in Capital letter
import React,{useState} from 'react';
import PropTypes from 'prop-types';   
import { Link } from 'react-router-dom';
// import TextForm from './TextForm';



export default function Navbar(props) {
  // const [mystyle,setMystyle]= useState(
  //   {
  //     color: 'black',
  //     backgroundColor:'white',
  //     // border: "1px solid black"
  //     // border: "4px-solid-black"
  //   }
  //   )
 
    // if(props.mode==='dark')
    // {
    //   setMystyle({
    //     color:' white',
    //     backgroundColor :'black'
    //   })
    // }
    // else
    // {

    // }
    const [mode1,setMode1]=useState('light');
    // const [alert,setAlert] =useState(null);
    // const showAlert =(messasge, type)=>{
    //   setAlert({ 
    //     msg: messasge,
    //     type : type
    //   })
    //   setTimeout(() => {
    //     setAlert(null);
        
    //   }, 3000);
    // }
    // const [workingmode,setWorkingmode]=useState('dark');
    const toggleMode1=()=>{
      if(mode1==='light')
      {
        setMode1('red');
        // setWorkingmode('red');
        document.body.style.backgroundColor='#FF6969';
        // setAlert(
        //   "Dark mode has enabled", "success"
        // )
       
          // showAlert( "red mode has enabled", "success");
        }
        else 
        {
          setMode1('light');
          document.body.style.backgroundColor='white ';
          // setAlert(
          //   "Light mode has enabled", "success"
          //   )
            // showAlert( "Light mode has enabled", "success");
      }
  
    }
    const toggleMode2=()=>{
      if(mode1==='light')
      {
        setMode1('blue');
        // setWorkingmode('blue');
        document.body.style.backgroundColor='#46458C';
        // setAlert(
        //   "Dark mode has enabled", "success"
        // )
       
          // showAlert( "blue mode has enabled", "success");
        }
        else 
        {
          setMode1('light');
          document.body.style.backgroundColor='white ';
          // setAlert(
          //   "Light mode has enabled", "success"
          //   )
            // showAlert( "Light mode has enabled", "success");
      }
  
    }
    const toggleMode3=()=>{
      if(mode1==='light')
      {
        setMode1('dark');
        // setWorkingmode('blue');
        document.body.style.backgroundColor='#546783';
        // setAlert(
        //   "Dark mode has enabled", "success"
        // )
       
          // showAlert( "blue mode has enabled", "success");
        }
        else 
        {
          setMode1('light');
          document.body.style.backgroundColor='white ';
          // setAlert(
          //   "Light mode has enabled", "success"
          //   )
            // showAlert( "Light mode has enabled", "success");
      }
  
    }
  // let workingMode=props.mode;
  // if(props.mode==='light')
  // {
  //   workingMode='light';
  // }
  // else if(props.mode==='red')
  // {
  //   workingMode='red';
  // }
  // else if(props.mode==='blue')
  // {
  //   workingMode='blue';
  // }
  // else if(props.mode==='purple')
  // {
  //   workingMode='purple';
  // }

  // else{
  //   workingMode='dark';
  // }

  return (
    <>
    {/* <div>
      <TextForm mode={props.mode}/ >  
    </div> */}

    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}  >
      <div className="container-fluid" >
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">{props.about}</Link>
            </li>
          
          </ul>
          
                  <div className= {`form-check form-switch mx-3 text-${props.mode==='dark'? 'light' : 'dark ' }  `}  >
                  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable Dark Mode</label>
                </div>
                  <div className= {`form-check form-switch mx-3 text-${props.mode==='dark'? 'light' : 'dark ' }  `}  >
                  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleMode1} />
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable Red Mode</label>
                </div>
                  <div className= {`form-check form-switch mx-3 text-${props.mode==='dark'? 'light' : 'dark ' }  `}  >
                  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleMode2} />
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable blue Mode</label>
                </div>
                 
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-primary" type="submit">Search</button>

          </form>
        </div>
      </div>
      
    </nav>
    </>
  )
}
Navbar.propTypes = {
     title: PropTypes.string.isRequired,
     about: PropTypes.string
 }
 
Navbar.defaultProps={
    title : "Default Title",
    about : 'Default About heading'
}
 