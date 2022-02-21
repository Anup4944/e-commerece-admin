import axios from "axios";

const rootUrl = "http://localhost:5000/api/v1/product";

export const addProductApi = async (productInfo) => {
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
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getSingleProductApi = async (_id) => {
  try {
    console.log(_id);
    const { data } = await axios.get(
      `http://localhost:5000/api/v1/product/${_id}`
    );
    console.log("from api", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateProductApi = (_id, frmDt) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.put(
        `http://localhost:5000/api/v1/product/${_id}`,
        frmDt
      );
      console.log("from api", data);
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};
