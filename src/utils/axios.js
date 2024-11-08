import axios from "axios";

// Base_url => http://localhost:5000

const base_url = "http://localhost:5000";

const axiosInstance = axios.create({ baseURL: base_url });

axios.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(error.reponse && error.response.data) ||
    "Something went wrong!"
);

export default axiosInstance;
