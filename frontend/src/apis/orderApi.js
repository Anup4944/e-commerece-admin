import axios from "axios";

const orderUrl = "http://localHost:5000/api/v1/order/income";

const overAllUrl = "http://localHost:5000/api/v1/order/overall";

const totalMoneySpendEachCus = "http://localHost:5000/api/v1/order/customer";

export const getOrderApi = async () => {
  try {
    const { data } = await axios.get(orderUrl);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getAllOrderApi = async () => {
  try {
    const { data } = await axios.get("http://localHost:5000/api/v1/order");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getSumOfOrdersApi = async () => {
  try {
    const { data } = await axios.get(overAllUrl);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const transPerClientApi = async () => {
  try {
    const { data } = await axios.get(totalMoneySpendEachCus);
    return data;
  } catch (error) {
    console.log(error);
  }
};
