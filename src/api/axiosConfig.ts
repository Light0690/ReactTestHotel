import axios from "axios";

const instance = axios.create({
  baseURL: `reacttesthotelback-production.up.railway.app`,
});

export default instance;
