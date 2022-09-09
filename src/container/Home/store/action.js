/*
 * @Author: Chendapeng
 * @Date: 2021-11-07 21:27:42
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-09-09 14:50:00
 * @Description: axios
 */

import axios from "axios";
import { CHANGE_LIST } from "./constant";

const changeList = (list) => ({
  type: CHANGE_LIST,
  list,
});
// 异步操作的action 采用thunk中间件处理异步
export const getHomeList = () => {
  return (dispatch) => {
    return axios
      .get("http://localhost:4002/api/album.json")
      .then((res) => {
        const list = res.data.data;
        dispatch(changeList(list));
      })
      .catch((e) => {
        console.error(e, "请求发生错误");
      });
  };
};
