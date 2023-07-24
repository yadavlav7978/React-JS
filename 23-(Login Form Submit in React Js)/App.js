import React, { Component, useState } from "react";

const App = () => {
  const [firstName, changefirstName] = useState("");

  const updateFirstName = (event) => {
    changefirstName(event.target.value);
  };

  const [lastName, changeLastName] = useState("");

  const updateLastName = (event) => {
    changeLastName(event.target.value);
  };

  const [first, changefirst] = useState("");
  const [last, changeLast] = useState("");

  // Prevent Default Behavior: To prevent the default form submission behavior (which would send the form data to the server),
  // and refresh the page , you should call event.preventDefault() at the beginning of the onSubmit function.

  const handleSubmit = (event) => {
    event.preventDefault();

    changefirst(firstName);
    changeLast(lastName);
  };

  return (
    //  onSubmit function is automatically called when the user submits the form.
    //  or When the user clicks the submit button within the form
    <>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h1>
            Hello {first} {last}
          </h1>

          <input
            type="text"
            placeholder="Enter Your First Name"
            value={firstName}
            onChange={updateFirstName}
          />
          <br />

          <input
            type="text"
            placeholder="Enter Your Last Name"
            value={lastName}
            onChange={updateLastName}
          />

          <button> Submit </button>
        </div>
      </form>
    </>
  );
};

export default App;

//!--------------------------- Controlled component and Uncontrolled component -------------------------------
{
  /*
Controlled Components:
A controlled component is a React component whose value is controlled by React.
In other words, React manages the state and updates the component's value( "component value" refers to the value of a form element (e.g., an input, select, or textarea))
based on changes triggered by user input.

For eg: React component are those in which form data is handle by react component.
        We have input field, inside the input field we have onchange event handler and value field
        whenever user change anything in the input field then onchange function invoke and we have direct acces
        to what user enters in the input field.

? Note**: Both the value and onChange props are necessary for the input element to function as a controlled component properly.
     Each prop serves a specific purpose:
     1.value:
     The value prop is used to set the current value of the input element, 
     it ensure that the input element always reflects the current state value.

     2. The onChange prop is an event handler that is triggered whenever the user interacts with the input element.

Uncontrolled components:
Uncontrolled components, on the other hand, handle their state internally, and React doesn't manage their 
values directly.Instead, we can access the component's state using other methods, such as DOM manipulation.

 For eg: In uncotrolled component we do not have direct access to input field. once the user enter their input 
         and click on submit button  'useRef' is used to access the value of the input element.
         React doesn't control the input's value or manage its state; it's managed internally by the input element.

*/
}
