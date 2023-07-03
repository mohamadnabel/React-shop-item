import React from "react";
import MainDat from "../components/MainData";
import "../components/CarsSHo.css";
function CarsSHo(props) {
  return (
    <div id="Car-Contenar">
      <ul>
        <li>
          <h1>{props.CarName}</h1>
        </li>
      </ul>{" "}
      <br></br>
      <h3>{props.CarPrice}</h3>
      <br></br>
      <br></br>
      <img src={props.CarImage} />
      <br></br>
      <br></br>
      <button>Add To Cart</button>
      <button>Get 10% Disscount </button>
    </div>
  );
}

export default CarsSHo;
