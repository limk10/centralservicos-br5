import axios from "../axiosInstance";

export const postIndication = async (data) => {
  const result = await axios.post(`services/checkout/iniciar-cotacao`, data);
  return result;
};
