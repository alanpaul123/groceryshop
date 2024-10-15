import React from "react";
import iphone from "../assets/Iphone.png";

function Storebox() {
  return (
    <>
      <div className="storeBox">
        <div className="storep">
          <h4>
            Start your day with <br /> Fresh Foods
          </h4>

          <div className="btnsss">
            <button className="btnS">Google Play Store</button>
            <button className="btnS">Apple Play Store</button>
          </div>
        </div>

        <img src={iphone} alt="" className="iphone" />
      </div>
    </>
  );
}

export default Storebox;
