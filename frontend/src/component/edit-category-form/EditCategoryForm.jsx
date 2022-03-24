import React, { useState, useEffect } from "react";
import ModalBox from "../modal-box/ModalBox";
import { useDispatch, useSelector } from "react-redux";
import { toggleCategoryEditModal } from "../../pages/new-category/categorySlice";
import "./editCatForm.css";

const initialState = {
  newCategory: "",
  parentCategory: null,
};

const EditCategoryForm = () => {
  const [category, setCategory] = useState(initialState);

  const { isLoading, show, selectedCategory, categories } = useSelector(
    (state) => state.category
  );

  const dispatch = useDispatch();

  useEffect(() => {
    setCategory(selectedCategory);
  }, [dispatch, selectedCategory]);

  const toggleModal = (e) => {
    dispatch(toggleCategoryEditModal());
  };

  return (
    <ModalBox show={show} toggleModal={toggleModal}>
      <form className="editCatForm">
        <div className="fromWrapper">
          <input
            className="formInput"
            type="text"
            name="newCategory"
            value={category.newCategory}
            required
            placeholder="New Category"
          />
          <select className="formInput" defaultValue={null}>
            <option value={null}></option>

            {categories.map((item, i) => {
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
