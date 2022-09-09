/*
 * @Author: Chendapeng
 * @Date: 2021-09-12 17:25:37
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-11-07 20:53:56
 * @Description:  webpack
 */

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
      },
    ]
  }
}

/*
 * @Author: Chendapeng
 * @Date: 2021-09-12 18:04:38
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-10-17 18:10:41
 * @Description: 
 */
// const {merge} = require('webpack-merge');
// const common = require('./webpack.common')
const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react',  ['@babel/preset-env', {
            targets: {
              browsers: ['last 2 versions']
            }
          }]]
        },
        exclude: /node_modules/
      }
    ]
  }
}