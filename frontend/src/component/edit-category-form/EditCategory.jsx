import React, { useState, useEffect } from "react";
import "./editCat.css";
import { useSelector, useDispatch } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@material-ui/icons";
import {
  selectACategory,
  toggleCategoryEditModal,
} from "../../pages/new-category/categorySlice";

const EditCategory = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);

  const handleOnEdit = (_id) => {
    dispatch(toggleCategoryEditModal());

    const catItem = categories.filter((row) => row._id === _id)[0];

    dispatch(selectACategory(catItem));
  };

  const parentCat =
    categories.length && categories.filter((item) => !item.parentCategory);

  const childCat =
    categories.length && categories.filter((item) => item.parentCategory);

  return (
    <>
      <h1 className="editCatTitle">Edit Category</h1>
      <div className="editCategory">
        <ul className="listCategory">
          {parentCat.length &&
            parentCat.map((cat) => {
              return <li className="singleCategory">{cat.newCategory}</li>;
            })}
        </ul>
      </div>
    </>
  );
};

export default EditCategory;
