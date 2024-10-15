import React from "react";
import { useState } from "react";
import "./Accordion.css";
import chevron from "../assets/chevron-top.png";

function Accordian() {
  // const [openSection, setOpenSection] = useState("department");
  const [openSections, setOpenSections] = useState({
    departments: false,
    brands: false,
    nutrition: false,
  });

  // Function to toggle accordion sections
  const toggleSection = (section) => {
    setOpenSections({
      ...openSections,
      [section]: !openSections[section], // Toggle the clicked section
    });
  };

  const getArrow = (section) => {
    return openSections[section] ? (
      <img src={chevron} alt="" />
    ) : (
      <i class="fa-solid fa-chevron-down"></i>
    );
  };
  return (
    <>
      <div className="accordion">
        {/* Departments Section */}
        <div className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => toggleSection("departments")}
          >
            <h3>Departments</h3>

            {getArrow("departments")}
          </div>
          <div
            className={`accordion-content ${
              openSections.departments ? "open" : ""
            }`}
          >
            <ul>
              <li>
                <input type="checkbox" /> Fruity & Vegetables
              </li>
              <li>
                <input type="checkbox" /> Pantry
              </li>
              <li>
                <input type="checkbox" /> Organic Shop
              </li>
              <li>
                <input type="checkbox" /> Health Snack
              </li>
              <li>
                <input type="checkbox" /> Kitchen and FoodStuffs
              </li>
              <li>
                <input type="checkbox" /> Frozen Food
              </li>
            </ul>
          </div>
        </div>

        <div className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => toggleSection("brands")}
          >
            <h3>Brands</h3>
            {getArrow("brands")}
          </div>
          <div
            className={`accordion-content ${openSections.brands ? "open" : ""}`}
          >
            <ul>
              <li>
                <input type="checkbox" /> Bare
              </li>
              <li>
                <input type="checkbox" /> Bake
              </li>
              <li>
                <input type="checkbox" /> Gloomy
              </li>
              <li>
                <input type="checkbox" /> Blawd
              </li>
              <li>
                <input type="checkbox" /> Berky
              </li>
              <li>
                <input type="checkbox" /> Yurz
              </li>
            </ul>
          </div>
        </div>

        {/* Nutrition Section */}
        <div className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => toggleSection("nutrition")}
          >
            <h3>Nutrition</h3>
            {getArrow("nutrition")}
          </div>
          <div
            className={`accordion-content ${
              openSections.nutrition ? "open" : ""
            }`}
          >
            <p>Nutrition details go here.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Accordian;
