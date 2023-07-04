import React, { useState } from "react";
import "../components/AddMoreIT.css";
const MSG = "please inter the car name";
// const [Msgs, SetMsg] = useState(MSG);

const InputName = (Event) => {
  // console.log(Event.target.value);
  if (Event.target.value == "mazda 220") {
    // SetMsg("is alredy excist");
    alert("the name is alredy excist");
  }
};

const InputPrice = (Event) => {
  // console.log(Event.target.value);
  if (Event.target.value == 2500) {
    console.log("good");
  }
};
function AddMoreItem(props) {
  return (
    <div>
      <form>
        <label>{MSG} </label>
        <br></br>
        <input onChange={InputName} type="text" />
        <br></br>
        <label>please inter the car price </label>
        <br></br>
        <input onChange={InputPrice} type="number" />
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
