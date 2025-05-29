import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar.jsx";
import Home from "./Home/Home.jsx";
import Products from "/src/Products/Products.jsx";
import Recipes from "/src/Recipes/Recipes.jsx";
import Users from "/src/Users/Users.jsx";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/recipes" element={<Recipes/>} />
        <Route path="/users" element={<Users/>} />
      </Routes>
    </div>
  );
};

export default App;
