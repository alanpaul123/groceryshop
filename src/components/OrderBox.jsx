import React, { useEffect } from "react";
import "./Order.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

function OrderBox() {
  const cart = useSelector((state) => state.cartReducer);

  // console.log(cart);

  useEffect(() => {}, [cart]);

  const [cartTotal, setCartTotal] = useState();

  useEffect(() => {
    if (cart?.length > 0) {
      setCartTotal(
        cart?.map((item) => item.totalPrice).reduce((a, b) => a + b)
      );
    } else {
      setCartTotal(0);
    }
  }, [cart]);

  return (
    <>
      <div className="order-box">
        <h3>Your order</h3>

        {cart.map((food) => {
          return (
            <div className="order-detail">
              <Link to={`/${food.id}/view`}>
                <img src={food.imageurl} alt="" />
              </Link>

              <div className="o-p">
                <p className="m-0">{food.name} (1kg)</p>
                <p>
                  ${food.price} x{food.quantity}
                </p>
              </div>
            </div>
          );
        })}

        <hr />

        <div className="sub-total od">
          <p>Sub Total</p>
          <p>${cartTotal}</p>
        </div>

        <div className="shipping od">
          <p>Shipping</p>
          <p>$5.00</p>
        </div>

        <hr />

        <div className="total od">
          <p>Total</p>
          <p>${cartTotal + 5}</p>
        </div>

        <button className="payment-btn">Continue to Payment</button>
      </div>
    </>
  );
}

export default OrderBox;
