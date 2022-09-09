/*
 * @Author: Chendapeng
 * @Date: 2021-11-07 20:55:41
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-09-09 15:13:18
 * @Description: 刷新页面
 */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSoundJson } from "./store/action";
const Test = ({ getSoundJson, data = [] }) => {
  useEffect(() => {
    if (!data.length) {
      getSoundJson();
    }
  }, [getSoundJson]);

  return (
    <div>
      <h1>this is Test Pages, {JSON.stringify(data)}</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.test.data,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getSoundJson() {
    dispatch(getSoundJson());
  },
});

const TestComp = connect(mapStateToProps, mapDispatchToProps)(Test);
TestComp.loadData = (store) => {
  return store.dispatch(getSoundJson());
};
export default TestComp;
