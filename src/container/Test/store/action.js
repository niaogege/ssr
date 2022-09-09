import axios from "axios";
import { GETTRACKJSON } from "./constant";

const changeList = (data) => ({
  type: GETTRACKJSON,
  data,
});

export const getSoundJson = () => {
  return (dispatch) => {
    return axios
      .get("http://localhost:4002/api/track.json")
      .then((res) => {
        const data = res.data.data;
        dispatch(changeList(data));
      })
      .catch((e) => {
        console.error(e, "请求发生错误");
      });
  };
};
