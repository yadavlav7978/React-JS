import React, { useState } from "react";

const App = () => {
  const [number, ChangeNumber] = useState(0);

  const incrNumber = () => {
    //ChangeNumber(number+1);

    ChangeNumber((prev) => {
      return (prev = prev + 1);
    });
  };

  const decrNumber = () => {
    // if (number > 0) {
    //   ChangeNumber(number - 1);
    // } else {
    //   ChangeNumber(0);
    //   alert("Number can`t be negative");
    // }

    ChangeNumber((prev) => {
      if (prev > 0) {
        return (prev = prev - 1);
      } else {
        alert("Number can`t be negative");
        return (prev = 0);
      }
    });
  };

  return (
    <>
      <div className="container">
        <h1 className="number">{number}</h1>
        <div className="btn">
          <button className="incr" onClick={incrNumber}>
            Increment
          </button>
          <button className="decr" onClick={decrNumber}>
            Decrement
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
