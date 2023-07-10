import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const incrVal = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="container">
        <h1>{count}</h1>
        <button onClick={incrVal} className="btn">
          Click Me
        </button>
      </div>
    </>
  );
};

export default App;

// whenever we clicked on button then 'incrVal' function called and inside the 'incrVal' function
// setCount function update the value of count by 1.
