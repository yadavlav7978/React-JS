import React from 'react'
import ReactDOM from 'react-dom';
 
// ------------------------------------ Tutorial: 5 --------------------------------------------------------
// JavaScript Expressions in JSX in ReactJs
// How to add javascript expression into a Html

var flname="Lav Yadav";


ReactDOM.render(
    <>
    <p>My name is {flname}</p>
    <p>Addition of 2 and 3 is : {2+3}</p>

    </>,
    document.getElementById('root')
);

// Note** : only expressions are allowed inside curly braces {},An expression is a piece of code that produce(return) a value,
//  such as a variable, function call, or mathematical operation.
// Statement not allowed (like if statements, for loops, and variable assignments (x=50), do not produce a value.)




