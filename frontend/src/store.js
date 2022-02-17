import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./pages/login/loginSlice";
import passReducer from "./pages/pass-reset/passSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    passwordReset: passReducer,
  },
});

export default store;
