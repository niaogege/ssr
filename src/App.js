import React from "react";
import { renderRoutes } from "react-router-config";
import Nav from "./components/nav";
import Seo from "./components/helmet";
/**
 * 页面公用一个Nav组件
 * @param {*} props
 * @returns
 */
const App = (props) => {
  return (
    <>
      {/* 兜底头部 */}
      <Seo title="APP Home" meta="APP meta" />
      <Nav />
      {renderRoutes(props.route.routes)}
    </>
  );
};

export default App;
