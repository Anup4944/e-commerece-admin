import React from "react";
import "./editCat.css";
import { useSelector } from "react-redux";

const EditCategory = () => {
  const { categories, status, message } = useSelector(
    (state) => state.category
  );
  return (
    <div className="editCategory">
      <h1>Edit Category </h1>
    </div>
  );
};

export default EditCategory;
