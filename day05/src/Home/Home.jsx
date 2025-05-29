import React from "react";
import Homeimg from "/src/assets/home-logo.png";
import "./Home.css";

const Home = () => {
  return (
    <div id="home">
      <p>
        Browse the <span>PRODUCTS</span>-<span>RECIPES</span>-<span>USERS</span>
      </p>
      <img src={Homeimg} alt="" />
    </div>
  );
};

export default Home;
