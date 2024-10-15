import React from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import Product from "./Product";
import { productData, responsive } from "../data";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchFood } from "../redux/slices/foodSlice";

function Carousal(props) {
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));
  const dispatch = useDispatch();
  const { allFoods, loading, error } = useSelector(
    (state) => state.foodReducer
  );

  const CustomLeftArrow = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        style={{
          background: "green", // Change to desired color
          color: "white",
          border: "none",
          position: "absolute",
          top: "35%",
          // left: "-1px",
          transform: "translateY(-50%)",
          cursor: "pointer",
          padding: "10px",
          borderRadius: "50%",
          fontSize: "16px",
        }}
      >
        <i class="fa-solid fa-arrow-left"></i>
      </button>
    );
  };

  // Custom Right Arrow Button
  const CustomRightArrow = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        style={{
          background: "green", // Change to desired color
          color: "white",
          border: "none",
          position: "absolute",
          top: "35%",
          right: "0px",
          transform: "translateY(-50%)",
          cursor: "pointer",
          padding: "10px",
          borderRadius: "50%",
        }}
      >
        <i class="fa-solid fa-arrow-right"></i>
      </button>
    );
  };
  useEffect(() => {
    dispatch(fetchFood());
  }, []);

  const foods = allFoods.map((food) => {
    return (
      <Product
        name={food.name}
        url={food.imageurl}
        price={food.price}
        id={food.id}
        currentFood={food}
      />
    );
  });

  // allFoods.forEach((food) => {
  //   console.log([food.price, food.title, food.thumbnail]);
  // });

  return (
    <>
      <div className="cardBox carousel-box">
        <div className="c-head">
          <p className="cp-1">{props.head}</p>
          <p className="cp-2">Show All</p>
        </div>
        <Carousel
          responsive={responsive}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {foods}
        </Carousel>
      </div>
    </>
  );
}

export default Carousal;
