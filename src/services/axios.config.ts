import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "http://localhost:9090",
});
axiosInstance.interceptors.request.use((config) => {
  config.headers["Content-Type"] = "application/json";
  return config;
});
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    return await Promise.reject(error);
  }
);
