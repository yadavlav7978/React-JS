//--------------------------------------------Internal CSS & Inline CSS Styling In React JS----------------------------------

import react from 'react';
import ReactDOM from 'react-dom';


const img1="https://picsum.photos/300/300";
const img2="https://picsum.photos/400/400";
const img3="https://picsum.photos/500/500";

// Note** : To apply inline CSS styles in JavaScript, We can directly set the 'style' attribute of an HTML element.
// we can add css as a key value pair where the keys represent CSS properties (like color, display, justifyContent, margin) 
// and the values represent the corresponding values for those properties (like 'rgb(8, 236, 34)', 'flex', 'center', '50px 0px').
// Remember value inclose in either single quotes '  ' or double quotes "  " 
// And the key written in camelCase format (justify-content written as justifyContent , and align-items written as alignItems ).
// Remove the Hypen - and written in camelCase format

const header={
  color: 'rgb(8, 236, 34)',
  display: 'flex',
  justifyContent: 'center',
  margin: '50px 0px'
};

const img={
width: '300px',
height: '300px'
};

const img_container={
display: 'flex',
justifyContent: 'center'
};


ReactDOM.render(
  <>
    <h1 style={header}>Welcome to photos Gallary</h1>

    <div style={img_container}>

    <img src="https://picsum.photos/200/300" alt="Random-Images" style={img} />
    <img src={img1} alt="Random-Images" style={img}/>
    <img src={img2} alt="Random-Images" style={img}/>

    <a href='https://www.google.com/' target="_lavyadav" >
    <img src={img3} alt="Random-Images" style={img}/>
    </a>

    </div>
  </>,
    document.getElementById('root')
);


// we can also do like this <h1 style={{ color: 'rgb(8, 236, 34)', display: 'flex', justifyContent: 'center', margin: '50px 0px'}}>Welcome to photos Gallary</h1>
// But Good practice if we did by creating Javascript object and pass it as value of 'style' attribute as we did in code.



