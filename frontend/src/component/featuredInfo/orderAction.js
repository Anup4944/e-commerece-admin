import {
  getAllOrderApi,
  getOrderApi,
  getSumOfOrdersApi,
  transPerClientApi,
} from "../../apis/orderApi";
import {
  getAllOrderSuccess,
  getRevenueSuccess,
  getSumRevenueSuccess,
  requestFail,
  requestPending,
  getMoneyPerClientSuccess,
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

export const allOrderAction = () => async (dispatch) => {
  try {
    dispatch(requestPending());

    const result = await getAllOrderApi();

    result.status === "success"
      ? dispatch(getAllOrderSuccess(result))
      : dispatch(requestFail(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};
export const transactionAction = () => async (dispatch) => {
  try {
    dispatch(requestPending());

    const result = await transPerClientApi();

    result.status === "success"
      ? dispatch(getMoneyPerClientSuccess(result))
      : dispatch(requestFail(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};
