import { getOrderApi } from "../../apis/orderApi";
import { getRevenueSuccess, requestFail, requestPending } from "./orderSlice";

export const revenueAction = () => async (dispatch) => {
  try {
    dispatch(requestPending());

    const result = await getOrderApi();

    result.status === "success"
      ? dispatch(getRevenueSuccess(result))
      : dispatch(requestFail(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};
