import React, { useState, useEffect } from "react";
import "./category.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoryAction } from "./categoryAction";

const initialState = {
  newCategory: "",
  parentCategory: "",
};

export const Category = () => {
  const [categoryInfo, setCategoryInfo] = useState(initialState);
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.category);
  console.log(categories);

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
            value={categoryInfo.newCategory}
            required
          />
        </div>

        <div className="addCategoryItem">
          <label>Select Parent Category</label>
          <select name="parentCategory">
            <option>Please choose an option</option>
            {categories &&
              categories.map((item) => {
                <option value={item} key={item}>
                  {item.name}
                  {/* {console.log(i)} */}
                </option>;
              })}
            {/* <option value="true">Yes</option>
            <option value="false">No</option> */}
          </select>
        </div>

        <button className="addCategoryButton">Publish</button>
      </form>
    </div>
  );
};
