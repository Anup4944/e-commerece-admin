import React from "react";
import "./category.css";
import { useDispatch, useSelector } from "react-redux";

export const Category = () => {
  return (
    <div className="category">
      <h1 className="addCatgeoryTitle">Add new Category</h1>
      <form className="addCategoryForm">
        <div className="addCategoryItem">
          <label>New Category</label>
          <input
            type="text"
            name="title"
            // value={product.title}
            // placeholder="Apple Airpods"
            // onChange={handleOnChange}
            required
          />
        </div>
        <button className="addCategoryButton">Publish</button>
      </form>
    </div>
  );
};
