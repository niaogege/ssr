/*
 * @Author: Chendapeng
 * @Date: 2021-11-07 21:18:52
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-09-25 12:52:36
 * @Description: 路由里的nav组件
 */
import React from "react";
import { Link } from "react-router-dom";
import withStyles from "isomorphic-style-loader/withStyles";
import styles from "./index.less";
const Nav = () => {
  return (
    <div className={styles.nav}>
      <Link to={"/"}>首页</Link>
      <Link to={"/client"}>client</Link>
      <Link to={"/home"}>Home</Link>
      <Link to={"/test"}>Test</Link>
    </div>
  );
};

export default withStyles(styles)(Nav);
