import React from 'react';
import ReactDOM from 'react-dom';
import NAME from './App';

// default data ko kisi bhi name se export kar sakte hai .
// But defalut data ke alava dusre data ko export usi name se karenge jis name se bo object or function banaya gaya hai. 
 
import { branch,dob,greet } from './App';

// branch,dob name ke js object hai and greet name ka function hai . 

// Multiple data ko export hum curly braces { } se kar skte hai .


ReactDOM.render(
 
  <>
   <h3>{greet()}</h3>
   <ol>
    <li>My name is : {NAME}</li>
    <li>Date of Birth : {dob}</li>
    <li>My branch is : {branch}</li>
   </ol>
  </>,
  document.getElementById('root')
)
