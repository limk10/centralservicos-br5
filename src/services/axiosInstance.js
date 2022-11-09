import axios from "axios";
import _ from "lodash";

const baseURL = "https://apiteste.br5beneficios.com.br/";

const api = axios.create({
  baseURL,
  responseType: "json",
  headers: {
    Accept: "application/json",
    ContentType: "text/plain",
  },
});

api.interceptors.request.use(async (config) => {
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { response, config } = error;
    const originalRequest = config;

    return Promise.reject(error);
  }
);

export default api;
