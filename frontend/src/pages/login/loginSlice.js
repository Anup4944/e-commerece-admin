import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isAuth: false,
  status: "",
  message: "",
  user: [],
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true;
      state.isAuth = false;
    },
    loginSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.isAuth = true;
      state.status = payload.status;
      state.message = payload.message;
      state.user = payload.user;
    },
    logoutSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.isAuth = false;
      state.status = payload.status;
      state.message = payload.message;
      state.user = null;
    },
    requestFail: (state, { payload }) => {
      state.isLoading = false;
      state.isAuth = false;
      state.status = payload.status;
      state.message = payload.message;
    },
  },
});

const { reducer, actions } = loginSlice;
export const {
  requestPending,
  loginSuccess,
  userAutoLoginSuccess,
  logoutSuccess,
  requestFail,
} = actions;

export default reducer;
