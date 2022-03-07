import axios from "axios";

const rootUrl = "http://localhost:5000/api/v1/product";

export const addProductApi = async (productInfo) => {
  try {
    const { data } = await axios.post(rootUrl, productInfo, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
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
    const { data } = await axios.get(
      `http://localhost:5000/api/v1/product/${_id}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateProductApi = (_id, frmDt) => {
  console.log(...frmDt, _id);
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.put(
        `http://localhost:5000/api/v1/product/${_id}`,
        frmDt,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      resolve(data);
      console.log(data);
    } catch (error) {
      reject(error);
    }
  });
};

export const deleteProductApi = async (_id) => {
  try {
    const { data } = await axios.delete(
      `http://localhost:5000/api/v1/product/${_id}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
