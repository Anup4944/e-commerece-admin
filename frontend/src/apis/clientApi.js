import axios from "axios";

const rootUrl = "http://localhost:5000/api/v1/client";

export const getAllClientApi = async () => {
  try {
    const { data } = await axios.get(rootUrl);

    return data;
  } catch (error) {
    console.log(error);
  }
};
