import react from "react";
import Slot from "./Slot";

const App = () => {
  return (
    <>
      <h1 className="header">🎰 Welcome to Slot Machine Game 🎰</h1>
      <div className="items">
        <Slot x="😄" y="😄" z="😄" />
        <hr />
        <Slot x="😄" y="😄" z="😞" />
        <hr />
        <Slot x="😄" y="😍" z="🎅" />
        <hr />
        <Slot x="🎅" y="🎅" z="🎅" />
      </div>
    </>
  );
};

export default App;
