import React, { Component, useState } from "react";

const App = () => {
  const [FullName, updateFullName] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const updateForm = (event) => {
    const name = event.target.name; // It is used to identified in which input field user enter the input.
    const value = event.target.value; // It is used to identified what value user enter.

    updateFullName((prev) => {
      return {
        ...prev,
        [name]: value,
      };

      // if (name === "fname") {
      //   return {
      //     firstName: value,
      //     lastName: prev.lastName,
      //     email: prev.email,
      //   };
      // } else if (name == "lname") {
      //   return {
      //     firstName: prev.firstName,
      //     lastName: value,
      //     email: prev.email,
      //   };
      // } else {
      //   return {
      //     firstName: prev.firstName,
      //     lastName: prev.lastName,
      //     email: value,
      //   };
      // }
    });
  };

  const [formDetail, changeForm] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default behavior of form

    const updateFormDetail = {
      // create a new object
      fname: FullName.firstName,
      lname: FullName.lastName,
      email: FullName.email,
      phone: FullName.phone,
    };

    changeForm(updateFormDetail); // Pass the object
  };

  {
    /*//!  ----------------------------------------------- Spread operator or ... (three dot operator) ------------------------

      The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
          
     //?  1. we can use the spread operator to concatenate or copy arrays easily.  
           const array1 = [1, 2, 3];
           const array2 = [4, 5, 6];

           const concatenatedArray = [...array1, ...array2];
               // Result: [1, 2, 3, 4, 5, 6]

           const copiedArray = [...array1];
               // Result: [1, 2, 3]
      
      //?  2. When used with objects, the spread operator creates shallow copies, merging the properties of one object into another.
           const obj1 = { a: 1, b: 2 };
           const obj2 = { c: 3, d: 4 };

           const mergedObject = { ...obj1, ...obj2 };
                 // Result: { a: 1, b: 2, c: 3, d: 4 }

           const shallowCopy = { ...obj1 };
                  // Result: { a: 1, b: 2 }

  */
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h1>
            Hello {formDetail.fname} {formDetail.lname}
          </h1>

          <input
            type="text"
            placeholder="Enter Your First Name"
            name="firstName"
            value={FullName.firstName}
            onChange={updateForm}
          />
          <br />

          <input
            type="text"
            placeholder="Enter Your Last Name"
            name="lastName"
            value={FullName.lastName}
            onChange={updateForm}
          />
          <br />
          <input
            type="text"
            placeholder="Enter Your Email"
            name="email"
            value={FullName.email}
            onChange={updateForm}
          />
          <br />
          <input
            type="number"
            placeholder="Enter Your Phone Number"
            name="phone"
            value={FullName.phone}
            onChange={updateForm}
          />

          <button> Submit </button>

          <h3>Your email is : {formDetail.email}</h3>
          <h3>Your phone Number is : {formDetail.phone}</h3>
        </div>
      </form>
    </>
  );
};

export default App;

/*
  
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount( (prevCount) => prevCount + 1);
  };

The setCount function is the updater function,It is responsible for updating the state value count.

!   Arrow function for functional update:

!   In the line (prevCount) => prevCount + 1, we use an arrow function as the argument to setCount. 
!   This is called a functional update, and it is an alternative way to update the state value, 
!   especially when the new state depends on the previous state.

When the increment function is called, the arrow function is called, 
and the current state value of count is passed as 'prevCount'. 
Inside the arrow function, we increment prevCount by 1 to get the new value for count.

*/
