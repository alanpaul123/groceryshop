import React from "react";
import { cardData } from "../data";

function DepartmentComp() {
  return (
    <div>
      <div className="department">
        <div className="dep">
          <p>Shop By Department</p>
          <p>Show All Department</p>
        </div>

        <div className="dep-box">
          {cardData.map((card) => {
            return (
              <div className="dp1">
                <img src={card.img} alt="" />
                <p>{card.para}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DepartmentComp;
