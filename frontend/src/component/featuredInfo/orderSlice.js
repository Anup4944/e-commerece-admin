import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
  revenueDt: [],
};

const loginSlice = createSlice({
  name: "revenue",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true;
    },
    getRevenueSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
      state.revenueDt = payload.income;
    },
    requestFail: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
    },
  },
});

const { reducer, actions } = loginSlice;
export const { requestPending, getRevenueSuccess, requestFail } = actions;

export default reducer;
