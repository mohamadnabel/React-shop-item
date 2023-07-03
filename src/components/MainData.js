import React from "react";
import CarsSHo from "./CarsShow";
import firs from "../assest/first photo.avif";
import secound from "../assest/second photo.jpeg";
import third from "../assest/thierd photo.webp";
let DataMin = [
  {
    CarName: "Tesla model M",
    CarPrice: 23000,
    CarImage: firs,
  },
  {
    CarName: "Tesla model O",
    CarPrice: 85000,
    CarImage: secound,
  },
  {
    CarName: "Tesla model Y",
    CarPrice: 74300,
    CarImage: third,
  },
];
function MainDat() {
  return (
    <div>
      <CarsSHo
        CarName={DataMin[0].CarName}
        CarPrice={DataMin[0].CarPrice}
        CarImage={DataMin[0].CarImage}
      />
      <CarsSHo
        CarName={DataMin[1].CarName}
        CarPrice={DataMin[1].CarPrice}
        CarImage={DataMin[1].CarImage}
      />
      <CarsSHo
        CarName={DataMin[2].CarName}
        CarPrice={DataMin[2].CarPrice}
        CarImage={DataMin[2].CarImage}
      />
    </div>
  );
}

export default MainDat;
