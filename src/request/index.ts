import { ref } from "vue";
import axios, { Canceler, AxiosRequestConfig } from "axios";
import { IRequestResponse } from "@/types/request";

const instance = axios.create({
  baseURL: "/",
});

instance.interceptors.request.use((config) => {
  return config;
});

instance.interceptors.response.use((res) => {
  const { code, data } = res.data;
  if (code === 0) {
    return data;
  }
});

export default function request<T>(
  config: AxiosRequestConfig
): IRequestResponse<T> {
  const cancel = ref<Canceler>();
  return {
    instance: instance({
      ...config,
    }),
    cancel,
  };
}
