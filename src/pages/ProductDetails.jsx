import React from "react";
import "./ProductDetail.css";
import Direct from "../components/Direct";
import Product from "../components/Product";
import ProductStatic from "../components/ProductStatic";
import { useState, useEffect } from "react";
import Carousal from "../components/Carousal";
import { useParams } from "react-router-dom";

import offerCut from "../assets/offerCut.png";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeCartItem,
  incQuantity,
  decQuantity,
} from "../redux/slices/cartSlice";

import { useSelector } from "react-redux";
function ProductDetails() {
  const [activeTab, setActiveTab] = useState("Description");
  const [active, setActive] = useState(false);
  const [food, setFood] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("allFoods")) {
      const allFoods = JSON.parse(localStorage.getItem("allFoods"));
      setFood(allFoods.find((food) => food.id == id));
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("allFoods")) {
      const allFoods = JSON.parse(localStorage.getItem("allFoods"));
      setFood(allFoods.find((food) => food.id == id));
    }
  }, [id]);

  const cart = useSelector((state) => state.cartReducer);

  const renderContent = () => {
    if (activeTab == "Description") {
      return `${food.description}`;
    } else if (activeTab === "Nutrional Facts") {
      return `${food.nutritional_value}`;
    } else if (activeTab == "Features") {
      return "this is the content for Features";
    } else if (activeTab == "Produces of") {
      return "this is the content for Produces of ";
    } else {
      return null;
    }
  };

  const handleCart = () => {
    const existingFood = cart?.find((item) => item.id == food.id);
    if (existingFood) {
      dispatch(addToCart(food));
      alert("Existing Food..food has increased");
    } else {
      dispatch(addToCart(food));
    }
  };

  const currentFood = cart?.find((item) => item.id == food.id);

  const handleInc = () => {
    if (currentFood) {
      dispatch(incQuantity(currentFood.id));
    } else {
      dispatch(addToCart(food));
    }
  };

  const handleDec = () => {
    if (currentFood.quantity > 1) {
      dispatch(decQuantity(currentFood.id));
    } else {
      dispatch(removeCartItem(currentFood.id));
    }
  };

  return (
    <div>
      <Direct />

      <div className="prod-box">
        <img src={food.imageurl} alt="" className="p-img" />

        <div className="prod-Detail">
          <h2>{}</h2>
          <p className="d-flex  align-items-center">
            <img src={offerCut} alt="" className="cutImg" />
            <span className="cut">${food.previous_price}</span>
          </p>
          <h2 className="ph2">
            ${currentFood ? currentFood.totalPrice : food.price}/4lbs
          </h2>
          <hr />
          <div className="countbox">
            <button onClick={handleDec} className="minus countbtn1">
              -
            </button>
            <p className="countp">{currentFood ? currentFood.quantity : 0}</p>
            <button onClick={handleInc} className="plus countbtn1">
              +
            </button>
          </div>
          {/* className="atc pd-btn" */}
          <div className="pd-btns">
            <button
              onClick={() =>
                currentFood ? dispatch(removeCartItem(food.id)) : handleCart()
              }
              className="atc pd-btn"
            >
              {currentFood ? "remove from cart" : "add to cart"}
            </button>
            <button className="save pd-btn">Save</button>
          </div>

          <p className="pd-last">$10.00 cart minimum to order</p>
        </div>
      </div>

      <div className="tab">
        <div className="tab-names">
          <div
            className={`tb ${activeTab == "Description" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("Description");
            }}
          >
            Description
          </div>
          <div
            className={`tb ${activeTab == "Nutrional Facts" ? "active" : ""}`}
            onClick={() => setActiveTab("Nutrional Facts")}
          >
            Nutrional Facts
          </div>
          <div
            className={`tb ${activeTab == "Features" ? "active" : ""}`}
            onClick={() => setActiveTab("Features")}
          >
            Features
          </div>
          <div
            className={`tb ${activeTab == "Produces of" ? "active" : ""}`}
            onClick={() => setActiveTab("Produces of")}
          >
            Produces of
          </div>
        </div>

        <div className="renderedContent">{renderContent()}</div>
      </div>
      {/*------------------------------------ */}

      <Carousal head={"Related items"} />
      <Carousal head={"People Who Viewed This Item Also Viewed"} />
    </div>
  );
}

export default ProductDetails;
