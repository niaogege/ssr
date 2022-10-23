/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ "react-router-config");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/nav */ "./src/components/nav/index.js");
/* harmony import */ var _components_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/helmet */ "./src/components/helmet/index.js");




/**
 * 页面公用一个Nav组件
 * @param {*} props
 * @returns
 */

var App = function App(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_helmet__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "APP Home",
    meta: "APP meta"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_nav__WEBPACK_IMPORTED_MODULE_2__["default"], null), (0,react_router_config__WEBPACK_IMPORTED_MODULE_1__.renderRoutes)(props.route.routes));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/client/components/404.js":
/*!**************************************!*\
  !*** ./src/client/components/404.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/*
 * @Author: Chendapeng
 * @Date: 2021-10-17 22:53:52
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-11-07 21:05:19
 * @Description: 404
 */


var NotFound = function NotFound() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "this is 404 Page \u53EA\u6709\u5339\u914D\u4E0D\u5230\u7684\u65F6\u5019\u663E\u793A");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFound);

/***/ }),

/***/ "./src/client/components/shadow.js":
/*!*****************************************!*\
  !*** ./src/client/components/shadow.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/helmet */ "./src/components/helmet/index.js");
/*
 * @Author: Chendapeng
 * @Date: 2021-09-12 18:28:57
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-09-25 14:58:07
 * @Description:
 */



var Shadow = function Shadow() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_helmet__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "client title this is Home",
    meta: "client meta home"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    onClick: function onClick() {
      return alert(111);
    }
  }, "client"), "this is shadow ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "shadow component is public Component"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Shadow);

/***/ }),

/***/ "./src/components/helmet/index.js":
/*!****************************************!*\
  !*** ./src/components/helmet/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var Seo = function Seo(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? "" : _ref$title,
      _ref$meta = _ref.meta,
      meta = _ref$meta === void 0 ? "" : _ref$meta;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_0__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("title", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
    name: "description",
    content: meta
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

/***/ }),

/***/ "./src/components/main/index.js":
/*!**************************************!*\
  !*** ./src/components/main/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ "isomorphic-style-loader/withStyles");
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/components/main/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/*
 * @Author: Chendapeng
 * @Date: 2021-11-07 21:18:52
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-09-25 12:05:13
 * @Description: 路由里的nav组件
 */




var Main = function Main() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: (_index_css__WEBPACK_IMPORTED_MODULE_2___default().main)
  }, "This is My App");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1___default()((_index_css__WEBPACK_IMPORTED_MODULE_2___default()))(Main));

/***/ }),

/***/ "./src/components/nav/index.js":
/*!*************************************!*\
  !*** ./src/components/nav/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ "isomorphic-style-loader/withStyles");
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.less */ "./src/components/nav/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_3__);
/*
 * @Author: Chendapeng
 * @Date: 2021-11-07 21:18:52
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-09-25 12:52:36
 * @Description: 路由里的nav组件
 */





var Nav = function Nav() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (_index_less__WEBPACK_IMPORTED_MODULE_3___default().nav)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/"
  }, "\u9996\u9875"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/client"
  }, "client"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/home"
  }, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/test"
  }, "Test"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2___default()((_index_less__WEBPACK_IMPORTED_MODULE_3___default()))(Nav));

/***/ }),

/***/ "./src/container/Home/index.js":
/*!*************************************!*\
  !*** ./src/container/Home/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/action */ "./src/container/Home/store/action.js");
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ "isomorphic-style-loader/withStyles");
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.less */ "./src/container/Home/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/helmet */ "./src/components/helmet/index.js");
/*
 * @Author: Chendapeng
 * @Date: 2021-11-07 21:27:13
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-09-25 17:04:21
 * @Description: Home
 */







