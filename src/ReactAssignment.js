import React, { useState } from 'react';
import './App.css';
//import './ReactAssignment.css'

function ReactAssignment(props){
    const [isLit, setLit] = useState(false); ////destructuring, useState returns array with 2 elements, one is boolean value and other is funtion to change boolean value
    let [tempValueC, setTempratureC] = useState(22);
    let [tempValueF, setTempratureF] = useState(72);
    return <div>
      <strong><u>Task1:</u> Add 2 more buttons: “ON” and “OFF”. Turn the light either ON or OFF depending on which button is clicked by wiring up the onClick handlers to set the state.</strong>
      <br/>
      <strong><u>Task2:</u> Add another piece of state: the room temperature. (Hint: you can call useState more than once!) Initialize it to 72 (or 22 for you Celsius types). Display the current temperature under the light status.</strong>
      <br/>
      <strong><u>Task3:</u> Add 2 more buttons: “+” and “-”. Then add onClick handlers that will increase or decrease the temperature by 1 degree when clicked.</strong>
      <br/>
      <strong><u>Solution1, 2, 3:</u></strong>
      <div className= {`room ${isLit?"lit": "dark"}`}>
      <br/>
      <strong>Room 2:</strong>
      <br/><br/>
      <button onClick={() => setLit(true)}> Light ON </button>
      <br/><br/>
      <button onClick={() => setLit(false)}> Light OFF </button>
      <br/><br/>
      Celsius Temperature: {tempValueC}
      <br />
      <button onClick={() => {
      setTempratureC(++tempValueC);
      setTempratureF((tempValueC * 9 / 5) + 32);
      }}> + </button>
      <button onClick={() => {
      setTempratureC(--tempValueC);
      setTempratureF((tempValueC * 9 / 5) + 32);
      }}> -- </button>
      <br/><br/>
      Fahrenheit Temperature: {tempValueF}
      <br/>
      <button onClick={() => {
      setTempratureF(++tempValueF);
      setTempratureC((tempValueF-32) * (5/9));
      }}> + </button>
      <button onClick={() => {
      setTempratureF(--tempValueF);
      setTempratureC((tempValueF-32) * (5/9));
      }}> -- </button>
      <br/><br/>
      </div>
      <br/><br/>
    </div>
  }

export default ReactAssignment; ////to make it usable for outside world