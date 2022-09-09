/*
 * @Author: Chendapeng
 * @Date: 2021-11-07 21:18:52
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-09-09 16:01:33
 * @Description: 路由里的nav组件
 */
import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="nav">
      <Link to={"/client"}>client</Link>
      <br />
      <Link to={"/home"}>Home</Link>
      <br />
      <Link to={"/test"}>Test</Link>
      <br />
      <Link to={"/"}>去首页</Link>
    </div>
  );
};

export default Nav;
