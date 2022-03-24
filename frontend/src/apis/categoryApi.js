import axios from "axios";

const rootUrl = "http://localhost:5000/api/v1/category";

export const addCategoryApi = async (cat) => {
  console.log(cat);
  try {
    const { data } = await axios.post(rootUrl, cat);
    console.log(data);
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

export const deleteCatgeoryApi = async (idArg) => {
  try {
    const { data } = await axios.delete(rootUrl, { data: idArg });
    return data;
  } catch (error) {
    console.log(error);
  }
};
