import React, { useState } from "react";
import "../components/AddMoreIT.css";

function AddMoreItem() {
  const [CarName, SetCarName] = useState("");
  const [CarPrice, SetCarPrice] = useState("");
  const [CarPicture, SetCarPicture] = useState("");

  const carNameHandelarFunction = (event) => {
    SetCarName(event.target.value);
  };
  const carPriceHandelarFunction = (event) => {
    SetCarPrice(event.target.value);
  };
  const carPictureHandelarFunction = (event) => {
    SetCarPicture(event.target.value);
  };
  const DataFromUser = [];
  const formSubmitHandeler = (event) => {
    event.preventDefault();
    const DataBase = {
      theCarNameByUser: CarName,
      theCarPriceByUser: CarPrice,
      theCarImgByUser: CarPicture,
    };
    DataFromUser.push(DataBase);
    SetCarName("");
    SetCarPicture("");
    SetCarPrice("");
    console.log(DataFromUser);
    console.log(DataBase);
  };
  const resetHandelerValue = (Event) => {
    Event.preventDefault();
    SetCarName("");
    SetCarPicture("");
    SetCarPrice("");
  };

  return (
    <div>
      <form onReset={resetHandelerValue} onSubmit={formSubmitHandeler}>
        <label> please inter the car name</label>
        <br></br>
        <input value={CarName} onChange={carNameHandelarFunction} type="text" />
        <br></br>
        <label>please inter the car price </label>
        <br></br>
        <input
          value={CarPrice}
          onChange={carPriceHandelarFunction}
          type="number"
        />
        <br></br>
        <label> please inter the car File</label>
        <br></br>
        <input
          value={CarPicture}
          onChange={carPictureHandelarFunction}
          type="file"
        />
        <div>
          <button className="button-submit" type="submit">
            Submit
          </button>
          <button className="button-rest" type="reset">
            Rest All
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddMoreItem;
