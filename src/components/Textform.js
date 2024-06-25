import React,{useState} from 'react'

export default function Textform(props) {
  const handleUpclick=()=>{
    let newtext=text.toUpperCase();
    setText(newtext)
  }

  const handlelrclick=()=>{
    let newtext=text.toLowerCase();
    setText(newtext)
  }

  const handlecopyclick = () => {
    navigator.clipboard.writeText(text).then(
      () => {
        setCopySuccess('Text copied to clipboard!');
      }
    );
  };
   const handleExtraspaces=()=>{
    let newtext=text.split(/[ ]+/);
    setText(newtext.join(" "))

   }
  const handlecclick=()=>{
    let newtext="";
    setText(newtext)
  }

  const handleonclick=(event)=>{
    setText(event.target.value)
  }

  const [text,setText]=useState("");
  const [copySuccess, setCopySuccess] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label for="mybox" className="form-label"> textarea</label>
        <textarea className="form-control"  onChange={handleonclick} value={text} id="mybox" rows="5"></textarea></div>
        <button className='btn btn-secondary mx-1' onClick={handleUpclick}>Convert to Uppercase</button>
        <button className='btn btn-secondary mx-1' onClick={handlelrclick}>Convert to Lowercase</button>
        <button className='btn btn-secondary mx-1' onClick={handlecclick}>Clear</button>
        <button className='btn btn-secondary mx-1' value ={copySuccess} onClick={handlecopyclick}>Copy</button>
        <button className='btn btn-secondary mx-1' onClick={handleExtraspaces}>Remove extra spaces</button>

        </div>
    <div className='container my-4' style={{color: props.mode==='dark'?'white':'black'}}>
      <h3>Summary</h3>
      <p>{text.split(" ").length-1} words and {text.length} characters</p>
      {/* <p>{0.008 * text.split(" ").length}Minutes read</p> */}
      <h3>preview:</h3>
      <p>{text.length>0?text:"your text will show here for preview so write something in above to show..."}</p>

        </div>

</>
  )
}
