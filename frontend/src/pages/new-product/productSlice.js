import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
  products: [],
  singleProduct: {},
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true;
    },
    addProductSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
      state.products = payload.result;
    },
    getAllProductSuccess: (state, { payload }) => {
      console.log(payload);
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
      state.products = payload.result;
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
  addProductSuccess,
  getAllProductSuccess,
  requestFail,
} = actions;

export default reducer;
