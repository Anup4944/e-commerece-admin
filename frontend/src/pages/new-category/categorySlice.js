import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
  categories: [],
  updateCategory: {},
  selectedCategory: {},
  show: false,
};

const productSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true;
    },
    addCategorySuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
      state.categories = payload.result;
    },
    getAllCategorySuccess: (state, { payload }) => {
      state.isLoading = false;
      // state.status = payload.status;
      // state.message = payload.message;
      state.categories = payload.allCategories;
    },
    deleteCategorySuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
    },

    toggleCategoryEditModal: (state) => {
      state.show = !state.show;
      if (!state.show) {
        state.updateCategory = {};
      }
    },
    selectACategory: (state, { payload }) => {
      state.selectedCategory = payload;
    },
    requestFail: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
    },
  },
});

const { reducer, actions } = productSlice;
export const {
  requestPending,
  addCategorySuccess,
  getAllCategorySuccess,
  toggleCategoryEditModal,
  deleteCategorySuccess,
  selectACategory,
  requestFail,
} = actions;

export default reducer;
