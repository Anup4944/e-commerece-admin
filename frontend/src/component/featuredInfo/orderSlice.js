import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
  revenueDt: [],
  totalIncome: [],
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
    getSumRevenueSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
      state.totalIncome = payload.overAll;
    },
    requestFail: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
    },
  },
});

const { reducer, actions } = loginSlice;
export const {
  requestPending,
  getRevenueSuccess,
  getSumRevenueSuccess,
  requestFail,
} = actions;

export default reducer;
