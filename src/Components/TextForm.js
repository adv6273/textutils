import React,{useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
  const handleUpClick=()=>{
    // console.log("upper Click button Clicked and your text is: " + text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert(  "Converted to Uppercase", "success")
    
  }
  const handleLowClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert( "Converted to Lowercase" , "success")
  }
  const handleOnChange = (event)=>{
    // console.log("Change Happened"  );
    setText(event.target.value);
    
  }
  const handleClrClick=()=>{
    
    setText("");
    props.showAlert( "You have deleted the whole text" , "danger" )
    
  }
  const [text, setText] = useState("");
  // let c=0;
  // for (let index = 0; index < text.length; index++) {
    
  //   if(text[index]===' ' && text[index-1]!==' ') 
  //   {
  //     c=c+1;
  //     console.log(c)
  //     console.log(index)
  //     console.log(index)
  //     console.log(text.length)
  //   }
  //   else if(text.length===[index-1] && text[index]!==' ')
  //   {
  //     console.log(c)
  //     console.log(text.length)
  //     console.log(index)
  //     c=c+1;
  //   }
  // }
  const word_count=text.split(/\s+/).filter((element)=>{
    return element.length!==0
  }).length;
  const sentence_count=text.split('.').length;
  const total_char=text.length;
  const getStyle = () => {
    switch (props.mode) {
      case 'dark':
        return {
          backgroundColor: '#737088',
          color: 'white'
        };
      case 'red':
        return {
          backgroundColor: 'red',
          color: 'white'
        };
      case 'blue':
        return {

          
          backgroundColor: '#46458C',
          // document.body.style.backgroundColor='red',
          color: 'white'
        };
      default:
        return {
          backgroundColor: '',
          color: ''
        };
    }
  };
 
  return (
    <>
    <div className='continaer' style={
      { color: props.mode==='dark'? 'white' : 'black ' }
      // getStyle()
      
      }  >
   
  
   <h1> {props.heading}</h1>
   <div className="mb-3">
     
     <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} 
     style={
      
      {    backgroundColor: props.mode==='dark'? '#737088' : ' white ' , 
     color: props.mode==='dark'? 'white' : ' black ' }
     
     }  rows="6"></textarea>
   </div>
   <button className="btn btn-primary mx-1 my-1" style={{ marginRight: '10px' }} onClick={handleUpClick}>Convert into Uppercase</button>
   <button className="btn btn-primary mx-1 my-1" style={{ marginRight: '10px' }} onClick={handleLowClick}>Convert into lowerCase</button>
   <button className="btn btn-primary mx-1 my-1" style={{ marginRight: '10px' }} onClick={handleClrClick}>Clear the text area</button>
 
 </div>
  <div className="container1 my-3" style={
    { backgroundColor: props.mode==='dark'? '#546783' : 'white ',
     color: props.mode==='dark'?'white':'black', }
    // getStyle()
    
    } >
    <h2> Your Text Summary</h2>
    <p> {word_count} words and {total_char} characters </p>
    <p> You Can read this text into <b> {0.008*word_count}</b> minutes</p>
    <p>There are total {sentence_count-1} sentences are in your text.</p>
    <h3 >   Text preview</h3>
    <p  >{text.length===0?"Enter Your Text for preview" : text}</p>

  </div>
  
   </>
  )
}
// TextForm.propTypes = {
//   heading: PropTypes.string.isRequired,
  
// }