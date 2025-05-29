import React from "react";
import Data from "/src/Products/Productdata.jsx";
import Productcards from "./Productcard.jsx";
import "./Products.css";

const Products = () => {
  return (
    <div id="products">
      <h1>PRODUCTS</h1>
      <div id="product-container">
        {Data.map((product, index) => {
          return (
            <Productcards item={product}/>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
