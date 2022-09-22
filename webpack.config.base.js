const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports.cssRegex = /\.css$/;
module.exports.cssModuleRegex = /\.module\.css$/;
module.exports.sassRegex = /\.(scss|sass)$/;
module.exports.sassModuleRegex = /\.module\.(scss|sass)$/;

module.exports.getStyleLoaders = (cssOptions = {}, isDevelopment = true, preProcessor = "") => {
  const loaders = [
    isDevelopment
      ? require.resolve("style-loader")
      : {
          loader: MiniCssExtractPlugin.loader
        },
    {
      loader: require.resolve("css-loader"),
      options: {
        ...cssOptions,
        sourceMap: true
      }
    },
    {
      loader: "postcss-loader",
      options: {
        sourceMap: true
      }
    }
  ];

  if (preProcessor) {
    loaders.push(
      {
        loader: require.resolve("resolve-url-loader"),
        options: {
          root: path.resolve(__dirname, "src"),
          sourceMap: true
        }
      },
      {
        loader: require.resolve(preProcessor),
        options: {
          sourceMap: true
        }
      }
    );
  }

  return loaders;
};

module.exports.baseConf = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.(webp|gif|jpe?g|png|ttf|woff|woff2|otf)$/i,
        type: "asset",
        generator: {
          filename: "static/images/[hash][ext][query]"
        },
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024 // 4kb
          }
        }
      },
      {
        test: /\.svg$/i,
        type: "asset/inline"
      },
      {
        test: /\.txt$/i,
        type: "asset/source"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", "..."],
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  output: {
    clean: true,
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash:8].js",
    chunkFilename: "static/js/[name].[contenthash:8].chunk.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "react-workflow",
      template: "public/index.html"
    }),
    new ESLintPlugin({
      extensions: ["js", "mjs", "jsx", "ts", "tsx"],
      failOnError: true
    }),
    new ForkTsCheckerWebpackPlugin({
      async: true
    })
  ]
};
