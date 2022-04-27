import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
  monthlyRev: [],
  totalIncome: [],
  allOrders: [],
  monthlyInc: [],
  userExp: [],
  mostSoldProd: [],
  singleProdStat: [],
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
    getMoneyPerClientSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
      state.userExp = payload.stats;
    },
    getMostSoldSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
      state.mostSoldProd = payload.mostSold;
    },
    getSingleProdStatSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
      state.singleProdStat = payload.prodMonthlyStat;
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
  getMoneyPerClientSuccess,
  getMostSoldSuccess,
  getSumRevenueSuccess,
  getSingleProdStatSuccess,
  requestFail,
} = actions;

export default reducer;