var Home = function Home(_ref) {
  var getHomeList = _ref.getHomeList,
      _ref$list = _ref.list,
      list = _ref$list === void 0 ? [] : _ref$list,
      staticContext = _ref.staticContext;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!list.length) {
      getHomeList();
    }
  }, [getHomeList]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_helmet__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "title this is Home",
    meta: "meta home"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (_index_less__WEBPACK_IMPORTED_MODULE_4___default().home)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, list.length && list.map(function (e) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: (_index_less__WEBPACK_IMPORTED_MODULE_4___default().title),
      key: e.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, e.title));
  }))));
}; // class HomeClass extends Component {
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


var mapStateToProps = function mapStateToProps(state) {
  return {
    list: state.home.newsList || []
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getHomeList: function getHomeList() {
      dispatch((0,_store_action__WEBPACK_IMPORTED_MODULE_2__.getHomeList)());
    }
  };
};

var exportHome = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_3___default()((_index_less__WEBPACK_IMPORTED_MODULE_4___default()))(Home));

exportHome.getInitProps = function (store) {
  return store.dispatch((0,_store_action__WEBPACK_IMPORTED_MODULE_2__.getHomeList)());
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (exportHome);

/***/ }),

/***/ "./src/container/Home/store/action.js":
/*!********************************************!*\
  !*** ./src/container/Home/store/action.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getHomeList": () => (/* binding */ getHomeList)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant */ "./src/container/Home/store/constant.js");
/*
 * @Author: Chendapeng
 * @Date: 2021-11-07 21:27:42
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-09-09 14:50:00
 * @Description: axios
 */



var changeList = function changeList(list) {
  return {
    type: _constant__WEBPACK_IMPORTED_MODULE_1__.CHANGE_LIST,
    list: list
  };
}; // 异步操作的action 采用thunk中间件处理异步


var getHomeList = function getHomeList() {
  return function (dispatch) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default().get("http://localhost:4002/api/album.json").then(function (res) {
      var list = res.data.data;
      dispatch(changeList(list));
    }).catch(function (e) {
      console.error(e, "请求发生错误");
    });
  };
};

/***/ }),

/***/ "./src/container/Home/store/constant.js":
/*!**********************************************!*\
  !*** ./src/container/Home/store/constant.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CHANGE_LIST": () => (/* binding */ CHANGE_LIST)
/* harmony export */ });
/*
 * @Author: Chendapeng
 * @Date: 2021-11-07 21:28:13
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-11-07 21:28:13
 * @Description: constant
 */
var CHANGE_LIST = 'HOME/CHANGE_LIST';

/***/ }),

/***/ "./src/container/Home/store/index.js":
/*!*******************************************!*\
  !*** ./src/container/Home/store/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducer": () => (/* reexport safe */ _reducer__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./src/container/Home/store/reducer.js");
/*
 * @Author: Chendapeng
 * @Date: 2021-11-07 21:41:34
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-11-07 21:57:56
 * @Description: 
 */



/***/ }),

/***/ "./src/container/Home/store/reducer.js":
/*!*********************************************!*\
  !*** ./src/container/Home/store/reducer.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "./src/container/Home/store/constant.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * @Author: Chendapeng
 * @Date: 2021-11-07 21:34:35
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-11-08 19:33:52
 * @Description: reducer
 */
//reducer.js

var defaultState = {
  name: 'cpp',
  list: []
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constant__WEBPACK_IMPORTED_MODULE_0__.CHANGE_LIST:
      var newState = _objectSpread(_objectSpread({}, state), {}, {
        newsList: action.list
      });

      return newState;

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/container/Test/index.js":
/*!*************************************!*\
  !*** ./src/container/Test/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/action */ "./src/container/Test/store/action.js");
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ "isomorphic-style-loader/withStyles");
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.less */ "./src/container/Test/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_4__);
/*
 * @Author: Chendapeng
 * @Date: 2021-11-07 20:55:41
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-09-25 17:16:37
 * @Description: 刷新页面
 */






var Test = function Test(_ref) {
  var getSoundJson = _ref.getSoundJson,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? [] : _ref$data;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!data.length) {
      getSoundJson();
    }
  }, [getSoundJson]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "this is Test Pages"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: (_index_less__WEBPACK_IMPORTED_MODULE_4___default().testName)
  }, data.map(function (e) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: e.id
    }, " ", e.title, " ");
  })));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    data: state.test.data
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getSoundJson: function getSoundJson() {
      dispatch((0,_store_action__WEBPACK_IMPORTED_MODULE_2__.getSoundJson)());
    }
  };
};

