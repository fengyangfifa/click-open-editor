const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const getCSSModuleLocalIdent = require("react-dev-utils/getCSSModuleLocalIdent");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

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
  devtool: "source-map",
  module: {
    rules: [
      {
        test: cssRegex,
        exclude: cssModuleRegex,
        use: getStyleLoaders({}, false)
      },
      {
        test: cssModuleRegex,
        use: getStyleLoaders(
          {
            modules: {
              getLocalIdent: getCSSModuleLocalIdent
            }
          },
          false
        )
      },
      {
        test: sassRegex,
        exclude: sassModuleRegex,
        use: getStyleLoaders({}, false, "sass-loader")
      },
      {
        test: sassModuleRegex,
        use: getStyleLoaders(
          {
            modules: {
              getLocalIdent: getCSSModuleLocalIdent // css module 命名规则
            }
          },
          false,
          "sass-loader"
        )
      }
    ]
  },
  optimization: {
    minimizer: ["...", new CssMinimizerPlugin()],
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "static/css/[name].[contenthash:8].css",
      chunkFilename: "static/css/[name].[contenthash:8].chunk.css"
    })
  ]
});
