const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  mode: "development",
  devtool: false,
  entry: "./src/index.js",
  output: {
    filename: "[name].[hash].js",
    path: path.join(__dirname, "dist"),
  },
  devServer: {
    hot: true,
    historyApiFallback: {
      index: "./index.html",
    },
    open:true
  },
  resolve: {
    alias: {
      "@": path.resolve("src"),
    },
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude:/node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
