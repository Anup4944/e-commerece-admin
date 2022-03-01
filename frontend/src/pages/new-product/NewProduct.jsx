import React, { useEffect, useState } from "react";
import "./newProduct.css";
import { useDispatch, useSelector } from "react-redux";
import { saveProductAction } from "./productAction";
import { getAllCategoryAction } from "../new-category/categoryAction";

const initalState = {
  isAvailable: true,
  images: [],
  title: "Apple Airpods Gen 13",
  categories: "Phones",
  price: "1500",
  quantity: "10",
  description: "New generation applea airpods",
  onSale: true,
  salePrice: "999.99",
  saleEndDate: "",
};

export const NewProduct = () => {
  const [product, setProduct] = useState(initalState);
  const [images, setImages] = useState([]);

  const { status, message } = useSelector((state) => state.product);
  const { categories } = useSelector((state) => state.category);

  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    Object.keys(product).map((key) => {
      key !== "images" && formData.append(key, product[key]);
    });

    images.length &&
      [...images].map((image) => {
        formData.append("images", image);

        // for (var value of formData.values()) {
        //   console.log(value);
        // }
        // for (var pair of formData.entries()) {
        //   console.log(pair[0] + ", " + pair[1]);
        // }
      });

    dispatch(saveProductAction(formData));
  };

  const handleOnImgSelect = (e) => {
    const { files } = e.target;

    setImages(files);
  };

  useEffect(() => {
    dispatch(getAllCategoryAction());
  }, [dispatch]);

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      {status === "error"
        ? message && <span style={{ color: "tomato" }}>{message}</span>
        : null}

      {status === "success"
        ? message && <span style={{ color: "green" }}>{message}</span>
        : null}

      <form
        className="addProductForm"
        onSubmit={handleOnSubmit}
        encType="multipart/form-data"
      >
        <div className="addProductItem">
          <div className="addProductItem">
            <label>Is available</label>
            <select
              name="isAvailable"
              value={product.isAvailable}
              onChange={handleOnChange}
            >
              <option>Please choose an option</option>

              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>

          <label>Upload Image</label>
          <input
            name="images"
            type="file"
            onChange={handleOnImgSelect}
            multiple
            accept="image/*"
          />
        </div>

        <div className="addProductItem">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={product.title}
            placeholder="Apple Airpods"
            onChange={handleOnChange}
            required
          />
        </div>

        <div className="addProductItem">
          <label>Select categories</label>
          <select
            name="categories"
            value={product.categories}
            onChange={handleOnChange}
            required
          >
            <option>Please choose an categories</option>
            {categories.length &&
              categories.map((item, i) => {
                return (
                  <option value={item.newCategory} key={(item, i)}>
                    {item.newCategory}
                  </option>
                );
              })}
          </select>
        </div>

        <div className="addProductItem">
          <label>Price</label>
          <input
            name="price"
            type="number"
            value={product.price}
            onChange={handleOnChange}
            placeholder="123"
            required
          />
        </div>

        <div className="addProductItem">
          <label>Quantity</label>
          <input
            type="number"
            name="quantity"
            value={product.quantity}
            onChange={handleOnChange}
            placeholder="123"
            required
          />
        </div>

        <div className="addProductItem">
          <label>Description</label>
          <textarea
            className="textarea"
            type="text"
            name="description"
            value={product.description}
            onChange={handleOnChange}
            placeholder="123"
            required
          />
        </div>

        <div className="addProductItem">
          <label>On Sale</label>
          <select
            name="onSale"
            value={product.onSale}
            onChange={handleOnChange}
            required
          >
            <option>Please choose an option</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        {product.onSale === "true" ? (
          <div className="addProductItem">
            <label>Sale Price</label>

            <input
              type="number"
              name="salePrice"
              value={product.salePrice}
              onChange={handleOnChange}
              placeholder="123"
              required
            />
          </div>
        ) : null}

        {product.onSale === "true" ? (
          <div className="addProductItem">
            <label>Sale End Date</label>

            <input
              type="date"
              name="saleEndDate"
              value={product.saleEndDate}
              min="18/02/2022"
              max="31/12/2025"
              onChange={handleOnChange}
            />
          </div>
        ) : null}

        <button className="addProductButton">Publish</button>
      </form>
    </div>
  );
};
