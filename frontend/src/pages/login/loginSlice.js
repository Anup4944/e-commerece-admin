import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isAuth: false,
  status: "",
  message: "",
  users: [],
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
      state.users = payload.user;
    },
    userAutoLoginSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.isAuth = true;
      state.status = payload.status;
      state.message = payload.message;
      state.users = payload.userProf;
    },
    logoutSuccess: (state) => {
      state.isLoading = false;
      state.isAuth = false;
      state.status = "success";
      state.message = "You have been logged out!";
      state.users = null;
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
