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
  const [data, setData] = useState(products);

  const dispatch = useDispatch();

  const handleOnDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  useEffect(() => {
    dispatch(getAllProductAction());
  }, [dispatch]);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "lastName",
      headerName: "Product Name and Image",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.products.img} alt="" />
            {params.products.name}
          </div>
        );
      },
    },
    { field: "firstName", headerName: "is Available", width: 110 },

    {
      field: "age",
      headerName: "Price",
      width: 160,
    },
    {
      field: "categories",
      headerName: "Price",
      width: 160,
    },
    // {
    //   field: "action",
    //   headerName: "Action",
    //   width: 160,
    //   renderCell: (params) => {
    //     return (
    //       <>
    //         <Link to={"/product/" + params.products._id}>
    //           <button className="productListButton">Edit</button>
    //         </Link>
    //         <DeleteOutline
    //           className="productListDelete"
    //           onClick={() => {
    //             handleOnDelete(params.products._id);
    //           }}
    //         />
    //       </>
    //     );
    //   },
    // },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};
