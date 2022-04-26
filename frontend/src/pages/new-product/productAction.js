import {
  addProductApi,
  deleteProductApi,
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
  deleteProductSuccess,
  getSingleProductSuccess,
} from "./productSlice";

export const getAllProductAction = () => async (dispatch) => {
  try {
    dispatch(requestPending());

    const result = await getAllProductApi();

    result.status === "successfull"
      ? dispatch(getAllProductSuccess(result))
      : dispatch(requestFail(result));
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
      ? dispatch(addProductSuccess(result))
      : dispatch(requestFail(result));
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

export const updateProductAction = (_id, frmDt) => async (dispatch) => {
  try {
    dispatch(requestPending());

    const result = await updateProductApi(_id, frmDt);

    result.status === "success"
      ? dispatch(updateProductSuccess(result))
      : dispatch(requestFail(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};
export const deleteProductAction = (_id) => async (dispatch) => {
  try {
    dispatch(requestPending());

    const result = await deleteProductApi(_id);

    result.status === "success"
      ? dispatch(deleteProductSuccess(result)) &&
        dispatch(getAllProductAction())
      : dispatch(requestFail(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};