var TestComp = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_3___default()((_index_less__WEBPACK_IMPORTED_MODULE_4___default()))(Test));

TestComp.getInitProps = function (store) {
  return store.dispatch((0,_store_action__WEBPACK_IMPORTED_MODULE_2__.getSoundJson)());
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestComp);

/***/ }),

/***/ "./src/container/Test/store/action.js":
/*!********************************************!*\
  !*** ./src/container/Test/store/action.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSoundJson": () => (/* binding */ getSoundJson)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant */ "./src/container/Test/store/constant.js");



var changeList = function changeList(data) {
  return {
    type: _constant__WEBPACK_IMPORTED_MODULE_1__.GETTRACKJSON,
    data: data
  };
};

var getSoundJson = function getSoundJson() {
  return function (dispatch) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default().get("http://localhost:4002/api/track.json").then(function (res) {
      var data = res.data.data;
      dispatch(changeList(data));
    }).catch(function (e) {
      console.error(e, "请求发生错误");
    });
  };
};

/***/ }),

/***/ "./src/container/Test/store/constant.js":
/*!**********************************************!*\
  !*** ./src/container/Test/store/constant.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GETTRACKJSON": () => (/* binding */ GETTRACKJSON)
/* harmony export */ });
var GETTRACKJSON = "TEST/GETTRACKJSON";

/***/ }),

/***/ "./src/container/Test/store/index.js":
/*!*******************************************!*\
  !*** ./src/container/Test/store/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducer": () => (/* reexport safe */ _reducer__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./src/container/Test/store/reducer.js");



/***/ }),

/***/ "./src/container/Test/store/reducer.js":
/*!*********************************************!*\
  !*** ./src/container/Test/store/reducer.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "./src/container/Test/store/constant.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var defaultState = {
  name: "test",
  data: []
};

function Test() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constant__WEBPACK_IMPORTED_MODULE_0__.GETTRACKJSON:
      var newData = _objectSpread(_objectSpread({}, state), {}, {
        data: action.data
      });

      return newData;

    default:
      return state;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Test);

/***/ }),

/***/ "./src/route.js":
/*!**********************!*\
  !*** ./src/route.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _client_components_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client/components/shadow */ "./src/client/components/shadow.js");
/* harmony import */ var _client_components_404__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client/components/404 */ "./src/client/components/404.js");
/* harmony import */ var _container_Test__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./container/Test */ "./src/container/Test/index.js");
/* harmony import */ var _container_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container/Home */ "./src/container/Home/index.js");
/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/main */ "./src/components/main/index.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App */ "./src/App.js");
/*
 * @Author: Chendapeng
 * @Date: 2021-10-17 16:59:31
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-09-25 17:58:42
 * @Description: 公共路由
 */






var routes = [{
  path: "/",
  component: _components_main__WEBPACK_IMPORTED_MODULE_4__["default"],
  exact: true
}, {
  name: "client",
  path: "/client",
  component: _client_components_shadow__WEBPACK_IMPORTED_MODULE_0__["default"],
  exact: true
}, {
  name: "test",
  path: "/test",
  loadData: _container_Test__WEBPACK_IMPORTED_MODULE_2__["default"].getInitProps,
  component: _container_Test__WEBPACK_IMPORTED_MODULE_2__["default"],
  exact: true
}, {
  name: "home",
  path: "/home",
  loadData: _container_Home__WEBPACK_IMPORTED_MODULE_3__["default"].getInitProps,
  // 服务端获取异步数据的函数
  component: _container_Home__WEBPACK_IMPORTED_MODULE_3__["default"],
  exact: true
}, {
  path: "*",
  component: _client_components_404__WEBPACK_IMPORTED_MODULE_1__["default"]
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  component: _App__WEBPACK_IMPORTED_MODULE_5__["default"],
  routes: routes
}]);

