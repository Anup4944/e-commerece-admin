import React, { useState, useEffect } from "react";
import "./category.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoryAction } from "./categoryAction";

const initialState = {
  newCategory: "",
  parentCategory: "",
};

export const Category = () => {
  const [category, setCategory] = useState(initialState);
  const dispatch = useDispatch();

  const { status, message } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getAllCategoryAction());
  }, [dispatch]);

  return (
    <div className="category">
      <h1 className="addCatgeoryTitle">Add new Category</h1>

      <form className="addCategoryForm">
        <div className="addCategoryItem">
          <label>New Category</label>
          <input
            type="text"
            name="newCategory"
            value={category.newCategory}
            required
          />
        </div>

        <div className="addCategoryItem">
          <label>Select Parent Category</label>
          <select name="parentCategory" value={category.parentCategory}>
            <option>Please choose an option</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        <button className="addCategoryButton">Publish</button>
      </form>
    </div>
  );
};
