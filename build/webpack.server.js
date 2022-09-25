/*
 * @Author: Chendapeng
 * @Date: 2021-09-12 20:05:50
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-09-25 14:25:19
 * @Description: 服务端配置代码
 */
// 排除不需要的打包模块
const WebpackNodeExternals = require("webpack-node-externals");
const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
// target： nodejs 环境可用

module.exports = merge(common, {
  mode: "development",
  target: "node",
  entry: path.resolve(__dirname, "../src/server/index.js"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../dist"),
    libraryTarget: "commonjs",
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
          "isomorphic-style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              esModule: false,
              modules: {
                localIdentName: "[name]__[local]___[hash:base64:5]",
              },
            },
          },
          "less-loader",
        ],
      },
    ],
  },
  externals: [WebpackNodeExternals()],
});
