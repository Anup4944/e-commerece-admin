import axios from "axios";

const updatePassUrl = "http://localhost:5000/api/v1/auth/password";

const optUrl = "http://localhost:5000/api/v1/auth/otp";

export const passResetOtpApi = async (email) => {
  try {
    const { data } = await axios.post(optUrl, { email });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updatePassApi = async (passObj) => {
  try {
    const { data } = await axios.patch(updatePassUrl, passObj);
    return data;
  } catch (error) {
    console.log(error);
  }
};
