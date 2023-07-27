// -------------------------------- Display Current Date and Time in JSX in React JS ----------------------

import React from 'react'
import ReactDOM from 'react-dom';
const name="Lav Yadav"; 
const date=new Date().toLocaleDateString();
const time=new Date().toLocaleTimeString();


ReactDOM.render(
    <>
    <h2>Hello, My Name is {name}</h2>
    <p>Current Time: {time}</p>
    <p>Current Date: {date}</p>
    </>,
    document.getElementById('root')
);





