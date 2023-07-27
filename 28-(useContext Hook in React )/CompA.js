import React, { createContext } from "react";
import CompB from "./CompB";

// Create the context object
const data = createContext();

{/*
    //!--------------------------------------------- useContext() Hook -------------------------------------------
    1. The ' useContext ' hook in React is used for consuming data send by the ' createContext ' function.
       The 'createContext' function in React allows you to create a context object that provides a way to share data down the component 
       tree without manually passing props through each level of the tree.

    2. When we use createContext, we create a context object that has two main components: Provider and Consumer. 
       The  'Provider' component wraps the higher-level components and allows you to pass data through the 'value' prop.
       The 'Consumer' component allows the child components to consume that data.

    3.  When we wrap a component with the Provider, the data provided through the value prop becomes available not only to the immediate
        child component but to all its descendant components as well.
        Eg:  In below example we wrap <CompB/> component then data is available to this component as well as all its child component.

     4. we can use the 'useContext'  hook to retrieve the data from the context. 

*/}

const CompA = () => {
  
    // Data that we want to share 
  const shareData = {  
    FirstName: "Lav",
    LastName: "Yadav",
    Dob: "01/02/2001",
  };

  return (
    <>
      <data.Provider value={shareData}>  {/* With the help of value props we can share the data that we want to share*/ }
        <CompB />                         {/* Data is available to component (CompB) as well all its child componenet*/ }     
      </data.Provider>
    </>
  );
};

export default CompA;
export { data };
