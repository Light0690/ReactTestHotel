import axios from "axios";

const instance = axios.create({
  baseURL: `https://reacttesthotelback-production.up.railway.app/`,
});

export default instance;
