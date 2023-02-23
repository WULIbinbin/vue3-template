export default {
  namespaced:true,
  state: {
    userInfo: {
      name: "binbinMax",
      phone: "18688882333",
    },
  },
  mutations: {
    setUserInfo(state: { userInfo: any; }, value: any) {
      state.userInfo = value;
    },
  },
};
