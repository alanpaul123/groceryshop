import React from "react";
import "./Home.css";

import Carousal from "../components/Carousal";
// import { cardData } from "../data";
import Hero from "../components/Hero";
import Storebox from "../components/Storebox";
import CardHomeBox from "../components/CardHomeBox";
import DepartmentComp from "../components/DepartmentComp";

function Home() {
  return (
    <>
      <Hero />
      <CardHomeBox />

      <Carousal head={"Best Seller in your area"} />
      <Carousal head={"Discount this week"} />
      <Storebox />
      <Carousal head={"Fresh Vegetables"} />
      <Carousal head={"Diary & Milk"} />

      <DepartmentComp />
    </>
  );
}

export default Home;
