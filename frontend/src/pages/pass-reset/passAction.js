import { passResetOtpApi, updatePassApi } from "../../apis/passUpdateApi";
import {
  requestPending,
  getOtpSuccess,
  updatePasswordSuccess,
  requestFail,
} from "./passSlice";

export const getPassOtpAction = (email) => async (dispatch) => {
  try {
    dispatch(requestPending());

    const { status, message } = await passResetOtpApi(email);

    if (status === "success") {
      return dispatch(getOtpSuccess({ status, message, email }));
    }
    dispatch(requestFail({ status, message }));
  } catch (error) {
    dispatch(requestFail(error.message));
  }
};

export const updatePasswordAction = (frmDt) => async (dispatch) => {
  try {
    dispatch(requestPending());

    const { status, message } = await updatePassApi(frmDt);

    if (status === "successful") {
      return dispatch(updatePasswordSuccess({ status, message }));
    }
  } catch (error) {
    dispatch(requestFail(error.message));
  }
};
