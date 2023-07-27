import react from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Api from "./Api";
import Cards from "./Cards";

ReactDOM.render(
  <>
    <section className="main-div">
      <h1>About Me</h1>

      {Api.map((data) => (
        <Cards question={data.question} answer={data.answer} />
      ))}
      
    </section>
  </>,
  document.getElementById("root")
);
