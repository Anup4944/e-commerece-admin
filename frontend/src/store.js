import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./pages/login/loginSlice";
import passReducer from "./pages/pass-reset/passSlice";
import productReducer from "./pages/new-product/productSlice";
import categoryReducer from "./pages/new-category/categorySlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    passwordReset: passReducer,
    product: productReducer,
    category: categoryReducer,
  },
});

export default store;
