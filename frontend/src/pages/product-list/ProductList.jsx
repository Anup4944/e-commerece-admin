import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../../component/spinner/Spinner";

import "./productList.css";
import {
  deleteProductAction,
  getAllProductAction,
} from "../new-product/productAction";

export const ProductList = () => {
  const { isLoading, products } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductAction());
  }, [dispatch]);

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "title",
      headerName: "Product Name ",
      width: 180,

      renderCell: (params) => {
        return <div className="productListItem">{params.row.title}</div>;
      },
    },
    { field: "isAvailable", headerName: "is Available", width: 110 },

    {
      field: "price",
      headerName: "Price",
      width: 100,
    },
    {
      field: "categories",
      headerName: "Category",
      width: 160,
    },
    {
      field: "onSale",
      headerName: "on Sale",
      width: 80,
    },
    {
      field: "quantity",
      headerName: "Stocks",
      width: 80,
    },
    {
      field: "salePrice",
      headerName: "Sale Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 100,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row._id}>
              <button className="productListButton">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => {
                dispatch(deleteProductAction(params.row._id));
              }}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      {isLoading && <Spinner />}
      <DataGrid
        rows={products}
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};
