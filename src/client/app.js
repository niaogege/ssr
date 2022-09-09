/*
 * @Author: Chendapeng
 * @Date: 2021-09-12 18:18:03
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-09-09 17:12:46
 * @Description:
 */
import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Link } from "react-router-dom";
import routes from "../route";
import Nav from "../components/nav";
import { Provider } from "react-redux";
import { getClientStore } from "../store";
import { renderRoutes } from "react-router-config";

const App = () => {
  return (
    <Provider store={getClientStore()}>
      <BrowserRouter>
        <Nav />
        <div>{renderRoutes(routes)}</div>
      </BrowserRouter>
    </Provider>
  );
};
// 水合
ReactDom.hydrate(
  <App suppressHydrationWarning />,
  document.getElementById("app")
);
