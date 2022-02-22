import { addCategoryApi, getAllCategoryApi } from "../../apis/categoryApi";
import { addCategorySuccess, getAllCategorySuccess } from "./categorySlice";
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

    result.status === "success"
      ? dispatch(addCategorySuccess(result))
      : dispatch(requestFail());
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestPending(err));
  }
};
