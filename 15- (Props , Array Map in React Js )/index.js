import reactdom from "react-dom";
import react from "react";
import Cards from "./Cards";
import Movie from "./Movie";
import "./index.css";


//-------------------------------- Props and Component in reactjs-------------------------------------------------------------
{/*
---------------------- Component  ---------------------------

 Note* : Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”)
and return return JSX (JavaScript XML) as their output , describing what should appear on the screen.

 Example :  function Welcome(props) {
             return <h1>Hello, {props.name}!</h1>;
              }

 React components promote reusability, maintainability, and modularization of your application's UI.
 They allow you to create a component hierarchy, where components can be composed together to create complex user interfaces.

*/}

{/*
---------------------------- Props   -------------------------------

In React, we can create custom components and define own user-defined attributes or properties,which are commonly referred to as props.

Eg: <CustomComponent name="John" age={25} />  it represent component

<CustomComponent>: This is a JSX element representing the CustomComponent component. It is similar to an HTML tag like <img/>
and 'name' and 'age' are two props of this component so we can say that these jsx attribute refer to props

Note**: keep in mind that during creation of props or attribue of component not used keyword like 'className'
<CustomComponent className="John" age={25} />   <---  here className used to for styling the element so avoid to use such type of keyword

*/}

//------------------ Now i look how array.map() function useful here----------------------------------------------------------

reactdom.render(
  <>
    <h1 className="header">List of My Favourate Movie </h1>

    {Movie.map((val, indx) => (
      <Cards imgsrc={val.link} name={val.Name} rating={val.Rating} />
    ))}

  {/* Note**:  In JSX, when you want to include HTML or any dynamic JavaScript expression, you need to wrap it inside curly braces { }. 
  This allows you to embed JavaScript code within your JSX markup.
  */}

  </>,
  document.getElementById("root")
);

  {/* {
    Movie.map(function (val,indx){
    return(
    <Cards
      imgsrc={val.link}
      name={val.Name}
      rating={val.Rating}
     />)
    }
   )
   } */}

//                         --------------------------------Array.map()--------------------

{/* 
In React.js, the Array.map() method is commonly used for iterating over an array and transforming its elements into a new array
Below, we loop through the numbers array using the JavaScript map() function. We return a <li> element for each item. 
Finally, we assign the resulting array of elements to listItems

Example : 
const numbers = [1, 2, 3, 4, 5];

const listItems = numbers.map((number) =>
<li>{number}</li>
);

Then, we can include the entire listItems array inside a <ul> element:

<ul>{listItems}</ul>

*/}

// ---------------------------------------------------------------------------------------------------------------------------------------

// reactdom.render(
//   <>
//   <h1 className="header">List of My Favourate Movie </h1>
//     <Cards
//       imgsrc={Movie[0].link}
//       name={Movie[0].Name}
//       rating={Movie[0].Rating}
//     />

//     <Cards
//       imgsrc={Movie[1].link}
//       name={Movie[1].Name}
//       rating={Movie[1].Rating}
//     />

//     <Cards
//       imgsrc={Movie[2].link}
//       name={Movie[2].Name}
//       rating={Movie[2].Rating}
//     />
//   </>,
//   document.getElementById("root")
// );

//  -------------------------------------------------------------------------------------------------------------------------

// reactdom.render(
//   <>
//     <Cards
//       imgsrc="https://wallpapercave.com/dwp1x/wp7388098.jpg"
//       name="Pk"
//       rating="Rating : 8/10"
//     />

//     <Cards
//       imgsrc="https://wallpapercave.com/dwp1x/wp7388098.jpg"
//       name="Pk"
//       rating="Rating : 8/10"
//     />

//     <Cards
//       imgsrc="https://wallpapercave.com/dwp1x/wp7388098.jpg"
//       name="Pk"
//       rating="Rating : 8/10"
//     />
//   </>,
//   document.getElementById("root")
// );
