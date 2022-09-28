const isDevelopment = process.env.NODE_ENV === "development";

module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-typescript",
    [
      "@babel/preset-react",
      {
        runtime: "automatic", // 在文件中自动导入 React
        development: isDevelopment // 添加 _debugSource 信息
      }
    ]
  ],
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        corejs: {
          version: 3,
          proposals: true
        }
      }
    ]
  ]
};
