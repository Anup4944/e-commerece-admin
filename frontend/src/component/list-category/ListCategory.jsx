import React from "react";
import "./listCat.css";
import { useSelector, useDispatch } from "react-redux";

import { ArrowRightAltOutlined, DeleteOutline } from "@material-ui/icons";
import {
  selectACategory,
  toggleCategoryEditModal,
} from "../../pages/new-category/categorySlice";
import { deleteCategoryAction } from "../../pages/new-category/categoryAction";
import EditCategoryForm from "../edit-category-form/EditCategoryForm";
import Spinner from "../spinner/Spinner";

const ListCategory = () => {
  const dispatch = useDispatch();
  const { isLoading, categories, updateCategory } = useSelector(
    (state) => state.category
  );

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

      {isLoading && <Spinner />}

      <EditCategoryForm />

      <div className="editCategory">
        <ul className="listCategory">
          {parentCat?.length &&
            parentCat.map((cat) => {
              return (
                <>
                  <div className="singleCatWrapper">
                    <li className="singleCategory">{cat.newCategory}</li>
                    <div className="iconContainer">
                      <button
                        className="editBtn"
                        onClick={() => handleOnEdit(cat._id)}
                      >
                        Edit
                      </button>
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
                            <li className="childCategory">
                              <ArrowRightAltOutlined /> {child.newCategory}
                            </li>
                            <div className="iconContainer">
                              <button
                                className="editBtn"
                                onClick={() => handleOnEdit(child._id)}
                              >
                                Edit
                              </button>
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

export default ListCategory;
