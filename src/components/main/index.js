/*
 * @Author: Chendapeng
 * @Date: 2021-11-07 21:18:52
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-09-25 12:05:13
 * @Description: 路由里的nav组件
 */
import React from "react";
import withStyles from "isomorphic-style-loader/withStyles";
import styles from "./index.css";
const Main = () => {
  return <h1 className={styles.main}>This is My App</h1>;
};

export default withStyles(styles)(Main);
