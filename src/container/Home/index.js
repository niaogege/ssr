/*
 * @Author: Chendapeng
 * @Date: 2021-11-07 21:27:13
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-09-24 22:34:29
 * @Description: Home
 */

import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import { getHomeList } from "./store/action";
import withStyles from "isomorphic-style-loader/withStyles";
import styles from "./index.css";
const Home = ({ getHomeList, list = [], staticContext }) => {
  useEffect(() => {
    if (!list.length) {
      getHomeList();
    }
  }, [getHomeList]);
  return (
    <div className={styles.home}>
      <ul>
        {list.length &&
          list.map((e) => (
            <div className={styles.title} key={e.id}>
              {e.title}
            </div>
          ))}
      </ul>
    </div>
  );
};

// class HomeClass extends Component {
//   constructor(props) {
//     super(props);
//   }
//   UNSAFE_componentWillMount() {
//     // 服务端isomorphic-style-loader插件会给styles绑定_getCss()方法
//     if (this.props.staticContext) {
//       const str = styles._getCss();
//       this.props.staticContext.css.push(str);
//     }
//   }
//   componentDidMount() {
//     if (!this.props.list.length) {
//       this.props.getHomeList();
//     }
//   }
//   render() {
//     const { list = [] } = this.props;
//     return (
//       <div className={styles.home}>
//         <ul>
//           {list.length &&
//             list.map((e) => (
//               <div className={styles.title} key={e.id}>
//                 {e.title}
//               </div>
//             ))}
//         </ul>
//       </div>
//     );
//   }
// }
const mapStateToProps = (state) => ({
  list: state.home.newsList || [],
});

const mapDispatchToProps = (dispatch) => ({
  getHomeList() {
    dispatch(getHomeList());
  },
});

const exportHome = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Home));

exportHome.loadData = (store) => {
  return store.dispatch(getHomeList());
};
export default exportHome;
