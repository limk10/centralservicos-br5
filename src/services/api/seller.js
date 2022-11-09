import axios from "../axiosInstance";

export const getSeller = async (id) => {
  const { data } = await axios.get(`services/info/seller/${id}`);
  return data;
};