/***/ }),

/***/ "./src/server/render.js":
/*!******************************!*\
  !*** ./src/server/render.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-style-loader/StyleContext */ "isomorphic-style-loader/StyleContext");
/* harmony import */ var isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-config */ "react-router-config");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_6__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*
 * @Author: Chendapeng
 * @Date: 2021-10-17 21:12:57
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-10-23 12:37:27
 * @Description: 构建服务端路由
 */







var render = function render(store, routes, req, context) {
  var css = new Set(); // CSS for all rendered React components

  var insertCss = function insertCss() {
    for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {
      styles[_key] = arguments[_key];
    }

    return styles.forEach(function (style) {
      return css.add(style._getCss());
    });
  };

  var content = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_0__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {
    store: store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement((isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_2___default().Provider), {
    value: {
      insertCss: insertCss
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.StaticRouter, {
    location: req.path,
    context: context
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", null, (0,react_router_config__WEBPACK_IMPORTED_MODULE_5__.renderRoutes)(routes)))))); //拿到helmet对象，然后在html字符串中引入

  var helmet = react_helmet__WEBPACK_IMPORTED_MODULE_6__.Helmet.renderStatic(); // const cssStr = context.css.length ? context.css.join("\n") : "";
  // console.log(cssStr`, "cssStrcssStr");

  var appHtml = "\n  <html>\n  <head>\n  <meta charset=\"utf-8\">\n  ".concat(helmet.title.toString(), "\n  ").concat(helmet.meta.toString(), "\n  <style>\n  ").concat(_toConsumableArray(css).join(""), "\n  </style>\n  </head>\n    <body>\n    <div id='app'>").concat(content, "</div>\n    <script>\n      window.context = {\n        state: ").concat(JSON.stringify(store.getState()), "\n      }\n    </script>\n    <script src='index.js'></script>\n    </body>\n  </html>\n");
  return appHtml;
};

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStore": () => (/* binding */ getStore),
/* harmony export */   "getClientStore": () => (/* binding */ getClientStore)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _container_Home_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../container/Home/store */ "./src/container/Home/store/index.js");
/* harmony import */ var _container_Test_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../container/Test/store */ "./src/container/Test/store/index.js");
/*
 * @Author: Chendapeng
 * @Date: 2021-10-17 21:22:39
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-10-20 10:01:55
 * @Description: Store
 */



 //合并项目组件中store的reducer

var reducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  home: _container_Home_store__WEBPACK_IMPORTED_MODULE_2__.reducer,
  test: _container_Test_store__WEBPACK_IMPORTED_MODULE_3__.reducer
}); //创建store，并引入中间件thunk进行异步操作的管理
// export default () => {
//   return createStore(reducer1, applyMiddleware(thunk));
// }
// 单例导出去后，所有的用户用的是同一份store
// export default createStore(HomeReducer, applyMiddleware(thunk))
// export const getStore = () => {
//   return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios)));
// }

var getStore = function getStore() {
  return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(reducer, (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_1___default())));
}; // 客户端脱水

