import React, { useState } from "react";
import MainDat from "../components/MainData";
import "../components/CarsSHo.css";
import { logDOM } from "@testing-library/react";
function CarsSHo(props) {
  // this for Add to cart button
  const [TitleName, SetTitle] = useState(props.CarName);
  // this for git dis to cart button
  const [TitelPrice, SetPrice] = useState(props.CarPrice);

  const AddToCartHandelr = () => {
    SetTitle(props.CarName + " (Done !)");
  };
  const AddDiscountHandelr = () => {
    SetPrice(props.CarPrice - props.CarPrice * 0.1);
  };

  return (
    <div className="main-div">
      <div id="Car-Contenar">
        <ul>
          <li>
            <h1>{TitleName}</h1>
          </li>
        </ul>{" "}
        <h3>{TitelPrice}</h3>
        <img src={props.CarImage} />
        <br />
        <button onClick={AddToCartHandelr}>Add To Cart</button>
        <button onClick={AddDiscountHandelr}>Get 10% Disscount </button>
      </div>
    </div>
  );
}

export default CarsSHo;
