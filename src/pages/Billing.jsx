import React from "react";
import Form from "../components/Form";
import OrderBox from "../components/OrderBox";
import "./Billing.css";

function Billing() {
  return (
    <>
      <div className="billing-box">
        <h1>Checkout</h1>

        <div className="bill-box">
          <Form />
          <OrderBox />
        </div>
      </div>
    </>
  );
}

export default Billing;
