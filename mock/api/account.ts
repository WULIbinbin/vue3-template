import response from "../response";

export default [
  {
    url: "/api/getAccount",
    method: "get",
    response: () => {
      return response(
        {
          id: 2333,
          name: "binbin",
          avatar: "https://tdesign.gtimg.com/mobile/demos/avatar_1.png",
        },
        200,
        0
      );
    },
  },
];
