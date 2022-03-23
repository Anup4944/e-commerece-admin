import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
  categories: [],
  updateCategory: {},
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
      state.status = payload.status;
      state.message = payload.message;
      state.categories = payload.allCategories;
    },
    toggleCategoryEditModal: (state) => {
      state.show = !state.show;
      if (!state.show) {
        state.updateCatResponse = {};
      }
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
  requestFail,
} = actions;

export default reducer;
