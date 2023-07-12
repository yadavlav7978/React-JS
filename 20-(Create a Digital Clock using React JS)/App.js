import { useState } from "react";

const App = () => {
  let cur_time=new Date().toLocaleTimeString();

  const [time, setCount] = useState(cur_time);

  const incrVal = () => {
    cur_time=new Date().toLocaleTimeString();
    setCount(cur_time);
  };

  setInterval(incrVal,1000);

  return (
    <> 
       <h1 className="header">Digital Clock</h1>
      <div className="container">
        <h1>{time}</h1>
      </div>
    </>
  );
};

export default App;

// whenever we clicked on button then 'incrVal' function called and inside the 'incrVal' function
// setCount function update the value of count by 1.
