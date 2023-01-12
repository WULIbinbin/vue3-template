import request from "@/request/index";

export function getUserInfo(data) {
  return request({ url: "/api/getAccount", method: "get", data });
}
