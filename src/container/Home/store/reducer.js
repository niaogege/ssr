/*
 * @Author: Chendapeng
 * @Date: 2021-11-07 21:34:35
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-11-08 19:33:52
 * @Description: reducer
 */
//reducer.js
import { CHANGE_LIST } from "./constant";

const defaultState = {
  name: 'cpp',
  list: []
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case CHANGE_LIST:
      const newState = {
        ...state,
        newsList: action.list
      }
      return newState;
    default:
      return state
  }
}