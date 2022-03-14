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
  reducers: {},
});

const { reducer, actions } = clientSlice;
export const {} = actions;

export default reducer;
