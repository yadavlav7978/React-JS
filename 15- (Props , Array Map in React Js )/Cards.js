import react from "react";

function Cards(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="" className="img"></img>
          <div>
            <h3>{props.name}</h3>
            <span>{props.rating}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
