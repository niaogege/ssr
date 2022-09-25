/*
 * @Author: Chendapeng
 * @Date: 2021-09-12 18:18:03
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-09-25 11:39:27
 * @Description:
 */
import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Link } from "react-router-dom";
import routes from "../route";
import { Provider } from "react-redux";
import { getClientStore } from "../store";
import { renderRoutes } from "react-router-config";
import StyleContext from "isomorphic-style-loader/StyleContext";

const insertCss = (...styles) => {
  const removeCss = styles.map((style) => {
    return style._insertCss();
  });
  return () => removeCss.forEach((dispose) => dispose());
};

const App = () => {
  return (
    <Provider store={getClientStore()}>
      <StyleContext.Provider value={{ insertCss }}>
        <BrowserRouter>
          <div>{renderRoutes(routes)}</div>
        </BrowserRouter>
      </StyleContext.Provider>
    </Provider>
  );
};

// const rootElement = document.getElementById('root');
// if (rootElement.getAttribute('data-ssr')) {
//     ReactDOM.hydrate(content, rootElement);
// } else {
//     ReactDOM.render(content, rootElement);
// }
// 水合
ReactDom.hydrate(
  <App suppressHydrationWarning />,
  document.getElementById("app")
);
