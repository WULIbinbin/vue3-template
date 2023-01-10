import { AxiosInstance } from "axios";


export function useRequest(request:AxiosInstance):Promise<any[]> {
  return new Promise((resolve)=>{
    request
  })
}