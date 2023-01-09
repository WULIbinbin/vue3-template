module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: [
        "Android 4.1",
        "iOS 7.1",
        "Chrome > 31",
        "ff > 31",
        "ie >= 8",
        "last 10 versions", // 所有主流浏览器最近10版本用
      ],
      grid: true,
    },
    "postcss-pxtorem": {
      rootValue: 32,
      // 除了border，其他单位px换rem
      propList: ["*", "!border"],
      unitPrecision: 5,
      exclude: /node_modules/i
    },
  },
};
