import React from "react";
import "./editCat.css";
import { useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@material-ui/icons";

const EditCategory = () => {
  const { categories } = useSelector((state) => state.category);

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    { field: "newCategory", headerName: "Category Name", width: 120 },
    { field: "parentCategory", headerName: "Parent Category", width: 120 },
    { field: "createdAt", headerName: "Created", width: 200 },
    {
      field: "updateAt",
      headerName: "Updated",
      width: 130,
    },

    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row._id}>
              <button className="userListButton">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              // onClick={() => {
              //   handleOnDelete(params.row._id);
              // }}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="editCategory">
      <h1>Edit Category </h1>

      <DataGrid
        rows={categories}
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default EditCategory;
