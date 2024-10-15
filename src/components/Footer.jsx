import React from "react";
import logo from "../assets/02.png";

function Footer() {
  return (
    <>
      <div className="bigFooter">
        <div className="footer">
          <ul className="ful">
            <li className="LiName">
              <img src={logo} alt="" />
            </li>
            <li>
              <i class="fa-solid fa-location-dot fi"></i>221 B Santa Monica, Los
              Angeles
            </li>
            <li>
              <i class="fa-solid fa-phone fi"></i>(+1) 923 2341 22
            </li>
            <li>
              <i class="fa-regular fa-envelope fi"></i>
              Contact@tanahairstudio.com
            </li>
          </ul>

          <ul className="ful">
            <li>Categories</li>
            <li>Dairy & Milk</li>
            <li>Fresh Produce</li>
            <li>Meat</li>
            <li>Snacks</li>
            <li>Frozen</li>
            <li>Vegetables</li>
          </ul>

          <ul className="ful">
            <li>Company</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy & Poilicy</li>
            <li>Payment Method</li>
          </ul>

          <ul className="ful">
            <li>Join Our Newsletter</li>
            <li className="liInput">
              <p>Your Email</p>
              <input
                type="text"
                className="foottext"
                placeholder="Enter Your Email"
              />
            </li>
            <li>
              <button className="subscribe">Subscribe</button>
            </li>
          </ul>
        </div>
        <p className="cp">@2020 TanahAir Studio. All rights reserved.</p>
      </div>
    </>
  );
}

export default Footer;
