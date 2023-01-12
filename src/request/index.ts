import {ref} from 'vue'
import axios,{Canceler} from "axios";
import { IRequestResponse,AxiosRequestConfig } from "@/types/request";

const instance = axios.create({
  baseURL: "/",
});

instance.interceptors.request.use((config) => {
  return config;
});

instance.interceptors.response.use((res) => {
  console.log(res);
  const { code, data } = res.data;
  if (code === 0) {
    return data;
  }
});

export default function request<T>(config: AxiosRequestConfig): IRequestResponse<T> {
  const cancel = ref<Canceler>();
  return {
    instance: instance({
      ...config,
      cancelToken: new axios.CancelToken((c) => {
        cancel.value = c;
      })
    }),
    cancel
  };
};
