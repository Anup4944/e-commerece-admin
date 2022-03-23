import React, { useState, useEffect } from "react";
import "./editCat.css";
import { useSelector, useDispatch } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@material-ui/icons";
import { toggleCategoryEditModal } from "../../pages/new-category/categorySlice";

const EditCategory = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);

  const handleOnEdit = (_id) => {
    dispatch(toggleCategoryEditModal());

    const catItem = categories.filter((row) => row._id === _id)[0];
  };

  const parentCat = categories.filter((item) => !item.parentCategory);

  console.log(parentCat);

  const childCat = categories.filter((item) => item.parentCategory);
  console.log(childCat);

  return (
    <>
      <h1 className="editCatTitle">Edit Category</h1>
      <div className="editCategory">
        <table className="editCatTable">
          <thead>
            <tr>
              <th>Catgeory Name</th>
              <th>Parent Catgeory Name</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.length &&
              categories.map((item, index) => {
                return (
                  <>
                    <tr key={index}>
                      <td> {item.newCategory}</td>
                      <td> {item.parentCategory}</td>
                      <td> {item.createdAt}</td>
                      <td> {item.updatedAt}</td>
                      <td>
                        <button className="categoryListButton">Edit</button>
                        <DeleteOutline />
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EditCategory;
