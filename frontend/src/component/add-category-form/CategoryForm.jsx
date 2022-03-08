import React, { useState, useEffect } from "react";
import "./category.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategoryAction,
  saveCategoryAction,
} from "../../pages/new-category/categoryAction";

const initialState = {
  newCategory: "",
};

export const CategoryForm = () => {
  const [categoryInfo, setCategoryInfo] = useState(initialState);
  const dispatch = useDispatch();

  const { categories, status, message } = useSelector(
    (state) => state.category
  );

  useEffect(() => {
    dispatch(getAllCategoryAction());
  }, [dispatch]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setCategoryInfo({
      ...categoryInfo,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(saveCategoryAction(categoryInfo));
  };
  return (
    <div className="category">
      {status === "successfull"
        ? message && <span style={{ color: "green" }}>{message}</span>
        : null}
      <h1 className="addCatgeoryTitle">Add new Category</h1>

      <form className="addCategoryForm" onSubmit={handleOnSubmit}>
        <div className="addCategoryItem">
          <label>New Category</label>
          <input
            type="text"
            name="newCategory"
            placeholder="New category name...."
            value={categoryInfo.newCategory}
            onChange={handleOnChange}
            required
          />
        </div>

        <div className="addCategoryItem">
          <label>Select Parent Category</label>
          <select name="parentCategory" onChange={handleOnChange}>
            <option>Please choose an option</option>
            {categories.length &&
              categories.map((item, i) => {
                return (
                  <option value={item._id} key={(item, i)}>
                    {item.newCategory}
                  </option>
                );
              })}
          </select>
        </div>

        <button type="submit" className="addCategoryButton">
          Publish
        </button>
      </form>
    </div>
  );
};
