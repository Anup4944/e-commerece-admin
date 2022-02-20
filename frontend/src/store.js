import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./pages/login/loginSlice";
import passReducer from "./pages/pass-reset/passSlice";
import productReducer from "./pages/new-product/productSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    passwordReset: passReducer,
    product: productReducer,
  },
});

export default store;
