import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import "./userList.css";
import { userRows } from "./dummyData";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllUserAction } from "../client-list/clientAction";

export const UserList = () => {
  const [data, setData] = useState(userRows);
  const dispatch = useDispatch();

  const handleOnDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  useEffect(() => {
    dispatch(getAllUserAction());
  }, [dispatch]);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "User",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListUser" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "transaction",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListButton">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => {
                handleOnDelete(params.row.id);
              }}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList" style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={12}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};
