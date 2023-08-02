import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [num, updateNum] = useState();
  const [name, updateName] = useState();
  const [move, updateMove] = useState();

  useEffect(() => {
    async function getdata() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      updateName(res.data.name);
      updateMove(res.data.moves.length);
    }
    getdata();
  });

  return (
    <>
      <h1>
        You select <span style={{ color: "red" }}>{num} value </span>
      </h1>
      <h1>
        Name is <span style={{ color: "red" }}>{name}</span>
      </h1>
      <h1>
        And total moves is <span style={{ color: "red" }}>{move}</span>
      </h1>

      <select
        value={num}
        onChange={(event) => {
          updateNum(event.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </>
  );
};

export default App;
