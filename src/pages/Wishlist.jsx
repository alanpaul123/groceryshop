import React, { useState } from "react";
// import "../items.css";
import grid1 from "../assets/grid-row-2.png";
import grid2 from "../assets/grid-small.png";
import grid3 from "../assets/grid.png";
import "../components/items.css";

import { useDispatch, useSelector } from "react-redux";
// import { productData } from "../data";
import { useEffect } from "react";
import { fetchFood } from "../redux/slices/foodSlice";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import Accordian from "../components/Accordian";
import { Pagination } from "react-bootstrap";

function Wishlist() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { allFoods, loading, error } = useSelector(
    (state) => state.foodReducer
  );
  useEffect(() => {
    dispatch(fetchFood());
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: "smooth" for smooth scrolling
    });
  };

  const [twoBox, setTwoBox] = useState(false);
  const [fourBox, setFourBox] = useState(false);
  const [singleBox, setSingleBox] = useState(false);

  const toggleBox = (box) => {
    if (box == "singleBox") {
      setSingleBox(true);
      setTwoBox(false);
      setFourBox(false);
    } else if (box == "twoBox") {
      setSingleBox(false);
      setTwoBox(true);
      setFourBox(false);
    } else if (box == "fourBox") {
      setSingleBox(false);
      setTwoBox(false);
      setFourBox(true);
    }
  };

  const handleCart = (food) => {
    const existingFood = cart?.find((item) => item.id == food.id);

    if (existingFood) {
      dispatch(addToCart(food));
      alert("Existing Food..food has increased");
    } else {
      dispatch(addToCart(food));
      alert("Item added to Cart");

      setTimeout(() => {
        navigate(`/${food.id}/view`);

        scrollToTop();
      }, 500);
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Calculate the total number of pages
  const totalPages = Math.ceil(allFoods?.length / itemsPerPage);

  // Get current page items
  const presentItems = allFoods?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage === 1 ? currentPage * itemsPerPage : undefined
  );

  // Handling page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="allproducts">
        <Accordian />
        <div className="div-2">
          <div className="head">
            <h3>Result from "Apple" (34 Result)</h3>

            <div className="sub-head">
              <div className="gridrow">
                <img
                  src={grid1}
                  onClick={() => toggleBox("singleBox")}
                  alt=""
                />
                <img src={grid3} onClick={() => toggleBox("twoBox")} alt="" />
                <img src={grid2} onClick={() => toggleBox("fourBox")} alt="" />
              </div>
              <select name="cars" id="options">
                <option value="">Sort By relevance</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>

          <div className={`imgBox`}>
            {presentItems.map((item) => {
              return (
                <div
                  className={`item ${twoBox ? "twoBox" : ""} ${
                    fourBox ? "fourBox" : ""
                  } ${singleBox ? "singleBox" : ""} `}
                >
                  <Link to={`/${item.id}/view`}>
                    <img
                      onClick={scrollToTop}
                      src={item.imageurl}
                      alt=""
                      className="item-food"
                    />
                  </Link>
                  <p className="itemp1">${item.price}</p>
                  <p className="itemp2">{item.name}</p>
                  <button onClick={() => handleCart(item)} className="itemBtn">
                    Add to Cart
                  </button>
                </div>
              );
            })}
          </div>

          <Pagination className="d-flex justify-content-center mt-5 mb-5 custom-pagination">
            {[...Array(totalPages)].map((_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        </div>
      </div>
    </>
  );
}

export default Wishlist;
