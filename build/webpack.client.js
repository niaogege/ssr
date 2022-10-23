/*
 * @Author: Chendapeng
 * @Date: 2021-09-12 18:04:38
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-10-16 11:10:28
 * @Description:
 */
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin"); // 复制并压缩html

module.exports = merge(common, {
  mode: "development",
  entry: path.resolve(__dirname, "../src/client/app.js"),
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "../public"),
    filename: "index.js",
    chunkFilename: "js/[id].[chunkhash].js",
  },
  module: {
    rules: [
      // {
      //   test: /\.less$/,
      //   use: [
      //     {
      //       loader: "style-loader", // creates style nodes from JS strings
      //     },
      //     {
      //       loader: "css-loader", // translates CSS into CommonJS
      //     },
      //     {
      //       loader: "less-loader", // compiles Less to CSS
      //     },
      //   ],
      // },
      // 编译css，自动添加前缀，抽取css到独立文件
      {
        test: /\.(css|less)$/,
        use: [
          // "style-loader",
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
  plugins: [
    // 最后打包的资源潜入html
    // new htmlWebpackPlugin({
    //   template: path.resolve(__dirname, '../public/index.html'), // 生成的文件名
    //   filename: 'index.html', // 生成html文件的名称
    //   inject: true, // 将js文件查到
    //   hash: true
    // }),
  ],
  devServer: {
    host: "localhost",
    open: true,
    port: 3000,
    hot: true,
    // contentBase: path.join(__dirname, '../dist'),
    historyApiFallback: true, //缺少该配置，会出现上面的错误
  },
});
