import { useState } from "react";

const App = () => {
  const bg = "black";
  const Btn_text = "Click Me";

  const [curbg, changebg] = useState(bg);
  const [curText, changeText] = useState(Btn_text);

  const singleClcik = () => {
    let newBg = "lightGreen";
    changebg(newBg);
    changeText("Oooh!! 😮");
  };

  const DoubeClick = () => {
    let newBg = "chocolate";
    changebg(newBg);
    changeText("Yehh!! 😂");
  };

  return (
    <>
      <div className="container" style={{ backgroundColor: curbg }}>
        <button
          className="btn"
          onClick={singleClcik}
          onDoubleClick={DoubeClick}
        >
          {curText}
        </button>
      </div>
    </>
  );
};

export default App;

// whenever we clicked on button then 'incrVal' function called and inside the 'incrVal' function
// setCount function update the value of count by 1.
