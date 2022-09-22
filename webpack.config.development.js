const path = require("path");
const { merge } = require("webpack-merge");
const getCSSModuleLocalIdent = require("react-dev-utils/getCSSModuleLocalIdent");

const {
  baseConf,
  cssRegex,
  cssModuleRegex,
  sassRegex,
  sassModuleRegex,
  getStyleLoaders
} = require("./webpack.config.base");

module.exports = merge(baseConf, {
  mode: process.env.NODE_ENV,
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: cssRegex,
        exclude: cssModuleRegex,
        use: getStyleLoaders()
      },
      {
        test: cssModuleRegex,
        use: getStyleLoaders({
          modules: {
            getLocalIdent: getCSSModuleLocalIdent
          }
        })
      },
      {
        test: sassRegex,
        exclude: sassModuleRegex,
        use: getStyleLoaders({}, true, "sass-loader")
      },
      {
        test: sassModuleRegex,
        use: getStyleLoaders(
          {
            modules: {
              getLocalIdent: getCSSModuleLocalIdent // css module 命名规则
            }
          },
          true,
          "sass-loader"
        )
      }
    ]
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
    hot: true,
    compress: true,
    port: 3000
  }
});
