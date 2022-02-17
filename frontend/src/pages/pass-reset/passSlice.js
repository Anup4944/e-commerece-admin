import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
  showUpdatePassForm: false,
  email: "",
};

const passwordReset = createSlice({
  name: "passwordReset",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true;
    },
    updatePasswordViaSettingPending: (state) => {
      state.isLoading = true;
    },
    getOtpSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
      state.email = payload.email;
      state.showUpdatePassForm = true;
    },
    updatePasswordSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
    },
    updatePasswordViaSettingSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
    },
    updatePasswordViaSettingFail: (state, { payload }) => {
      state.isLoading = true;
      state.status = payload.status;
      state.message = payload.message;
    },
    requestFail: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
    },
  },
});

const { reducer, actions } = passwordReset;

export const {
  requestPending,
  getOtpSuccess,
  updatePasswordViaSettingPending,
  requestFail,
  updatePasswordViaSettingFail,
  updatePasswordViaSettingSuccess,
  updatePasswordSuccess,
} = actions;
export default reducer;
