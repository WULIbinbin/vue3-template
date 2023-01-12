import response from "../response";

export default [
  {
    url: "/api/getAccount",
    method: "get",
    response: () => {
      return response({ id: 2333, name: "binbin" }, 200, 0);
    },
  },
];
