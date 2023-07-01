//--------------------------------------------JSX Attributes in ReactJS----------------------------------

// Note**: It's important to note that JSX is not HTML. JSX is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript.
// The JSX code is then transformed into regular JavaScript by Babel before being executed by the browser.


import react from 'react';
import ReactDOM from 'react-dom';
const img1="https://picsum.photos/300/300";
const img2="https://picsum.photos/400/400";
const img3="https://picsum.photos/500/500";

// Here image tag is self closing tag so ( in html we write ---> <img> ) But in jsx it  <img/>

ReactDOM.render(
  <>
    <h1>Welcome to Photos Gallary</h1>
    <img src="https://picsum.photos/200/300" alt="Random-Images" />  
    <img src={img1} alt="Random-Images" />
    <img src={img2} alt="Random-Images" />

    <a href='https://www.google.com/' target="_lavyadav" >
    <img src={img3} alt="Random-Images" />
    </a>

  </>,
    document.getElementById('root')
);




