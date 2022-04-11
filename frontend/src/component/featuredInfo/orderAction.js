import { getOrderApi, getSumOfOrdersApi } from "../../apis/orderApi";
import {
  getRevenueSuccess,
  getSumRevenueSuccess,
  requestFail,
  requestPending,
} from "./orderSlice";

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

export const revenueSumAction = () => async (dispatch) => {
  try {
    dispatch(requestPending());

    const result = await getSumOfOrdersApi();

    result.status === "success"
      ? dispatch(getSumRevenueSuccess(result))
      : dispatch(requestFail(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};
