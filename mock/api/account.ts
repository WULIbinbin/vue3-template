import response from "../response";

export default [
  {
    url: "/api/getAccount",
    method: "get",
    response: () => {
      return response({}, 200, 0);
    },
  },
];
