import axios from "axios";

const loginUrl = "http://localhost:5000/api/v1/auth/login";
const logoutUrl = "http://localhost:5000/api/v1/auth/logout";

export const loginApi = async (frmDt) => {
  try {
    const { data } = await axios.post(loginUrl, frmDt);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const logoutApi = async (frmDt) => {
  try {
    const { data } = await axios.put(logoutUrl, frmDt);
    return data;
  } catch (error) {
    console.log(error);
  }
};
