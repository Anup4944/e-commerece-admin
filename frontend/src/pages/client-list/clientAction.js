import { getAllClientApi } from "../../apis/clientApi";
import { requestPending, getAllUserSuccess, requestFail } from "./clientSlice";

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
