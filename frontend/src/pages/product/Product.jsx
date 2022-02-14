import React from "react";
import "./product.css";
import { Link } from "react-router-dom";

export const Product = () => {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
          {" "}
          <button className="productAddButton">Add</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft"> </div>
        <div className="productTopRight"></div>
      </div>
      <div className="productBotton"></div>
    </div>
  );
};
