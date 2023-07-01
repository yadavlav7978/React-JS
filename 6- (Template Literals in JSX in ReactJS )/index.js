import React from 'react'
import ReactDOM from 'react-dom';
 

// ------------------------------------ Tutorial: 6 --------------------------------------------------------

// Template Literals in JSX in ReactJS 

const fname='Lav';
const lname='Yadav';
// templete literals concat multiple string
ReactDOM.render(
    <>
        <h1>My Name is {fname} {lname}</h1>
        <h2>My Name is {fname+" "+lname}</h2>
        <h3>My Name is is {`${fname} ${lname}`}</h3>
        <h4>{`My Name is is ${fname} ${lname}`}</h4>
        <h4>{`My First Name is ${fname} and last name is ${lname}`}</h4>

    </>,
    document.getElementById('root')
);



