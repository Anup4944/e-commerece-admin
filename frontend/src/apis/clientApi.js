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

export const getSingleClientApi = async (_id) => {
  try {
    const { data } = await axios.get(
      `http://localhost:5000/api/v1/client/${_id}`
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
