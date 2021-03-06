import React, { useState, useEffect } from "react";
import "./product.css";
import { Link, useParams } from "react-router-dom";
import { Chart } from "../../component/chart/Chart";
import { PublishOutlined } from "@material-ui/icons";
import {
  getSingleProductAction,
  updateProductAction,
} from "../new-product/productAction";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../../component/spinner/Spinner";
import { singleProdStatAction } from "../../component/featuredInfo/orderAction";

export const SingleProduct = () => {
  const [images, setImages] = useState([]);
  const [imgToDelete, setImgToDelete] = useState([]);
  const { isLoading, singleProd, status, message } = useSelector(
    (state) => state.product
  );
  const { singleProdStat } = useSelector((state) => state.revenue);

  const sortedData = singleProdStat?.slice().sort((a, b) => a._id - b._id);

  const initialState = {
    isAvailable: "",
    images: [],
    title: "",
    categories: "",
    price: "",
    quantity: "",
    description: "",
    onSale: "",
    salePrice: "",
    saleEndDate: "",
  };
  const [update, setUpdate] = useState(initialState);

  const dispatch = useDispatch();

  let { id } = useParams();

  useEffect(() => {
    if (!update._id || update._id !== singleProd._id) {
      dispatch(getSingleProductAction(id));
      dispatch(singleProdStatAction(id));
      setUpdate(singleProd);
    }
  }, [id, update, singleProd, dispatch]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setUpdate({
      ...update,
      [name]: value,
    });
  };

  const handleOnImgDelete = (e) => {
    const { checked, value } = e.target;

    if (checked) {
      setImgToDelete([...imgToDelete, value]);
    } else {
      const updatedImgToDelete = imgToDelete.filter((path) => path !== value);
      setImgToDelete(updatedImgToDelete);
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const { __v, createdAt, updatedAt, ...newProduct } = update;

    const formData = new FormData();

    Object.keys(newProduct).map((key) => {
      return key !== "images" && formData.append(key, newProduct[key]);
    });

    images.length &&
      [...images].map((image) => {
        return formData.append("images", image);
      });

    imgToDelete.length && formData.append("imgToDelete", imgToDelete);

    dispatch(updateProductAction(id, formData));
  };

  const handleOnImgSelect = (e) => {
    const { files } = e.target;
    setImages(files);
  };

  return (
    <div className="product">
      <div className="productTitleContainer">
        {status === "success"
          ? message && <span style={{ color: "green" }}>{message}</span>
          : null}
        {status === "error"
          ? message && <span style={{ color: "red" }}>{message}</span>
          : null}
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
          {" "}
          <button className="productAddButton">Add </button>
        </Link>
      </div>
      {isLoading && <Spinner />}

      <div className="productTop">
        <div className="productTopLeft">
          <Chart
            data={sortedData}
            dataKey="total"
            title="Sales performance compared to last month"
          />
        </div>

        <div className="productTopRight">
          <div className="productName">{singleProd.title}</div>{" "}
          <div className="productInfoTop">
            {update?.images?.length &&
              update.images.map((item) => {
                return (
                  <img
                    src={item}
                    className="productUploadImg"
                    alt="product img"
                  />
                );
              })}
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
        <form
          className="productForm"
          onSubmit={handleOnSubmit}
          encType="multipart/form-data"
        >
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
                  min="2022-02-20"
                  max="2032-02-20"
                  name="saleEndDate"
                  value={update.saleEndDate}
                  onChange={handleOnChange}
                />{" "}
              </>
            ) : null}
          </div>
          <div className="productFormRight">
            Edit and change images
            <div className="productUpload">
              <div className="imgCont">
                {update?.images?.length &&
                  update.images.map((item) => {
                    return (
                      <>
                        <img
                          src={item}
                          className="productUploadImg"
                          alt="upload"
                        />

                        <input
                          type="checkbox"
                          className="checkbox"
                          name="Delete"
                          id="Delete"
                          defaultValue={item}
                          onChange={handleOnImgDelete}
                          checked={imgToDelete?.includes(item)}
                        />
                        <label for="Delete">Delete</label>
                      </>
                    );
                  })}
              </div>

              <label for="file">
                {" "}
                <PublishOutlined />
              </label>

              <input
                type="file"
                name="images"
                onChange={handleOnImgSelect}
                accept="image/*"
                multiple
              />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};
