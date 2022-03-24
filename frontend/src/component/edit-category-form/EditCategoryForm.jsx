import React, { useState, useEffect } from "react";
import ModalBox from "../modal-box/ModalBox";
import { useDispatch, useSelector } from "react-redux";
import { toggleCategoryEditModal } from "../../pages/new-category/categorySlice";

const initialState = {
  newCategory: "",
  parentCategory: null,
};

const EditCategoryForm = () => {
  const [category, setCategory] = useState(initialState);

  const { isLoading, show } = useSelector((state) => state.category);

  const dispatch = useDispatch();

  //   useEffect(() => {
  //     setCategory(selectedCategory);
  //   }, [dispatch, selectedCategory]);

  const toggleModal = (e) => {
    dispatch(toggleCategoryEditModal());
  };
  return (
    <ModalBox show={show} toggleModal={toggleModal}>
      <form>
        <input placeholder="New Category" />
        <input placeholder="New category" />
        <button>Submit</button>
      </form>
    </ModalBox>
  );
};

export default EditCategoryForm;
