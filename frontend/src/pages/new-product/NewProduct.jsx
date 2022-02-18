import React, { useState } from "react";
import "./newProduct.css";

const initalState = {
  isAvailable: "",
  images: [],
  title: "",
  category: "",
  price: "",
  quantity: "",
  description: "",
  onSale: "",
  salePrice: "",
  saleEndDate: "",
};

export const NewProduct = () => {
  const [product, setProduct] = useState(initalState);

  const categories = [
    "Household",
    "Electronice",
    "Car parts",
    "Ps5 Accessories",
  ];

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setProduct({
      ...product,
      [name]: value,
    });
    console.log(name, value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(product);
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm" onSubmit={handleOnSubmit}>
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

          <label>Image</label>
          <input
            type="file"
            name="images"
            value={product.images}
            onChange={handleOnChange}
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
          <label>Select category</label>
          <select
            name="category"
            value={product.category}
            onChange={handleOnChange}
            required
          >
            <option>Please choose an category</option>
            {categories &&
              categories.map((item) => (
                <>
                  <option value={item} key={item}>
                    {" "}
                    {item}
                  </option>
                </>
              ))}
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
              min="2022-01-01"
              max="2025-12-31"
              onChange={handleOnChange}
            />
          </div>
        ) : null}

        <button className="addProductButton">Publish</button>
      </form>
    </div>
  );
};
