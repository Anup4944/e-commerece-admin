import axios from "axios";

const orderUrl = "http://localHost:5000/api/v1/order/income";

export const getOrderApi = async () => {
  try {
    const { data } = await axios.get(orderUrl);
    return data;
  } catch (error) {
    console.log(error);
  }
};
