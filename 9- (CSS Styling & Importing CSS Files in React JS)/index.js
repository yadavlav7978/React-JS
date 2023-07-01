//--------------------------------------------CSS Styling & Importing CSS Files in React JS----------------------------------

// Note**: Here we write 'className' instaed of 'class'(as we did in CSS) because in React 'class' alraedy keyword.

import react from 'react';
import ReactDOM from 'react-dom';
import './index.css';           // Importing CSS file

const img1="https://picsum.photos/300/300";
const img2="https://picsum.photos/400/400";
const img3="https://picsum.photos/500/500";


ReactDOM.render(
  <>
    <h1 className='header' >Welcome to photos Gallary</h1>

    <div className='img-container'>
    <img src="https://picsum.photos/200/300" alt="Random-Images" />
    <img src={img1} alt="Random-Images" />
    <img src={img2} alt="Random-Images" />

    <a href='https://www.google.com/' target="_lavyadav" >
    <img src={img3} alt="Random-Images" />
    </a>
    </div>
  </>,
    document.getElementById('root')
);




