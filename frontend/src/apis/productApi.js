import axios from "axios";

const rootUrl = "http://localhost:5000/api/v1/product";

export const addProductApi = async (productInfo) => {
  console.log(productInfo);
  try {
    const { data } = await axios.post(rootUrl, productInfo);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getAllProductApi = async () => {
  try {
    const { data } = await axios.get(rootUrl);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
