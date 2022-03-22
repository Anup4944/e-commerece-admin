import React from "react";
import "./editCat.css";
import { useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@material-ui/icons";

const EditCategory = () => {
  const { categories } = useSelector((state) => state.category);

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
                    <tr>
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
