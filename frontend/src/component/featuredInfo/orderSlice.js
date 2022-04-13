import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
  monthlyRev: [],
  totalIncome: [],
  allOrders: [],
  monthlyInc: [],
};

const loginSlice = createSlice({
  name: "revenue",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true;
    },
    getAllOrderSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
      state.allOrders = payload.result;
    },
    getRevenueSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
      state.monthlyRev = payload.monthInc;
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
  getAllOrderSuccess,
  getMonthlyIncomeSuccess,
  getSumRevenueSuccess,
  requestFail,
} = actions;

export default reducer;
