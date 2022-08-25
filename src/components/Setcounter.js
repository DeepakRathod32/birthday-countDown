import { useState } from "react";
import { Link } from 'react-router-dom';

import "../pictures.css";

function SetCounter() {
  const [name, setName] = useState('');
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState("");
  const [link, setLink] = useState("");

//   console.log(name)
  function generateLink(){
    setLink(`http://localhost:3000/birthday/${name}/${day}/${month}`);
  }

  return (
    <div className="set_container">
      <h1 id="counter-header">Set Birthday Counter </h1>
      <div className="form">
        <input 
         type = "text"
         placeholder = "Enter Name"
         value = {name}
         onChange={(e)=>{setName(e.target.value)}} 
         />
        <br />
        <input 
         type="number" 
         max="31" 
         min="1" 
         value={day}
         onChange={(e)=>{setDay(e.target.value)}} />
        <br />
        <select value={month} onChange={(e) => {setMonth(e.target.value)}}>
          <option selected value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
        <br />
        <button type="submit" onClick={() => {generateLink()}}>Set Counter</button>
      </div>
      {
        link !== '' ? (
            <>
                <p className="gen-link">{link}</p>
                <Link to={`/birthday/${name}/${day}/${month}`}>
                    <button>Visit Link</button>
                </Link>
            </>
        ) : ('')
      }
    </div>
  );
}

export default SetCounter;
