import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import "./userList.css";
import { userRows } from "./dummyData";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllUserAction } from "../client-list/clientAction";

export const UserList = () => {
  const dispatch = useDispatch();

  const { allUsers } = useSelector((state) => state.users);

  // const {
  //   createdAt,
  //   firstName,
  //   lastName,
  //   password,
  //   refreshJWT,
  //   updatedAt,
  //   ...newData
  // } = allUsers;

  useEffect(() => {
    dispatch(getAllUserAction());
  }, [dispatch]);

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    { field: "firstName", headerName: "First Name", width: 120 },
    { field: "lastName", headerName: "Last Name", width: 120 },
    { field: "createdAt", headerName: "Joined At", width: 200 },
    {
      field: "userName",
      headerName: "Username",
      width: 130,
    },
    { field: "email", headerName: "Email", width: 200 },

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
    <div className="userList">
      <DataGrid
        rows={allUsers}
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};
