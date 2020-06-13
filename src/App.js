import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Room from './Room'
import ReactAssignment from './ReactAssignment'; ////to make use of Assignment.js

function App() {
  return (
    <div>
      <a href="https://github.com/anasbaigmughal/state-demo-react">Repository Link</a>
      <h2><u>Class Work:</u></h2>
      <Room></Room>
      <h2><u>DIY Assignment:</u><br/></h2>
      <ReactAssignment name="Muhammad Anas Baig"/>
    </div> ////only nested divs allowed, we are returning JSX which is JavaScript XML
  )
}

export default App;