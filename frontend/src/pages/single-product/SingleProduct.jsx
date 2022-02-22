import React, { useState, useEffect } from "react";
import "./product.css";
import { Link, useHistory, useParams } from "react-router-dom";
import { productData } from "../user-list/dummyData";
import { Chart } from "../../component/chart/Chart";
import { PublishOutlined } from "@material-ui/icons";
import {
  getSingleProductAction,
  updateProductAction,
} from "../new-product/productAction";
import { useSelector, useDispatch } from "react-redux";

export const SingleProduct = () => {
  const { singleProd } = useSelector((state) => state.product);

  const initialState = {
    isAvailable: `${singleProd.isAvailable}`,
    price: `${singleProd.price}`,
    quantity: `${singleProd.quantity}`,
    onSale: `${singleProd.onSale}`,
    salePrice: `${singleProd.salePrice}`,
    saleEndDate: `${singleProd.saleEndDate}`,
  };

  const [update, setUpdate] = useState(initialState);

  const dispatch = useDispatch();

  let { id } = useParams();

  useEffect(() => {
    id && dispatch(getSingleProductAction(id));
  }, [id]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setUpdate({
      ...update,
      [name]: value,
    });
    console.log(name, value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProductAction(id, update));
  };

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
          {" "}
          <button className="productAddButton">Add </button>
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
              <div className="productInfoKey">Is Available:</div>

              {singleProd?.isAvailable === true ? (
                <div className="productInfoValue"> Yes </div>
              ) : (
                <div className="productInfoValue"> No </div>
              )}
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Price :</div>
              <div className="productInfoValue">$ {singleProd?.price}</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Stocks :</div>
              <div className="productInfoValue">{singleProd?.quantity}</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Is on Sale:</div>

              {singleProd?.onSale === true ? (
                <div className="productInfoValue"> Yes </div>
              ) : (
                <div className="productInfoValue"> No </div>
              )}
            </div>

            {singleProd?.onSale === true ? (
              <>
                <div className="productInfoItem">
                  <div className="productInfoKey">Sale Price : </div>
                  <div className="productInfoValue">
                    ${singleProd?.salePrice}
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>

      <div className="productBotton">
        <form className="productForm" onSubmit={handleOnSubmit}>
          <div className="productFormLeft">
            <label>Is available</label>
            <select
              name="isAvailable"
              value={update.isAvailable}
              onChange={handleOnChange}
            >
              <option>Please choose an option</option>

              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            <label>Price</label>
            <input
              name="price"
              type="number"
              value={update.price}
              onChange={handleOnChange}
              required
            />
            <label>Number of stocks available</label>
            <input
              name="quantity"
              type="number"
              value={update.quantity}
              onChange={handleOnChange}
              placeholder="123"
              required
            />

            <label>Add product on sale</label>
            <select
              name="onSale"
              value={update.onSale}
              onChange={handleOnChange}
            >
              <option>Please choose an option</option>

              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>

            {update.onSale === "true" ? (
              <>
                <label>Sale Price</label>
                <input
                  name="salePrice"
                  type="number"
                  value={update.salePrice}
                  onChange={handleOnChange}
                  placeholder="123"
                />
                <label>Sale End Date</label>
                <input
                  type="date"
                  name="saleEndDate"
                  value={update.saleEndDate}
                  min="18/02/2022"
                  max="31/12/2025"
                  onChange={handleOnChange}
                />{" "}
              </>
            ) : null}
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
