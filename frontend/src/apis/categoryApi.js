import axios from "axios";

const rootUrl = "http://localhost:5000/api/v1/category";

export const addCategoryApi = async (cat) => {
  try {
    const { data } = await axios.post(rootUrl, cat);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllCategoryApi = async () => {
  try {
    const { data } = await axios.get(rootUrl);
    return data;
  } catch (error) {
    console.log(error);
  }
};