import React, { useEffect, useState } from "react";

{
  /*
!--------------------------------------------- useEffect Hooks ------------------------------------------------
   1. The useEffect Hook allows you to perform side effects and handle cleanup task in your components.
      Some examples of side effects are: fetching data, directly updating the DOM, and timers.

   2. useEffect accepts two arguments. The second argument is optional.
      useEffect(<function>, <dependency>)  // useEffect always takes function as first arguement.
      
   3. The second argument of useEffect is an optional dependency array. It allows you to control when the effect should run.
      If you provide an empty array ([]) as the second argument, the effect will run only once.
    
?  4. Note** : 'useEffect' runs on every render. it means that on every render 'useEffect' function run.
*/
}

const App = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    alert("You clicked on button");
    // This alert message pop every times whenever something render. when webpage refreshes and user clcik on button useEffect run .
  });
  // If we pass second parameter [] then this alert message show only once.

  return <button onClick={() => setNum(num + 1)}>Click Me {num}</button>;
};

export default App;
