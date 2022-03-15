import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
  allUsers: [],
  singleUser: {},
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
    getSingleUserSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
      state.singleUser = payload.singleUser;
    },
    requestFail: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
    },
  },
});

const { reducer, actions } = clientSlice;
export const {
  requestPending,
  getAllUserSuccess,
  getSingleUserSuccess,
  requestFail,
} = actions;

export default reducer;
