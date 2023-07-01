import React from 'react'
import ReactDOM from 'react-dom';
 
 // ---------------------- ------------- Tutorial: 2 --------------------------------------------------------

//Q. How to add jsx Multiple Elements inside ReactDOM.render() in ReactJS

//-------------First method (Using <div> tag)----------
ReactDOM.render(
    <div>                        
        <h1>Div First Element</h1>        
        <p>Div Second Element</p>
    </div>,
    document.getElementById('root')
);

// Note**: Here <div> method create a new div inside the 'root' div

// ---------second Method (Using array)-----------
ReactDOM.render(
    [
        <h1> Array First Element</h1>,
        <p>Array Second Element</p>,
        <p>Array Third Element</p>
        
    ],
    document.getElementById('root')
);




