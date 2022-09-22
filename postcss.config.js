module.exports = {
  plugins: [
    "postcss-flexbugs-fixes", // 修复 flex bug
    [
      /**
       * 将最新的 css 语法转换成大多数浏览器都能理解的语法，
       * 并根据你的目标浏览器或运行时环境来确定你需要的 polyfills。
       * 同时内置了 autoprefixer 的功能。
       */
      "postcss-preset-env",
      {
        stage: 3
      }
    ],
    "postcss-normalize" // 根据 browserslist 来根据目标浏览器动态使用 normalize.css 中的样式。
  ]
};
