import axios from "axios";
import _ from "lodash";

const baseURL = "https://warm-phones-joke-201-71-155-225.loca.lt/";

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
