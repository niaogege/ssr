/*
 * @Author: Chendapeng
 * @Date: 2021-10-17 16:59:31
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-09-09 14:53:29
 * @Description: 公共路由
 */
import Client from "./client/components/shadow";
import NotFound from "./client/components/404";
import Test from "./container/Test";
import Home from "./container/Home";
import App from "./App";

export const routes = [
  {
    name: "client",
    path: "/client",
    component: Client,
  },
  {
    name: "test",
    path: "/test",
    loadData: Test.loadData,
    component: Test,
  },
  {
    name: "home",
    path: "/home",
    loadData: Home.loadData, // 服务端获取异步数据的函数
    component: Home,
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
