import React from "react";
import Direct from "../components/Direct";
import Accordian from "../components/Accordian";
import Items from "../components/Items";
import Department from "../components/Department";

function AllProduct() {
  return (
    <>
      <Direct />
      <div className="allproducts">
        <Accordian />
        <Items />
      </div>


    </>
  );
}

export default AllProduct;
