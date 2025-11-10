import axios from "axios";

export const API = "https://heathylifeblogbackend.onrender.com";

export const axiosInstance = axios.create({
  baseURL: API,
});
