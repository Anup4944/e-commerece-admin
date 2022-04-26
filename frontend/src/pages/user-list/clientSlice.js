import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
  allUsers: [],
  singleUser: {},
  userStat: [],
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
    getUserStatSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
      state.userStat = payload.clientStats;
    },
    updateClientPassSuccess: (state, { payload }) => {
      state.isLoading = false;
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

const { reducer, actions } = clientSlice;
export const {
  requestPending,
  getAllUserSuccess,
  getSingleUserSuccess,
  updateClientPassSuccess,
  getUserStatSuccess,
  requestFail,
} = actions;

export default reducer;
