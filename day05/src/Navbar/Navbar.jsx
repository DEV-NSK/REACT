import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; 

const Navbar = () => {
  return (
    <div id="navbar">
      <h2>CartGo</h2>
      <div id="links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/users">Users</Link>
      </div>
    </div>
  );
};

export default Navbar;
