import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
  allUsers: [],
  singpleUser: {},
};

const clientSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true;
    },
    getAllUserSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
      state.allUsers = payload.allUsers;
    },
    requestFail: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
    },
  },
});

const { reducer, actions } = clientSlice;
export const { requestPending, getAllUserSuccess, requestFail } = actions;

export default reducer;
