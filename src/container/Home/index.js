/*
 * @Author: Chendapeng
 * @Date: 2021-11-07 21:27:13
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-09-09 17:05:24
 * @Description: Home
 */

import React, { useEffect, Component } from "react";
import { connect } from "react-redux";
import { getHomeList } from "./store/action";
import styles from "./index.css";
// const Home = ({ getHomeList, list = [], staticContext }) => {
//   useEffect(() => {
//     if (!list.length) {
//       getHomeList();
//     }
//   }, [getHomeList]);
//   useEffect(() => {
//     if (staticContext) {
//       console.log(styles._getCss(), "staticContext");
//       staticContext.css.push(styles._getCss());
//     }
//   });

//   return (
//     <div className={styles.home}>
//       <ul>
//         {list.length &&
//           list.map((e) => <div key={e.id}>{e.title} 服务端数据</div>)}
//       </ul>
//     </div>
//   );
// };

class HomeClass extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    if (!this.props.list.length) {
      this.props.getHomeList();
    }
    if (this.props.staticContext) {
      this.props.staticContext.css.push(styles._getCss());
    }
  }
  render() {
    const { list = [] } = this.props;
    return (
      <div className={styles.home}>
        <ul>
          {list.length &&
            list.map((e) => <div key={e.id}>{e.title} 服务端数据</div>)}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  list: state.home.newsList || [],
});

const mapDispatchToProps = (dispatch) => ({
  getHomeList() {
    dispatch(getHomeList());
  },
});

const exportHome = connect(mapStateToProps, mapDispatchToProps)(HomeClass);

exportHome.loadData = (store) => {
  return store.dispatch(getHomeList());
};
export default exportHome;
