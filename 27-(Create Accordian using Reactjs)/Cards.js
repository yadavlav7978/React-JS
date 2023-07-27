import React, { useState } from "react";

const Cards = ({ question, answer }) => {
  const [show, updateShow] = useState(false);

  return (
    <>
      <div className="main-heading">
        <p onClick={() => updateShow(!show)}>+</p>
        <h3>{question}</h3>
      </div>
      {show && <p>{answer}</p>}

      {/* {(show===true) ? <p>{answer}</p> :<p></p>} */}
    </>
  );
};

export default Cards;
