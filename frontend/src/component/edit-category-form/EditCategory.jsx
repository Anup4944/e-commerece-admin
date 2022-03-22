import React from "react";
import "./editCat.css";
import { useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@material-ui/icons";

const EditCategory = () => {
  const { categories } = useSelector((state) => state.category);

  return (
    <div className="editCategory">
      <h1 className="editCatTitle">Edit Category</h1>
      <table className="editCatTable">
        <tr>
          <th>Catgeory Name</th>
          <th>Parent Catgeory Name</th>
        </tr>
        <tbody>
          {categories.length &&
            categories.map((item, index) => {
              return (
                <>
                  <tr>
                    <td> {item.newCategory}</td>
                    <td> {item.parentCategory}</td>
                  </tr>
                  <tr></tr>
                </>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default EditCategory;
