import React from "react";
import { renderRoutes } from "react-router-config";
import Nav from "./components/nav";
/**
 * 页面公用一个Nav组件
 * @param {*} props
 * @returns
 */
const App = (props) => {
  return (
    <>
      <h1>This is Main App</h1>
      <Nav />
      {renderRoutes(props.route.routes)}
    </>
  );
};

export default App;
