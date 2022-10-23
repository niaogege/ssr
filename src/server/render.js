/*
 * @Author: Chendapeng
 * @Date: 2021-10-17 21:12:57
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-10-23 12:37:27
 * @Description: 构建服务端路由
 */

import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import StyleContext from "isomorphic-style-loader/StyleContext";
import React from "react";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import { Helmet } from "react-helmet";

export const render = (store, routes, req, context) => {
  const css = new Set(); // CSS for all rendered React components
  const insertCss = (...styles) =>
    styles.forEach((style) => css.add(style._getCss()));

  const content = renderToString(
    <Provider store={store}>
      <StyleContext.Provider value={{ insertCss }}>
        <StaticRouter location={req.path} context={context}>
          <div>{renderRoutes(routes)}</div>
        </StaticRouter>
      </StyleContext.Provider>
    </Provider>
  );

  //拿到helmet对象，然后在html字符串中引入
  const helmet = Helmet.renderStatic();
  // const cssStr = context.css.length ? context.css.join("\n") : "";
  // console.log(cssStr`, "cssStrcssStr");
  const appHtml = `
  <html>
  <head>
  <meta charset="utf-8">
  ${helmet.title.toString()}
  ${helmet.meta.toString()}
  <style>
  ${[...css].join("")}
  </style>
  </head>
    <body>
    <div id='app'>${content}</div>
    <script>
      window.context = {
        state: ${JSON.stringify(store.getState())}
      }
    </script>
    <script src='index.js'></script>
    </body>
  </html>
`;
  return appHtml;
};
