import {
  addProductApi,
  getAllProductApi,
  getSingleProductApi,
  updateProductApi,
} from "../../apis/productApi";
import {
  addProductSuccess,
  getAllProductSuccess,
  updateProductSuccess,
  requestFail,
  requestPending,
  getSingleProductSuccess,
} from "./productSlice";

export const getAllProductAction = () => async (dispatch) => {
  try {
    dispatch(requestPending());

    const result = await getAllProductApi();

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
export const updateProductAction = (_id, frmDt) => async (dispatch) => {
  try {
    dispatch(requestPending());

    const result = await updateProductApi(_id, frmDt);

    result.status === "success"
      ? dispatch(updateProductSuccess(result)) &&
        dispatch(getAllProductAction())
      : dispatch(requestFail());
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};

export const getSingleProductAction = (_id) => async (dispatch) => {
  try {
    dispatch(requestPending());

    const result = await getSingleProductApi(_id);

    result.status === "success" && dispatch(getSingleProductSuccess(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};
