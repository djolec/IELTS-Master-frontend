import axios from "axios";

const SERVER_BASE_URL = "http://localhost:5500";

export const serverAxios = axios.create({
  baseURL: SERVER_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
