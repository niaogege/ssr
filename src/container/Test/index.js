/*
 * @Author: Chendapeng
 * @Date: 2021-11-07 20:55:41
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-09-25 17:16:37
 * @Description: 刷新页面
 */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSoundJson } from "./store/action";
import withStyles from "isomorphic-style-loader/withStyles";
import styles from "./index.less";
const Test = ({ getSoundJson, data = [] }) => {
  useEffect(() => {
    if (!data.length) {
      getSoundJson();
    }
  }, [getSoundJson]);

  return (
    <div>
      <h1>this is Test Pages</h1>
      <ul className={styles.testName}>
        {data.map((e) => {
          return <li key={e.id}> {e.title} </li>;
        })}
      </ul>
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

const TestComp = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Test));
TestComp.getInitProps = (store) => {
  return store.dispatch(getSoundJson());
};
export default TestComp;
