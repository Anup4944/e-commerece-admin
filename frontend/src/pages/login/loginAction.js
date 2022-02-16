import {
  requestPending,
  loginSuccess,
  logoutSuccess,
  requestFail,
} from "./loginSlice";
import { loginApi, logoutApi } from "../../apis/loginApi";

export const loginAction = (frmDt) => async (dispatch) => {
  try {
    dispatch(requestPending());

    const result = await loginApi(frmDt);
    const { accessJwt, refreshJwt } = result;

    accessJwt && window.sessionStorage.setItem("accessJwt", accessJwt);
    refreshJwt && window.localStorage.setItem("refreshJwt", refreshJwt);

    result.status === "success"
      ? dispatch(loginSuccess(result))
      : dispatch(requestFail(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};

export const logoutAction = () => async (dispatch) => {
  try {
    dispatch(requestPending());

    const result = await logoutApi({
      accessJwt: window.sessionStorage.getItem("accessJwt"),
      refreshJwt: window.localStorage.getItem("refreshJwt"),
    });

    window.sessionStorage.removeItem("accessJwt");
    window.localStorage.removeItem("refreshJwt");

    dispatch(logoutSuccess(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};
