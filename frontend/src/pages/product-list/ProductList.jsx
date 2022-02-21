import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../user-list/dummyData";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./productList.css";
import { getAllProductAction } from "../new-product/productAction";

export const ProductList = () => {
  const { products } = useSelector((state) => state.product);
  // const [data, setData] = useState(products);

  const dispatch = useDispatch();

  // const handleOnDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };

  useEffect(() => {
    dispatch(getAllProductAction());
  }, [dispatch]);

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "title",
      headerName: "Product Name and Image",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "isAvailable", headerName: "is Available", width: 110 },

    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "categories",
      headerName: "Category",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row._id}>
              <button className="productListButton">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              // onClick={() => {
              //   handleOnDelete(params.products._id);
              // }}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
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
