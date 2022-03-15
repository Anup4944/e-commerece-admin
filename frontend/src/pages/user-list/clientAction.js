import { getAllClientApi, getSingleClientApi } from "../../apis/clientApi";
import {
  requestPending,
  getAllUserSuccess,
  getSingleUserSuccess,
  requestFail,
} from "./clientSlice";

export const getAllUserAction = () => async (dispatch) => {
  try {
    dispatch(requestPending());

    const result = await getAllClientApi();

    result.status === "success"
      ? dispatch(getAllUserSuccess(result))
      : dispatch(requestFail(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};

export const getSingleUserAction = (_id) => async (dispatch) => {
  try {
    dispatch(requestPending());

    const result = await getSingleClientApi(_id);

    result.status === "success" && dispatch(getSingleUserSuccess(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};
