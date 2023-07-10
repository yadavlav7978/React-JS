import react from "react";
import Reactdom from "react-dom";
import App from "./App";
import "./index.css";
{
  /*
 ! -------------------------------------------------- Hooks in react js --------------------------------------------
1. In React, hooks are functions that allow you to use state and other React features in functional components.
   or,  Hooks allow function components to have access to state and other React features.
   Because of this, class components are generally no longer needed.

2. React provides a set of built-in hooks, such as useState, useEffect, useContext, and useRef, among others. 

3. useState: useState is used to manage state in functional components. It returns a stateful value and a function to update that value.
   By calling this function, you can update the state value, which triggers a re-render of the component.

4.   There are 3 rules for hooks:
  a) Hooks can only be called inside React function components.
  b) Hooks can only be called at the top level of a component.
  c) Hooks should always be used at the top level of React function.
  d) It does not work inside the classes


5. useState takes an initial state value and returns an array with the current state value and a function to update the state

   Example : const [count, setCount] = useState(0);
    we are using array destructuring By using array destructuring, we assign the first element of the returned array to the variable count 
    and the second element to the variable setCount

   In this example 'count' refer to current state and 'setcount' is function to update the state
  
  * without array destructuring we can do above thing as well but better if we used array destructuring:

  useState returns an array with two elements: the current state value and a function to update the state
  const state = useState(0);

  const count = state[0]; // Accessing the current state value
  const setCount = state[1]; // Accessing the function to update the state
  
*/
}

Reactdom.render(<App />, document.getElementById("root"));
