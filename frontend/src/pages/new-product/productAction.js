import { addProductApi, getAllProductApi } from "../../apis/productApi";
import {
  addProductSuccess,
  getAllProductSuccess,
  requestFail,
  requestPending,
} from "./productSlice";

export const getAllProductAction = () => async (dispatch) => {
  try {
    dispatch(requestPending());

    const result = await getAllProductApi();
    console.log(result);

    result.status === "success"
      ? dispatch(getAllProductSuccess(result))
      : dispatch(requestFail());
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};
export const saveProductAction = (frmDt) => async (dispatch) => {
  try {
    dispatch(requestPending());

    const result = await addProductApi(frmDt);

    result.status === "success"
      ? dispatch(addProductSuccess(result)) && dispatch(getAllProductAction())
      : dispatch(requestFail());
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};
