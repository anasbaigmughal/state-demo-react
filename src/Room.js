import React, { useState } from 'react';
//import logo from './logo.svg';
//import './App.css';
import './Room.css'

function Room() {
    const [isLit, setLit] = useState(false); ////destructuring, useState returns array with 2 elements, one is boolean value and other is funtion to change boolean value
    //const state = useState(true); ////same as above statement, useState returns an array
    //console.log("State = ", state); ////confirm above useState returns array, check in console log
    let [age, setAge] = useState(20);
    function updateLit() {
        console.log("Button Clicked");
        //isLit = !isLit; ////wrong, it will be updated but not UI, previously we have to update UI manually, but now UI Libraries: reace, vue, angular provide us this facility automatically using setLit function
        setLit(!isLit);
    }
    ////**below is arrow funtion just like updateLit(), you could put that arrow function complete code in button onClick location
    //const increaseAge = () => {
    //    setAge(++age);
    //}
    ////above arrow function is given as single line code in increment button onClick function

    ////<div className= "room dark"> ////to use two calsses at once
    ////className= {"room "+(isLit?"lit": "dark")}  //old style, new style is template string with $ sign as used below
    ////<div className= {`room ${isLit?"lit": "dark"}`}> //new style //**this is not single quote behind room
    ////if two strings with dynamic value in between then there are three styles< single quote< doouble quote and `hello ${anyFunction} world`; // anyFunction is dynamic value
    return (
        <div className= {`room ${isLit?"lit": "dark"}`}>
            <br/>
            <strong>Room 1:</strong>
            <br/><br/>
            This room is: <u>{isLit? "Lit": "Dark"}</u> and the owner of room has age <u>{age}</u>
            <br/>
            <br/>
            <button onClick={updateLit}>Toggle Light</button>
            <br/>
            <br/>
            <button onClick={() => setAge(++age)}>
                Increment Age</button>
                <br/><br/>
        </div>
    );
}

export default Room;
