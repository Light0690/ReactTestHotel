import axios from "axios";

const instance = axios.create({
  baseURL: `https://reacttesthotelback-production.up.railway.app/`,
  // baseURL: `http://localhost:4444/`,
});

export default instance;
