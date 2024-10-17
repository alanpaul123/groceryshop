import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

function Product(props) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: "smooth" for smooth scrolling
    });
  };

  const navigate = useNavigate();

  const cart = useSelector((state) => state.cartReducer);

  const handleCart = () => {
    const existingFood = cart?.find((item) => item.id == props.id);

    if (existingFood) {
      dispatch(addToCart(props.currentFood));
      alert("Existing Food..food has increased");
    } else {
      dispatch(addToCart(props.currentFood));
      alert("Item added to Cart");

      setTimeout(() => {
        navigate(`/${props.id}/view`);

        scrollToTop();
      }, 500);
    }
  };

  const dispatch = useDispatch();

  return (
    <div className="cardBox">
      <div class="cardm">
        <Link to={`/${props.id}/view`} onClick={scrollToTop}>
          <img class="image-placeholder" src={props.url}></img>
        </Link>

        <div className="c-box">
          <div class="info">
            <p class="price">${props.price}</p>
            <p className="text-nowrap">{props.name}</p>
          </div>
          <button onClick={handleCart} class="button">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
