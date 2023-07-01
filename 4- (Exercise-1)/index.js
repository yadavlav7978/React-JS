import React from 'react'
import ReactDOM from 'react-dom';
 
// ------------------------------------ Tutorial: 4 --------------------------------------------------------

// ---------------------Exercise 1 -----------------------
//  Challenge #1: Create a Simple Web App on Top 5 Netflix Series List using JSX

ReactDOM.render(
    <>
       <h1>Netflix Web Series </h1> 
       <p>List of 5 best series:</p>
       <ol>
        <li>Dark</li>
        <li>Extra curricular</li>
        <li>Avenger 1</li>
        <li>Avenger 2</li>
        <li>Pk</li>
       </ol>
    </>,
    document.getElementById('root')
);



