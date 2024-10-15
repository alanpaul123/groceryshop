import React from "react";
import "./Department.css";
import { departmentData } from "../data";
import { useDispatch } from "react-redux";
import { searchFood } from "../redux/slices/foodSlice";

function Department() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="department-box">
        <h2>Shop By Department</h2>
        <div className="dep-boxes">
          {departmentData.map((item) => {
            return (
              <div
                className="depbox"
                onClick={(e) => dispatch(searchFood(item.type))}
              >
                <img src={item.img} alt="" />
                <p>{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Department;
