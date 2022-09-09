/*
 * @Author: Chendapeng
 * @Date: 2021-10-17 21:12:57
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-09-09 17:03:01
 * @Description: 构建服务端路由
 */

import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import React from "react";
import Nav from "../components/nav";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";

export const render = (store, routes, req, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <Nav />
        <div>{renderRoutes(routes)}</div>
      </StaticRouter>
    </Provider>
  );

  const cssStr = context.css.length ? context.css.join("\n") : "";
  console.log("cssStr:::___", JSON.stringify(cssStr));
  return `
    <html>
    <head>
    <title>ssr Title cpp</title>
    <style>${cssStr}</style>
    </head>
      <body>
      <div id='app'>${content}</div>
      <script src='index.js'></script>
      <script>
        window.context = {
          state: ${JSON.stringify(store.getState())}
        }
      </script>
      </body>
    </html>
  `;
};
