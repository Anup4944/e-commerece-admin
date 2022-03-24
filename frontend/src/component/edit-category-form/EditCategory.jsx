import React, { useState, useEffect } from "react";
import "./editCat.css";
import { useSelector, useDispatch } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { ArrowRightAltOutlined, DeleteOutline } from "@material-ui/icons";
import {
  selectACategory,
  toggleCategoryEditModal,
} from "../../pages/new-category/categorySlice";
import { deleteCategoryAction } from "../../pages/new-category/categoryAction";

const EditCategory = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);

  const handleOnEdit = (_id) => {
    dispatch(toggleCategoryEditModal());

    const catItem = categories.filter((row) => row._id === _id)[0];

    dispatch(selectACategory(catItem));
  };

  const handleOnDelete = (_id) => {
    if (window.confirm("Are you sure you want to delete the category?")) {
      const childIds = categories.map((row) => {
        if (row.parentCategory === _id) {
          return row._id;
        }
      });

      const idsToDelete = childIds.filter((row) => row);

      dispatch(deleteCategoryAction([...idsToDelete, _id]));
    }
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
          {parentCat?.length &&
            parentCat.map((cat) => {
              return (
                <>
                  <div className="singleCatWrapper">
                    <li className="singleCategory">{cat.newCategory}</li>
                    <div className="iconContainer">
                      <button className="editBtn">Edit</button>
                      <DeleteOutline
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          handleOnDelete(cat._id);
                        }}
                      />
                    </div>
                  </div>
                  {childCat?.length &&
                    childCat.map(
                      (child) =>
                        child.parentCategory === cat._id && (
                          <div key={child._id} className="singleCatWrapper">
                            <li className="singleCategory">
                              <ArrowRightAltOutlined /> {child.newCategory}
                            </li>
                            <div className="iconContainer">
                              <button className="editBtn">Edit</button>
                              <DeleteOutline
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  handleOnDelete(child._id);
                                }}
                              />
                            </div>
                          </div>
                        )
                    )}
                </>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default EditCategory;
