import React from "react";
import logo from "../assets/02.png";
import burger from "../assets/burger.png";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import wishlist from "../assets/favorite_border.png";
import user from "../assets/user.png";
import shop from "../assets/shopping_cart.png";
import { useSelector, useDispatch } from "react-redux";
import { searchFood } from "../redux/slices/foodSlice";
import { Link } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  return (
    <>
      <Navbar expand="lg" className="bg-body">
        <Container>
          <Navbar.Brand href="#home" className="">
            <Link to={"/"}>
              <img src={burger} alt="" className="me-5" />
            </Link>
            <Link to={"/allProduct"}>
              <img src={logo} alt="" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" d-flex justify-content-around w-100">
              <Nav.Link href="#home">
                <div className="searchbar">
                  <i class="fa-solid fa-magnifying-glass search"></i>

                  <input
                    type="text"
                    placeholder="Search Food"
                    onChange={(e) =>
                      dispatch(searchFood(e.target.value.toLowerCase()))
                    }
                  />
                </div>
              </Nav.Link>
              <Nav.Link href="#">
                <p className="p text-black">
                  <img src={user} alt="" className="nav-img" />
                  Sign In
                </p>
              </Nav.Link>
              <Nav.Link href="#link">
                <p className="p text-black">
                  <Link to={"/wishlist"}>
                    <img src={wishlist} alt="" className="nav-img" />
                  </Link>
                  Wishlist
                </p>
              </Nav.Link>
              <Nav.Link>
                <p className="p text-black under">
                  <Link to={"/billing"}>
                    <img src={shop} alt="" className="nav-img" />
                  </Link>
                  $0.00
                </p>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
