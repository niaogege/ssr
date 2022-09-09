/*
 * @Author: Chendapeng
 * @Date: 2021-10-17 21:22:39
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-09-09 14:52:07
 * @Description: Store
 */
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as HomeReducer } from "../container/Home/store";
import { reducer as TestReducer } from "../container/Test/store";
//合并项目组件中store的reducer
const reducer = combineReducers({
  home: HomeReducer,
  test: TestReducer,
});

//创建store，并引入中间件thunk进行异步操作的管理

// export default () => {
//   return createStore(reducer1, applyMiddleware(thunk));
// }

// 单例导出去后，所有的用户用的是同一份store
// export default createStore(HomeReducer, applyMiddleware(thunk))

// export const getStore = () => {
//   return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios)));
// }
export const getStore = () => {
  return createStore(reducer, applyMiddleware(thunk));
};

// 客户端脱水
export const getClientStore = () => {
  const defaultState = window.context ? window.context.state : {};
  // return createStore(reducer, defaultState, applyMiddleware(thunk.withExtraArgument(clientAxios)));
  return createStore(reducer, defaultState, applyMiddleware(thunk));
};
