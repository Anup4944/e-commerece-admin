import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./pages/login/loginSlice";
import passReducer from "./pages/pass-reset/passSlice";
import productReducer from "./pages/new-product/productSlice";
import categoryReducer from "./pages/new-category/categorySlice";
import clientReducer from "./pages/client-list/clientSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    passwordReset: passReducer,
    product: productReducer,
    category: categoryReducer,
    users: clientReducer,
  },
});

export default store;
