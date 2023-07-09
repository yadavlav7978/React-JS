import React from "react";

const Slot = (props) => {
  //   let x = props.x;
  //   let y = props.y;
  //   let z = props.z;

  let { x, y, z } = props;

  if (x === y && y === z) {
    return (
      <>
        <h2>
          {x} {y} {z}
        </h2>
        <h2>This is matching</h2>
      </>
    );
  } else {
    return (
      <>
        <h2>
          {x} {y} {z}
        </h2>
        <h2>This is not matching</h2>
      </>
    );
  }
};

export default Slot;
