/*
 * @Author: Chendapeng
 * @Date: 2021-10-17 21:12:57
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-09-24 22:32:29
 * @Description: 构建服务端路由
 */

import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import StyleContext from "isomorphic-style-loader/StyleContext";
import React from "react";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
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

  // const cssStr = context.css.length ? context.css.join("\n") : "";
  console.log([...css].join(""), "CSS ssr");
  // console.log(cssStr, "cssStrcssStr");
  return `
    <html>
    <head>
    <title>ssr Title cpp</title>
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
};
