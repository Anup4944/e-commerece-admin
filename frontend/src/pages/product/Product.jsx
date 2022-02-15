import React from "react";
import "./product.css";
import { Link } from "react-router-dom";
import { productData } from "../user-list/dummyData";
import { Chart } from "../../component/chart/Chart";
import { PublishOutlined } from "@material-ui/icons";

export const Product = () => {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
          {" "}
          <button className="productAddButton">Add</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="productInfoImg"
            />
            <div className="productName">Apple Airpods</div>{" "}
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <div className="productInfoKey">Id :</div>
              <div className="productInfoValue">123</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Sales :</div>
              <div className="productInfoValue"> $123</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Active : </div>
              <div className="productInfoValue">Yes</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">In-stock : </div>
              <div className="productInfoValue">No</div>
            </div>
          </div>
        </div>
      </div>
      <div className="productBotton">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Product name" />

            <label>In Stock</label>
            <select name="instock" id="inStock">
              <option value="yes">YES</option>
              <option value="no">NO</option>
            </select>

            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">YES</option>
              <option value="no">NO</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="productUploadImg"
              />

              <label for="file">
                <PublishOutlined />
              </label>
              <input type="file" id="file" />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};
