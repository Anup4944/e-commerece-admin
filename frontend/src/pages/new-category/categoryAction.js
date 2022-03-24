import {
  addCategoryApi,
  deleteCatgeoryApi,
  getAllCategoryApi,
} from "../../apis/categoryApi";
import {
  addCategorySuccess,
  deleteCategorySuccess,
  getAllCategorySuccess,
} from "./categorySlice";
import { requestFail, requestPending } from "./categorySlice";

export const getAllCategoryAction = () => async (dispatch) => {
  try {
    dispatch(requestPending());

    const result = await getAllCategoryApi();

    result.status === "success"
      ? dispatch(getAllCategorySuccess(result))
      : dispatch(requestFail());
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};

export const saveCategoryAction = (frmDt) => async (dispatch) => {
  try {
    dispatch(requestPending());

    const result = await addCategoryApi(frmDt);

    result.status === "successfull"
      ? dispatch(addCategorySuccess(result)) && dispatch(getAllCategoryAction())
      : dispatch(requestFail());
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};

export const deleteCategoryAction = (idArgs) => async (dispatch) => {
  try {
    dispatch(requestPending());

    const result = await deleteCatgeoryApi(idArgs);

    dispatch(deleteCategorySuccess(result));

    result.status === "success" && dispatch(getAllCategoryAction());
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};