var getClientStore = function getClientStore() {
  var defaultState = window.context ? window.context.state : {}; // return createStore(reducer, defaultState, applyMiddleware(thunk.withExtraArgument(clientAxios)));

  return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(reducer, defaultState, (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_1___default())));
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/less-loader/dist/cjs.js!./src/components/main/index.css":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/less-loader/dist/cjs.js!./src/components/main/index.css ***!
  \************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".index__main___kyFTz {\n  color: pink;\n  font-size: 20px;\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"main": "index__main___kyFTz"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/less-loader/dist/cjs.js!./src/components/nav/index.less":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/less-loader/dist/cjs.js!./src/components/nav/index.less ***!
  \************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".index__nav___OeRP1 {\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  flex-wrap: nowrap;\n}\n.index__nav___OeRP1 a {\n  border: 1px solid black;\n  padding: 10px;\n  margin: 0 10px;\n  text-decoration: none;\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"nav": "index__nav___OeRP1"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/less-loader/dist/cjs.js!./src/container/Home/index.less":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/less-loader/dist/cjs.js!./src/container/Home/index.less ***!
  \************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".index__home___HWRiq {\n  background-color: red;\n  font-size: 20px;\n}\n.index__title___UnhZS {\n  background-color: gray;\n}\n.index__title___UnhZS span {\n  color: yellow;\n  font-size: large;\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"home": "index__home___HWRiq",
	"title": "index__title___UnhZS"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/less-loader/dist/cjs.js!./src/container/Test/index.less":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/less-loader/dist/cjs.js!./src/container/Test/index.less ***!
  \************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".index__testName___RXy8c {\n  color: blue;\n  font-size: larger;\n}\n.index__testName___RXy8c li {\n  margin: 10px;\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"testName": "index__testName___RXy8c"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "./src/components/main/index.css":
/*!***************************************!*\
  !*** ./src/components/main/index.css ***!
  \***************************************/
