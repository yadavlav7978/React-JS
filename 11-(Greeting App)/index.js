//--------------------------------------------Creating Greeting App----------------------------------

import react from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const time = new Date().toLocaleTimeString();

const hours = time.slice(0, 2);
const meridiem = time.slice(time.length - 2, time.length);

var greet = '';
const greet_color = {};  // **Most important how to change color dynamically with if and else condition; 

if (meridiem == 'AM') {
  greet = 'Good Morning';
  greet_color.color = 'Green';    // Change the color of greeting word
}
else if (hours == 12 || (hours >= 1 && hours < 7)) {
  greet = 'Good Afternoon';
  greet_color.color = 'Orange';

} else {
  greet = 'Good Night';
  greet_color.color = 'Black';

}

ReactDOM.render(
  <>
    <h1 className='top_header'>Welcome to my Greeting App</h1>
    <div className='container'>
      <div className='header'>
        <h1 className='color1'>Hello Lav Yadav</h1>
        <h1 >, <span style={greet_color}>{greet}</span ></h1> 
      </div>
    </div>
  </>,
  document.getElementById('root')
);
