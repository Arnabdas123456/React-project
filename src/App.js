import React, {useState, useEffect} from "react"; 
import './App.css';


function App(){
  
  const [quote, setQuote]=useState("");
  const [aurthor, setAurther]=useState("");
 

useEffect(() => {
   fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(
      (quote) =>{
         setQuote(quote.content);
         setAurther(quote.author);

      }
   )
  },[]);

  let fetchNewQuote = () => {
  fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(
     (quote) =>{
        setQuote(quote.content);
         setAurther(quote.author);
       }
   )
  }
  return (
    <div className="App">
      <div className='heading'>
      <h1>Quote of the day</h1>
      <h4>{quote}</h4>
      <h3>Aurthor - {aurthor}</h3>
      
      </div><br/>
       <button className='btn' onClick={fetchNewQuote}> New Quote </button>
    </div>
  );
}

export default App;