/***/ ((module, exports, __webpack_require__) => {


    var refs = 0;
    var css = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/less-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/less-loader/dist/cjs.js!./src/components/main/index.css");
    var insertCss = __webpack_require__(/*! !../../../node_modules/isomorphic-style-loader/insertCss.js */ "./node_modules/isomorphic-style-loader/insertCss.js");
    var content = typeof css === 'string' ? [[module.id, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "./src/components/nav/index.less":
/*!***************************************!*\
  !*** ./src/components/nav/index.less ***!
  \***************************************/
/***/ ((module, exports, __webpack_require__) => {


    var refs = 0;
    var css = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/less-loader/dist/cjs.js!./index.less */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/less-loader/dist/cjs.js!./src/components/nav/index.less");
    var insertCss = __webpack_require__(/*! !../../../node_modules/isomorphic-style-loader/insertCss.js */ "./node_modules/isomorphic-style-loader/insertCss.js");
    var content = typeof css === 'string' ? [[module.id, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "./src/container/Home/index.less":
/*!***************************************!*\
  !*** ./src/container/Home/index.less ***!
  \***************************************/
/***/ ((module, exports, __webpack_require__) => {


    var refs = 0;
    var css = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/less-loader/dist/cjs.js!./index.less */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/less-loader/dist/cjs.js!./src/container/Home/index.less");
    var insertCss = __webpack_require__(/*! !../../../node_modules/isomorphic-style-loader/insertCss.js */ "./node_modules/isomorphic-style-loader/insertCss.js");
    var content = typeof css === 'string' ? [[module.id, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "./src/container/Test/index.less":
/*!***************************************!*\
  !*** ./src/container/Test/index.less ***!
  \***************************************/
/***/ ((module, exports, __webpack_require__) => {


    var refs = 0;
    var css = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/less-loader/dist/cjs.js!./index.less */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/less-loader/dist/cjs.js!./src/container/Test/index.less");
    var insertCss = __webpack_require__(/*! !../../../node_modules/isomorphic-style-loader/insertCss.js */ "./node_modules/isomorphic-style-loader/insertCss.js");
    var content = typeof css === 'string' ? [[module.id, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "./node_modules/isomorphic-style-loader/insertCss.js":
/*!***********************************************************!*\
  !*** ./node_modules/isomorphic-style-loader/insertCss.js ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */



var inserted = {};

function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode("0x" + p1);
  }));
}

function removeCss(ids) {
  ids.forEach(function (id) {
    if (--inserted[id] <= 0) {
      var elem = document.getElementById(id);

      if (elem) {
        elem.parentNode.removeChild(elem);
      }
    }
  });
}

function insertCss(styles, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$replace = _ref.replace,
      replace = _ref$replace === void 0 ? false : _ref$replace,
      _ref$prepend = _ref.prepend,
      prepend = _ref$prepend === void 0 ? false : _ref$prepend,
      _ref$prefix = _ref.prefix,
      prefix = _ref$prefix === void 0 ? 's' : _ref$prefix;

  var ids = [];

  for (var i = 0; i < styles.length; i++) {
    var _styles$i = styles[i],
        moduleId = _styles$i[0],
        css = _styles$i[1],
        media = _styles$i[2],
        sourceMap = _styles$i[3];
    var id = "" + prefix + moduleId + "-" + i;
    ids.push(id);

    if (inserted[id]) {
      if (!replace) {
        inserted[id]++;
        continue;
      }
    }

    inserted[id] = 1;
    var elem = document.getElementById(id);
    var create = false;

    if (!elem) {
      create = true;
      elem = document.createElement('style');
      elem.setAttribute('type', 'text/css');
      elem.id = id;

      if (media) {
        elem.setAttribute('media', media);
      }
    }

    var cssText = css;

    if (sourceMap && typeof btoa === 'function') {
      cssText += "\n/*# sourceMappingURL=data:application/json;base64," + b64EncodeUnicode(JSON.stringify(sourceMap)) + "*/";
      cssText += "\n/*# sourceURL=" + sourceMap.file + "?" + id + "*/";
    }

    if ('textContent' in elem) {
      elem.textContent = cssText;
    } else {
      elem.styleSheet.cssText = cssText;
    }

    if (create) {
      if (prepend) {
        document.head.insertBefore(elem, document.head.childNodes[0]);
      } else {
        document.head.appendChild(elem);
      }
    }
  }

  return removeCss.bind(null, ids);
}

module.exports = insertCss;
//# sourceMappingURL=insertCss.js.map


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "isomorphic-style-loader/StyleContext":
/*!*******************************************************!*\
  !*** external "isomorphic-style-loader/StyleContext" ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("isomorphic-style-loader/StyleContext");

/***/ }),

/***/ "isomorphic-style-loader/withStyles":
/*!*****************************************************!*\
  !*** external "isomorphic-style-loader/withStyles" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("isomorphic-style-loader/withStyles");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-helmet");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-config");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-thunk");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ "./src/server/render.js");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-config */ "react-router-config");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../route */ "./src/route.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ "./src/store/index.js");
/*
 * @Author: Chendapeng
 * @Date: 2021-09-12 19:50:27
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-10-23 12:37:51
 * @Description:
 */





var app = express__WEBPACK_IMPORTED_MODULE_0___default()(); // 访问静态文件

app.use(express__WEBPACK_IMPORTED_MODULE_0___default()["static"]("public"));
app.get("*", function (req, res) {
  var store = (0,_store__WEBPACK_IMPORTED_MODULE_4__.getStore)(); // 调用matchRoutes用来匹配当前路由(支持多级路由)
  // 根据路由的路径，来往store里面加数据

  var matchedRoutes = (0,react_router_config__WEBPACK_IMPORTED_MODULE_2__.matchRoutes)(_route__WEBPACK_IMPORTED_MODULE_3__["default"], req.path);
  var promises = [];
  matchedRoutes.forEach(function (item) {
    // 如果这个路由对应的组件有loadData方法
    if (item.route.loadData) {
      var promise = new Promise(function (resolve, reject) {
        // 根据路由的路径，来往store里面加数据
        item.route.loadData(store).then(resolve).catch(reject);
      });
      promises.push(promise);
    }
  });
  Promise.all(promises).then(function (data) {
    var context = {
      css: []
    };
    var html = (0,_render__WEBPACK_IMPORTED_MODULE_1__.render)(store, _route__WEBPACK_IMPORTED_MODULE_3__["default"], req, context);

    if (context.action === "REPLACE") {
      res.redirect(301, context.url);
    } else if (context.NotFound) {
      res.status(404);
      res.send(html);
    } else {
      res.send(html);
    }
  }).catch(function (e) {
    console.log("server occur error: ", e);
  });
});
var server = app.listen(3001, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("\u5E94\u7528\u5B9E\u4F8B\uFF0C\u8BBF\u95EE\u5730\u5740\u4E3A ".concat(host, ":").concat(port, "/"), host);
});
})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=bundle.js.map