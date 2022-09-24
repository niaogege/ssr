/*
 * @Author: Chendapeng
 * @Date: 2021-09-12 19:50:27
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-09-24 14:50:11
 * @Description:
 */
import express from "express";
import { render } from "./render";
import { matchRoutes } from "react-router-config";
import routes from "../route";
import { getStore } from "../store";

const app = express();

// 访问静态文件
app.use(express.static("public"));

app.get("*", function (req, res) {
  const store = getStore();
  // 调用matchRoutes用来匹配当前路由(支持多级路由)
  // 根据路由的路径，来往store里面加数据
  const matchedRoutes = matchRoutes(routes, req.path);
  const promises = [];
  matchedRoutes.forEach((item) => {
    // 如果这个路由对应的组件有loadData方法
    if (item.route.loadData) {
      const promise = new Promise((resolve, reject) => {
        // 根据路由的路径，来往store里面加数据
        item.route.loadData(store).then(resolve).catch(reject);
      });
      promises.push(promise);
    }
  });

  Promise.all(promises)
    .then(() => {
      let context = { css: [] };
      const html = render(store, routes, req, context);
      if (context.action === "REPLACE") {
        res.redirect(301, context.url);
      } else if (context.NotFound) {
        res.status(404);
        res.send(html);
      } else {
        res.send(html);
      }
    })
    .catch((e) => {
      console.log("server occur error: ", e);
    });
});

var server = app.listen(3001, () => {
  var host = server.address().address;
  var port = server.address().port;
  console.log(`应用实例，访问地址为 ${host}:${port}/`, host);
});
