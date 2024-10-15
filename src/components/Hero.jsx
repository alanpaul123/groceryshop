import React from "react";

import iphone from "../assets/Iphone.png";

import Carousal from "../components/Carousal";
import { cardData } from "../data";

function Hero() {
  return (
    <>
      <div className="heroBox">
        <div className="sm-box">
          <h1>
            Looking for Good Quality <br /> Ingredients?
          </h1>
          <button className="btnO">Order Online</button>
        </div>
      </div>
    </>
  );
}

export default Hero;
