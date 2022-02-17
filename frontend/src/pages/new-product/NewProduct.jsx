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
    console.log(value);
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <div className="addProductItem">
            <label>Is available</label>
            <select value={product.isAvailable} onChange={handleOnChange}>
              <option name="isAvailable" value="Yes" onChange={handleOnChange}>
                Yes
              </option>
              <option name="isAvailable" value="No" onChange={handleOnChange}>
                No
              </option>
            </select>
          </div>

          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={product.title}
            placeholder="Apple Airpods"
            required
          />
        </div>

        <div className="addProductItem">
          <label>Select category</label>
          <select name="active" id="active">
            <option>Please choose an category</option>
            {categories &&
              categories.map((item, i) => (
                <>
                  <option value={item} key={item.i}>
                    {" "}
                    {item}
                  </option>
                </>
              ))}
          </select>
        </div>

        <div className="addProductItem">
          <label>Price</label>
          <input type="text" placeholder="123" />
        </div>

        <div className="addProductItem">
          <label>Qty</label>
          <input type="number" placeholder="123" />
        </div>

        <div className="addProductItem">
          <label>Description</label>
          <textarea className="textarea" type="text" placeholder="123" />
        </div>

        <div className="addProductItem">
          <label>On Sale</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="addProductItem">
          <label>Sale Price</label>
          <input type="text" placeholder="123" />
        </div>

        <button className="addProductButton">Publish</button>
      </form>
    </div>
  );
};
