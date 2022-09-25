/*
 * @Author: Chendapeng
 * @Date: 2021-10-17 16:59:31
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-09-25 17:58:42
 * @Description: 公共路由
 */
import Client from "./client/components/shadow";
import NotFound from "./client/components/404";
import Test from "./container/Test";
import Home from "./container/Home";
import Main from "./components/main";
import App from "./App";

export const routes = [
  {
    path: "/",
    component: Main,
    exact: true,
  },
  {
    name: "client",
    path: "/client",
    component: Client,
    exact: true,
  },
  {
    name: "test",
    path: "/test",
    loadData: Test.getInitProps,
    component: Test,
    exact: true,
  },
  {
    name: "home",
    path: "/home",
    loadData: Home.getInitProps, // 服务端获取异步数据的函数
    component: Home,
    exact: true,
  },
  {
    path: "*",
    component: NotFound,
  },
];

export default [
  {
    component: App,
    routes,
  },
];
