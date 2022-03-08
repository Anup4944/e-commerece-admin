import React, { useState, useEffect } from "react";
import "./category.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategoryAction,
  saveCategoryAction,
} from "../../pages/new-category/categoryAction";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

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
      {status === "success"
        ? message && <span style={{ color: "green" }}>{message}</span>
        : null}
      <h1 className="addCatgeoryTitle">Add new Category</h1>

      <form className="addCategoryForm" onSubmit={handleOnSubmit}>
        <div className="addCategoryItem">
          {/* <label>New Category</label> */}
          {/* <input
            type="text"
            name="newCategory"
            placeholder="New category name...."
            value={categoryInfo.newCategory}
            onChange={handleOnChange}
            required
          /> */}

          <TextField
            id="outlined-basic"
            label="New Category"
            variant="outlined"
            className="textField"
            name="newCategory"
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

          {/* <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Select Parent Category"
            value={newCategory}
          >
            {categories.length &&
              categories.map((item, i) => {
                return (
                  <MenuItem value={item._id} key={(item, i)}>
                    {item.newCategory}
                  </MenuItem>
                );
              })}
          </Select> */}
        </div>

        <button type="submit" className="addCategoryButton">
          Publish
        </button>
      </form>
    </div>
  );
};
