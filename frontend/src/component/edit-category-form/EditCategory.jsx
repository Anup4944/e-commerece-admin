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
        {/* <table className="editCatTable">
          <thead>
            <tr>
              <th>Catgeory Name</th>
              <th>Parent Catgeory Name</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {parentCat.map((item) => {
              return (
                <>
                  <tr key={item._id}>
                    <td> {item.newCategory}</td>
                    <td> {item.parentCategory}</td>

                    <td>
                      <button
                        className="categoryListButton"
                        onClick={() => handleOnEdit(item._id)}
                      >
                        Edit
                      </button>
                      <DeleteOutline />
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>

          <thead>
            <tr>
              <th>Child Catgeory Name</th>
              <th>Parent Catgeory Name</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {childCat.map((item) => {
              return (
                <>
                  <tr key={item._id}>
                    <td> {item.newCategory}</td>
                    <td> {item.parentCategory}</td>

                    <td>
                      <button
                        className="categoryListButton"
                        onClick={() => handleOnEdit(item._id)}
                      >
                        Edit
                      </button>
                      <DeleteOutline />
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table> */}
      </div>
    </>
  );
};

export default EditCategory;
