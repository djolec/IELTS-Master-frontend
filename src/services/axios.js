import axios from "axios";

const SERVER_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const serverAxios = axios.create({
  baseURL: SERVER_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
