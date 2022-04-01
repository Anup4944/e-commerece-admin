import React, { useState, useEffect } from "react";
import ModalBox from "../modal-box/ModalBox";
import { useDispatch, useSelector } from "react-redux";
import { toggleCategoryEditModal } from "../../pages/new-category/categorySlice";
import "./editCatForm.css";
import { updateCategoryAction } from "../../pages/new-category/categoryAction";

const initialState = {
  newCategory: "",
  parentCategory: null,
};

const EditCategoryForm = () => {
  const [category, setCategory] = useState(initialState);

  const { updateCategory, show, selectedCategory, categories } = useSelector(
    (state) => state.category
  );

  const dispatch = useDispatch();

  useEffect(() => {
    setCategory(selectedCategory);
  }, [dispatch, selectedCategory]);

  const toggleModal = (e) => {
    dispatch(toggleCategoryEditModal());
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setCategory({
      ...category,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const updateCat = {
      _id: category._id,
      newCategory: category.newCategory,
      parentCategory: category.parentCategory ? category.parentCategory : null,
    };
    dispatch(updateCategoryAction(updateCat));
  };

  return (
    <ModalBox show={show} toggleModal={toggleModal}>
      {updateCategory.status === "success"
        ? updateCategory.message && (
            <span style={{ color: "green" }}>{updateCategory.message}</span>
          )
        : null}
      <form className="editCatForm" onSubmit={handleOnSubmit}>
        <div className="fromWrapper">
          <input
            className="formInput"
            type="text"
            name="newCategory"
            value={category.newCategory}
            required
            onChange={handleOnChange}
            placeholder="New Category"
          />
          <select
            className="formInput"
            name="parentCategory"
            defaultValue={null}
            onChange={handleOnChange}
          >
            <option value={null}></option>

            {categories?.length &&
              categories.map((item, i) => {
                return (
                  <option
                    key={i}
                    value={item._id}
                    selected={item._id === category.parentCategory}
                  >
                    {item.newCategory}
                  </option>
                );
              })}
          </select>

          <button className="formBtn">Submit</button>
        </div>
      </form>
    </ModalBox>
  );
};

export default EditCategoryForm;
