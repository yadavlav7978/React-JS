
const name='Lav Yadav'; // Create javascript object
const dob='01-02-2001';
const branch='Computer Science';

function greet(){
  const word='Hello , Good Morning';
  return word;
}

export default name;  // There is only one defualt data (object,function) can we export.
// Default data ek hi hoga or hum kisi bhi data(object, function) ko default bana sakte hai with the help of 'default' keyword. 

export {dob,branch,greet};

// multiple data ko export hum curly braces se kar skte hai { }.

