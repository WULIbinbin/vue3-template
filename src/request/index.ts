import axios from "axios";

const instance = axios.create({
  baseURL: "/mock",
});

instance.interceptors.request.use((config) => {
  console.log(config);
  return config;
});

export default instance;
