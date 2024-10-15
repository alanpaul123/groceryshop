import React from "react";
import "./Form.css";

function Form() {
  return (
    <>
      <div className="form-box">
        <h4>Billing Details</h4>
        <hr />
        <form action="" className="checkoutForm">
          <div className="name-box">
            <div className="f-name">
              <label htmlFor="FirstName">First Name</label>
              <input type="text" id="FirstName" />
            </div>

            <div className="l-name">
              <label htmlFor="LastName">Last Name</label>
              <input type="text" id="LastName" />
            </div>
          </div>

          <div className="f-box">
            <label htmlFor="">Country</label>
            <input type="text" />
          </div>

          <div className="f-box">
            <label htmlFor="sta">Street Address</label>
            <input type="text" id="sta" />
          </div>

          <div className="f-box">
            <label htmlFor="tc">Town/City</label>
            <input type="text" id="tc" />
          </div>

          <div className="f-box">
            <label htmlFor="state">State</label>
            <input type="text" id="state" />
          </div>

          <div className="f-box">
            <label htmlFor="pc">Postcode</label>
            <input type="text" id="pc" />
          </div>

          <div className="f-box">
            <label htmlFor="pn">Phone Number</label>
            <input type="text" id="pn" />
          </div>

          <div className="f-box">
            <label htmlFor="ea">Email Address</label>
            <input type="text" id="ea" />
          </div>

          <div className="cbox">
            <input type="checkbox" id="rr" />
            <label htmlFor="" className="create-account">
              Create an account?
            </label>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
