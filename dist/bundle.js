/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/nav */ \"./src/components/nav/index.js\");\n/* harmony import */ var _components_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/helmet */ \"./src/components/helmet/index.js\");\n\n\n\n\n/**\n * 页面公用一个Nav组件\n * @param {*} props\n * @returns\n */\n\nvar App = function App(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_helmet__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    title: \"APP Home\",\n    meta: \"APP meta\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_nav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), (0,react_router_config__WEBPACK_IMPORTED_MODULE_1__.renderRoutes)(props.route.routes));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://webpack-react-learn/./src/App.js?");

/***/ }),

/***/ "./src/client/components/404.js":
/*!**************************************!*\
  !*** ./src/client/components/404.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/*\n * @Author: Chendapeng\n * @Date: 2021-10-17 22:53:52\n * @LastEditors: Chendapeng\n * @LastEditTime: 2021-11-07 21:05:19\n * @Description: 404\n */\n\n\nvar NotFound = function NotFound() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"this is 404 Page \\u53EA\\u6709\\u5339\\u914D\\u4E0D\\u5230\\u7684\\u65F6\\u5019\\u663E\\u793A\");\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFound);\n\n//# sourceURL=webpack://webpack-react-learn/./src/client/components/404.js?");

/***/ }),

/***/ "./src/client/components/shadow.js":
/*!*****************************************!*\
  !*** ./src/client/components/shadow.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/helmet */ \"./src/components/helmet/index.js\");\n/*\n * @Author: Chendapeng\n * @Date: 2021-09-12 18:28:57\n * @LastEditors: Chendapeng\n * @LastEditTime: 2022-09-25 14:58:07\n * @Description:\n */\n\n\n\nvar Shadow = function Shadow() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_helmet__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: \"client title this is Home\",\n    meta: \"client meta home\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", {\n    onClick: function onClick() {\n      return alert(111);\n    }\n  }, \"client\"), \"this is shadow \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), \"shadow component is public Component\"));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Shadow);\n\n//# sourceURL=webpack://webpack-react-learn/./src/client/components/shadow.js?");

/***/ }),

/***/ "./src/components/helmet/index.js":
/*!****************************************!*\
  !*** ./src/components/helmet/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar Seo = function Seo(_ref) {\n  var _ref$title = _ref.title,\n      title = _ref$title === void 0 ? \"\" : _ref$title,\n      _ref$meta = _ref.meta,\n      meta = _ref$meta === void 0 ? \"\" : _ref$meta;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_0__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"title\", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"meta\", {\n    name: \"description\",\n    content: meta\n  })));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);\n\n//# sourceURL=webpack://webpack-react-learn/./src/components/helmet/index.js?");

/***/ }),

/***/ "./src/components/main/index.js":
/*!**************************************!*\
  !*** ./src/components/main/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ \"isomorphic-style-loader/withStyles\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ \"./src/components/main/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);\n/*\n * @Author: Chendapeng\n * @Date: 2021-11-07 21:18:52\n * @LastEditors: Chendapeng\n * @LastEditTime: 2022-09-25 12:05:13\n * @Description: 路由里的nav组件\n */\n\n\n\n\nvar Main = function Main() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    className: (_index_css__WEBPACK_IMPORTED_MODULE_2___default().main)\n  }, \"This is My App\");\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1___default()((_index_css__WEBPACK_IMPORTED_MODULE_2___default()))(Main));\n\n//# sourceURL=webpack://webpack-react-learn/./src/components/main/index.js?");

/***/ }),

/***/ "./src/components/nav/index.js":
/*!*************************************!*\
  !*** ./src/components/nav/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ \"isomorphic-style-loader/withStyles\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.less */ \"./src/components/nav/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_3__);\n/*\n * @Author: Chendapeng\n * @Date: 2021-11-07 21:18:52\n * @LastEditors: Chendapeng\n * @LastEditTime: 2022-09-25 12:52:36\n * @Description: 路由里的nav组件\n */\n\n\n\n\n\nvar Nav = function Nav() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: (_index_less__WEBPACK_IMPORTED_MODULE_3___default().nav)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/\"\n  }, \"\\u9996\\u9875\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/client\"\n  }, \"client\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/home\"\n  }, \"Home\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/test\"\n  }, \"Test\"));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2___default()((_index_less__WEBPACK_IMPORTED_MODULE_3___default()))(Nav));\n\n//# sourceURL=webpack://webpack-react-learn/./src/components/nav/index.js?");

/***/ }),

/***/ "./src/container/Home/index.js":
/*!*************************************!*\
  !*** ./src/container/Home/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/action */ \"./src/container/Home/store/action.js\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ \"isomorphic-style-loader/withStyles\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.less */ \"./src/container/Home/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/helmet */ \"./src/components/helmet/index.js\");\n/*\n * @Author: Chendapeng\n * @Date: 2021-11-07 21:27:13\n * @LastEditors: Chendapeng\n * @LastEditTime: 2022-09-25 17:04:21\n * @Description: Home\n */\n\n\n\n\n\n\n\nvar Home = function Home(_ref) {\n  var getHomeList = _ref.getHomeList,\n      _ref$list = _ref.list,\n      list = _ref$list === void 0 ? [] : _ref$list,\n      staticContext = _ref.staticContext;\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (!list.length) {\n      getHomeList();\n    }\n  }, [getHomeList]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_helmet__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    title: \"title this is Home\",\n    meta: \"meta home\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: (_index_less__WEBPACK_IMPORTED_MODULE_4___default().home)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", null, list.length && list.map(function (e) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: (_index_less__WEBPACK_IMPORTED_MODULE_4___default().title),\n      key: e.id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, e.title));\n  }))));\n}; // class HomeClass extends Component {\n//   constructor(props) {\n//     super(props);\n//   }\n//   UNSAFE_componentWillMount() {\n//     // 服务端isomorphic-style-loader插件会给styles绑定_getCss()方法\n//     if (this.props.staticContext) {\n//       const str = styles._getCss();\n//       this.props.staticContext.css.push(str);\n//     }\n//   }\n//   componentDidMount() {\n//     if (!this.props.list.length) {\n//       this.props.getHomeList();\n//     }\n//   }\n//   render() {\n//     const { list = [] } = this.props;\n//     return (\n//       <div className={styles.home}>\n//         <ul>\n//           {list.length &&\n//             list.map((e) => (\n//               <div className={styles.title} key={e.id}>\n//                 {e.title}\n//               </div>\n//             ))}\n//         </ul>\n//       </div>\n//     );\n//   }\n// }\n\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    list: state.home.newsList || []\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    getHomeList: function getHomeList() {\n      dispatch((0,_store_action__WEBPACK_IMPORTED_MODULE_2__.getHomeList)());\n    }\n  };\n};\n\nvar exportHome = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_3___default()((_index_less__WEBPACK_IMPORTED_MODULE_4___default()))(Home));\n\nexportHome.getInitProps = function (store) {\n  return store.dispatch((0,_store_action__WEBPACK_IMPORTED_MODULE_2__.getHomeList)());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (exportHome);\n\n//# sourceURL=webpack://webpack-react-learn/./src/container/Home/index.js?");

/***/ }),

/***/ "./src/container/Home/store/action.js":
/*!********************************************!*\
  !*** ./src/container/Home/store/action.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getHomeList\": () => (/* binding */ getHomeList)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant */ \"./src/container/Home/store/constant.js\");\n/*\n * @Author: Chendapeng\n * @Date: 2021-11-07 21:27:42\n * @LastEditors: Chendapeng\n * @LastEditTime: 2022-09-09 14:50:00\n * @Description: axios\n */\n\n\n\nvar changeList = function changeList(list) {\n  return {\n    type: _constant__WEBPACK_IMPORTED_MODULE_1__.CHANGE_LIST,\n    list: list\n  };\n}; // 异步操作的action 采用thunk中间件处理异步\n\n\nvar getHomeList = function getHomeList() {\n  return function (dispatch) {\n    return axios__WEBPACK_IMPORTED_MODULE_0___default().get(\"http://localhost:4002/api/album.json\").then(function (res) {\n      var list = res.data.data;\n      dispatch(changeList(list));\n    }).catch(function (e) {\n      console.error(e, \"请求发生错误\");\n    });\n  };\n};\n\n//# sourceURL=webpack://webpack-react-learn/./src/container/Home/store/action.js?");

/***/ }),

/***/ "./src/container/Home/store/constant.js":
/*!**********************************************!*\
  !*** ./src/container/Home/store/constant.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CHANGE_LIST\": () => (/* binding */ CHANGE_LIST)\n/* harmony export */ });\n/*\n * @Author: Chendapeng\n * @Date: 2021-11-07 21:28:13\n * @LastEditors: Chendapeng\n * @LastEditTime: 2021-11-07 21:28:13\n * @Description: constant\n */\nvar CHANGE_LIST = 'HOME/CHANGE_LIST';\n\n//# sourceURL=webpack://webpack-react-learn/./src/container/Home/store/constant.js?");

/***/ }),

/***/ "./src/container/Home/store/index.js":
/*!*******************************************!*\
  !*** ./src/container/Home/store/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reducer\": () => (/* reexport safe */ _reducer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ \"./src/container/Home/store/reducer.js\");\n/*\n * @Author: Chendapeng\n * @Date: 2021-11-07 21:41:34\n * @LastEditors: Chendapeng\n * @LastEditTime: 2021-11-07 21:57:56\n * @Description: \n */\n\n\n\n//# sourceURL=webpack://webpack-react-learn/./src/container/Home/store/index.js?");

/***/ }),

/***/ "./src/container/Home/store/reducer.js":
/*!*********************************************!*\
  !*** ./src/container/Home/store/reducer.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ \"./src/container/Home/store/constant.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/*\n * @Author: Chendapeng\n * @Date: 2021-11-07 21:34:35\n * @LastEditors: Chendapeng\n * @LastEditTime: 2021-11-08 19:33:52\n * @Description: reducer\n */\n//reducer.js\n\nvar defaultState = {\n  name: 'cpp',\n  list: []\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _constant__WEBPACK_IMPORTED_MODULE_0__.CHANGE_LIST:\n      var newState = _objectSpread(_objectSpread({}, state), {}, {\n        newsList: action.list\n      });\n\n      return newState;\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack://webpack-react-learn/./src/container/Home/store/reducer.js?");

/***/ }),

/***/ "./src/container/Test/index.js":
/*!*************************************!*\
  !*** ./src/container/Test/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/action */ \"./src/container/Test/store/action.js\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ \"isomorphic-style-loader/withStyles\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.less */ \"./src/container/Test/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_4__);\n/*\n * @Author: Chendapeng\n * @Date: 2021-11-07 20:55:41\n * @LastEditors: Chendapeng\n * @LastEditTime: 2022-09-25 17:16:37\n * @Description: 刷新页面\n */\n\n\n\n\n\n\nvar Test = function Test(_ref) {\n  var getSoundJson = _ref.getSoundJson,\n      _ref$data = _ref.data,\n      data = _ref$data === void 0 ? [] : _ref$data;\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (!data.length) {\n      getSoundJson();\n    }\n  }, [getSoundJson]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"this is Test Pages\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n    className: (_index_less__WEBPACK_IMPORTED_MODULE_4___default().testName)\n  }, data.map(function (e) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n      key: e.id\n    }, \" \", e.title, \" \");\n  })));\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    data: state.test.data\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    getSoundJson: function getSoundJson() {\n      dispatch((0,_store_action__WEBPACK_IMPORTED_MODULE_2__.getSoundJson)());\n    }\n  };\n};\n\nvar TestComp = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_3___default()((_index_less__WEBPACK_IMPORTED_MODULE_4___default()))(Test));\n\nTestComp.getInitProps = function (store) {\n  return store.dispatch((0,_store_action__WEBPACK_IMPORTED_MODULE_2__.getSoundJson)());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestComp);\n\n//# sourceURL=webpack://webpack-react-learn/./src/container/Test/index.js?");

/***/ }),

/***/ "./src/container/Test/store/action.js":
/*!********************************************!*\
  !*** ./src/container/Test/store/action.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getSoundJson\": () => (/* binding */ getSoundJson)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant */ \"./src/container/Test/store/constant.js\");\n\n\n\nvar changeList = function changeList(data) {\n  return {\n    type: _constant__WEBPACK_IMPORTED_MODULE_1__.GETTRACKJSON,\n    data: data\n  };\n};\n\nvar getSoundJson = function getSoundJson() {\n  return function (dispatch) {\n    return axios__WEBPACK_IMPORTED_MODULE_0___default().get(\"http://localhost:4002/api/track.json\").then(function (res) {\n      var data = res.data.data;\n      dispatch(changeList(data));\n    }).catch(function (e) {\n      console.error(e, \"请求发生错误\");\n    });\n  };\n};\n\n//# sourceURL=webpack://webpack-react-learn/./src/container/Test/store/action.js?");

/***/ }),

/***/ "./src/container/Test/store/constant.js":
/*!**********************************************!*\
  !*** ./src/container/Test/store/constant.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GETTRACKJSON\": () => (/* binding */ GETTRACKJSON)\n/* harmony export */ });\nvar GETTRACKJSON = \"TEST/GETTRACKJSON\";\n\n//# sourceURL=webpack://webpack-react-learn/./src/container/Test/store/constant.js?");

/***/ }),

/***/ "./src/container/Test/store/index.js":
/*!*******************************************!*\
  !*** ./src/container/Test/store/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reducer\": () => (/* reexport safe */ _reducer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ \"./src/container/Test/store/reducer.js\");\n\n\n\n//# sourceURL=webpack://webpack-react-learn/./src/container/Test/store/index.js?");

/***/ }),

/***/ "./src/container/Test/store/reducer.js":
/*!*********************************************!*\
  !*** ./src/container/Test/store/reducer.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ \"./src/container/Test/store/constant.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar defaultState = {\n  name: \"test\",\n  data: []\n};\n\nfunction Test() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _constant__WEBPACK_IMPORTED_MODULE_0__.GETTRACKJSON:\n      var newData = _objectSpread(_objectSpread({}, state), {}, {\n        data: action.data\n      });\n\n      return newData;\n\n    default:\n      return state;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Test);\n\n//# sourceURL=webpack://webpack-react-learn/./src/container/Test/store/reducer.js?");

/***/ }),

/***/ "./src/route.js":
/*!**********************!*\
  !*** ./src/route.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"routes\": () => (/* binding */ routes),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _client_components_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client/components/shadow */ \"./src/client/components/shadow.js\");\n/* harmony import */ var _client_components_404__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client/components/404 */ \"./src/client/components/404.js\");\n/* harmony import */ var _container_Test__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./container/Test */ \"./src/container/Test/index.js\");\n/* harmony import */ var _container_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container/Home */ \"./src/container/Home/index.js\");\n/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/main */ \"./src/components/main/index.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n/*\n * @Author: Chendapeng\n * @Date: 2021-10-17 16:59:31\n * @LastEditors: Chendapeng\n * @LastEditTime: 2022-09-25 17:58:42\n * @Description: 公共路由\n */\n\n\n\n\n\n\nvar routes = [{\n  path: \"/\",\n  component: _components_main__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  exact: true\n}, {\n  name: \"client\",\n  path: \"/client\",\n  component: _client_components_shadow__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  exact: true\n}, {\n  name: \"test\",\n  path: \"/test\",\n  loadData: _container_Test__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getInitProps,\n  component: _container_Test__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  exact: true\n}, {\n  name: \"home\",\n  path: \"/home\",\n  loadData: _container_Home__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getInitProps,\n  // 服务端获取异步数据的函数\n  component: _container_Home__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  exact: true\n}, {\n  path: \"*\",\n  component: _client_components_404__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{\n  component: _App__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  routes: routes\n}]);\n\n//# sourceURL=webpack://webpack-react-learn/./src/route.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ \"./src/server/render.js\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../route */ \"./src/route.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ \"./src/store/index.js\");\n/*\n * @Author: Chendapeng\n * @Date: 2021-09-12 19:50:27\n * @LastEditors: Chendapeng\n * @LastEditTime: 2022-09-25 17:18:10\n * @Description:\n */\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()(); // 访问静态文件\n\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"](\"public\"));\napp.get(\"*\", function (req, res) {\n  var store = (0,_store__WEBPACK_IMPORTED_MODULE_4__.getStore)(); // 调用matchRoutes用来匹配当前路由(支持多级路由)\n  // 根据路由的路径，来往store里面加数据\n\n  var matchedRoutes = (0,react_router_config__WEBPACK_IMPORTED_MODULE_2__.matchRoutes)(_route__WEBPACK_IMPORTED_MODULE_3__[\"default\"], req.path);\n  var promises = [];\n  matchedRoutes.forEach(function (item) {\n    // 如果这个路由对应的组件有loadData方法\n    if (item.route.loadData) {\n      var promise = new Promise(function (resolve, reject) {\n        // 根据路由的路径，来往store里面加数据\n        item.route.loadData(store).then(resolve).catch(reject);\n      });\n      promises.push(promise);\n    }\n  });\n  Promise.all(promises).then(function (data) {\n    console.log(data, \"DATA\");\n    var context = {\n      css: []\n    };\n    var html = (0,_render__WEBPACK_IMPORTED_MODULE_1__.render)(store, _route__WEBPACK_IMPORTED_MODULE_3__[\"default\"], req, context);\n\n    if (context.action === \"REPLACE\") {\n      res.redirect(301, context.url);\n    } else if (context.NotFound) {\n      res.status(404);\n      res.send(html);\n    } else {\n      res.send(html);\n    }\n  }).catch(function (e) {\n    console.log(\"server occur error: \", e);\n  });\n});\nvar server = app.listen(3001, function () {\n  var host = server.address().address;\n  var port = server.address().port;\n  console.log(\"\\u5E94\\u7528\\u5B9E\\u4F8B\\uFF0C\\u8BBF\\u95EE\\u5730\\u5740\\u4E3A \".concat(host, \":\").concat(port, \"/\"), host);\n});\n\n//# sourceURL=webpack://webpack-react-learn/./src/server/index.js?");

/***/ }),

/***/ "./src/server/render.js":
/*!******************************!*\
  !*** ./src/server/render.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-style-loader/StyleContext */ \"isomorphic-style-loader/StyleContext\");\n/* harmony import */ var isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_6__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n/*\n * @Author: Chendapeng\n * @Date: 2021-10-17 21:12:57\n * @LastEditors: Chendapeng\n * @LastEditTime: 2022-09-25 17:31:40\n * @Description: 构建服务端路由\n */\n\n\n\n\n\n\n\nvar render = function render(store, routes, req, context) {\n  var css = new Set(); // CSS for all rendered React components\n\n  var insertCss = function insertCss() {\n    for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {\n      styles[_key] = arguments[_key];\n    }\n\n    return styles.forEach(function (style) {\n      return css.add(style._getCss());\n    });\n  };\n\n  var content = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_0__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {\n    store: store\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement((isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_2___default().Provider), {\n    value: {\n      insertCss: insertCss\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.StaticRouter, {\n    location: req.path,\n    context: context\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(\"div\", null, (0,react_router_config__WEBPACK_IMPORTED_MODULE_5__.renderRoutes)(routes)))))); //拿到helmet对象，然后在html字符串中引入\n\n  var helmet = react_helmet__WEBPACK_IMPORTED_MODULE_6__.Helmet.renderStatic(); // const cssStr = context.css.length ? context.css.join(\"\\n\") : \"\";\n  // console.log(cssStr, \"cssStrcssStr\");\n\n  return \"\\n    <html>\\n    <head>\\n    <meta charset=\\\"utf-8\\\">\\n    \".concat(helmet.title.toString(), \"\\n    \").concat(helmet.meta.toString(), \"\\n    <style>\\n    \").concat(_toConsumableArray(css).join(\"\"), \"\\n    </style>\\n    </head>\\n      <body>\\n      <div id='app'>\").concat(content, \"</div>\\n      <script>\\n        window.context = {\\n          state: \").concat(JSON.stringify(store.getState()), \"\\n        }\\n      </script>\\n      <script src='index.js'></script>\\n      </body>\\n    </html>\\n  \");\n};\n\n//# sourceURL=webpack://webpack-react-learn/./src/server/render.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStore\": () => (/* binding */ getStore),\n/* harmony export */   \"getClientStore\": () => (/* binding */ getClientStore)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _container_Home_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../container/Home/store */ \"./src/container/Home/store/index.js\");\n/* harmony import */ var _container_Test_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../container/Test/store */ \"./src/container/Test/store/index.js\");\n/*\n * @Author: Chendapeng\n * @Date: 2021-10-17 21:22:39\n * @LastEditors: Chendapeng\n * @LastEditTime: 2022-09-09 14:52:07\n * @Description: Store\n */\n\n\n\n //合并项目组件中store的reducer\n\nvar reducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n  home: _container_Home_store__WEBPACK_IMPORTED_MODULE_2__.reducer,\n  test: _container_Test_store__WEBPACK_IMPORTED_MODULE_3__.reducer\n}); //创建store，并引入中间件thunk进行异步操作的管理\n// export default () => {\n//   return createStore(reducer1, applyMiddleware(thunk));\n// }\n// 单例导出去后，所有的用户用的是同一份store\n// export default createStore(HomeReducer, applyMiddleware(thunk))\n// export const getStore = () => {\n//   return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios)));\n// }\n\nvar getStore = function getStore() {\n  return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(reducer, (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_1___default())));\n}; // 客户端脱水\n\nvar getClientStore = function getClientStore() {\n  var defaultState = window.context ? window.context.state : {}; // return createStore(reducer, defaultState, applyMiddleware(thunk.withExtraArgument(clientAxios)));\n\n  return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(reducer, defaultState, (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_1___default())));\n};\n\n//# sourceURL=webpack://webpack-react-learn/./src/store/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/less-loader/dist/cjs.js!./src/components/main/index.css":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/less-loader/dist/cjs.js!./src/components/main/index.css ***!
  \************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".index__main___kyFTz {\\n  color: pink;\\n  font-size: 20px;\\n}\\n\", \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"main\": \"index__main___kyFTz\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n\n\n//# sourceURL=webpack://webpack-react-learn/./src/components/main/index.css?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B1%5D!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/less-loader/dist/cjs.js!./src/components/nav/index.less":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/less-loader/dist/cjs.js!./src/components/nav/index.less ***!
  \************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".index__nav___OeRP1 {\\n  display: flex;\\n  justify-content: center;\\n  flex-direction: row;\\n  flex-wrap: nowrap;\\n}\\n.index__nav___OeRP1 a {\\n  border: 1px solid black;\\n  padding: 10px;\\n  margin: 0 10px;\\n  text-decoration: none;\\n}\\n\", \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"nav\": \"index__nav___OeRP1\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n\n\n//# sourceURL=webpack://webpack-react-learn/./src/components/nav/index.less?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B1%5D!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/less-loader/dist/cjs.js!./src/container/Home/index.less":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/less-loader/dist/cjs.js!./src/container/Home/index.less ***!
  \************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".index__home___HWRiq {\\n  background-color: red;\\n  font-size: 20px;\\n}\\n.index__title___UnhZS {\\n  background-color: gray;\\n}\\n.index__title___UnhZS span {\\n  color: yellow;\\n  font-size: large;\\n}\\n\", \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"home\": \"index__home___HWRiq\",\n\t\"title\": \"index__title___UnhZS\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n\n\n//# sourceURL=webpack://webpack-react-learn/./src/container/Home/index.less?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B1%5D!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/less-loader/dist/cjs.js!./src/container/Test/index.less":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/less-loader/dist/cjs.js!./src/container/Test/index.less ***!
  \************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".index__testName___RXy8c {\\n  color: blue;\\n  font-size: larger;\\n}\\n.index__testName___RXy8c li {\\n  margin: 10px;\\n}\\n\", \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"testName\": \"index__testName___RXy8c\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n\n\n//# sourceURL=webpack://webpack-react-learn/./src/container/Test/index.less?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B1%5D!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-react-learn/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-react-learn/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/components/main/index.css":
/*!***************************************!*\
  !*** ./src/components/main/index.css ***!
  \***************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/less-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/less-loader/dist/cjs.js!./src/components/main/index.css\");\n    var insertCss = __webpack_require__(/*! !../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.id, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack://webpack-react-learn/./src/components/main/index.css?");

/***/ }),

/***/ "./src/components/nav/index.less":
/*!***************************************!*\
  !*** ./src/components/nav/index.less ***!
  \***************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/less-loader/dist/cjs.js!./index.less */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/less-loader/dist/cjs.js!./src/components/nav/index.less\");\n    var insertCss = __webpack_require__(/*! !../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.id, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack://webpack-react-learn/./src/components/nav/index.less?");

/***/ }),

/***/ "./src/container/Home/index.less":
/*!***************************************!*\
  !*** ./src/container/Home/index.less ***!
  \***************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/less-loader/dist/cjs.js!./index.less */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/less-loader/dist/cjs.js!./src/container/Home/index.less\");\n    var insertCss = __webpack_require__(/*! !../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.id, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack://webpack-react-learn/./src/container/Home/index.less?");

/***/ }),

/***/ "./src/container/Test/index.less":
/*!***************************************!*\
  !*** ./src/container/Test/index.less ***!
  \***************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/less-loader/dist/cjs.js!./index.less */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/less-loader/dist/cjs.js!./src/container/Test/index.less\");\n    var insertCss = __webpack_require__(/*! !../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.id, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack://webpack-react-learn/./src/container/Test/index.less?");

/***/ }),

/***/ "./node_modules/isomorphic-style-loader/insertCss.js":
/*!***********************************************************!*\
  !*** ./node_modules/isomorphic-style-loader/insertCss.js ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
eval("/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */\n\n\n\nvar inserted = {};\n\nfunction b64EncodeUnicode(str) {\n  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {\n    return String.fromCharCode(\"0x\" + p1);\n  }));\n}\n\nfunction removeCss(ids) {\n  ids.forEach(function (id) {\n    if (--inserted[id] <= 0) {\n      var elem = document.getElementById(id);\n\n      if (elem) {\n        elem.parentNode.removeChild(elem);\n      }\n    }\n  });\n}\n\nfunction insertCss(styles, _temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$replace = _ref.replace,\n      replace = _ref$replace === void 0 ? false : _ref$replace,\n      _ref$prepend = _ref.prepend,\n      prepend = _ref$prepend === void 0 ? false : _ref$prepend,\n      _ref$prefix = _ref.prefix,\n      prefix = _ref$prefix === void 0 ? 's' : _ref$prefix;\n\n  var ids = [];\n\n  for (var i = 0; i < styles.length; i++) {\n    var _styles$i = styles[i],\n        moduleId = _styles$i[0],\n        css = _styles$i[1],\n        media = _styles$i[2],\n        sourceMap = _styles$i[3];\n    var id = \"\" + prefix + moduleId + \"-\" + i;\n    ids.push(id);\n\n    if (inserted[id]) {\n      if (!replace) {\n        inserted[id]++;\n        continue;\n      }\n    }\n\n    inserted[id] = 1;\n    var elem = document.getElementById(id);\n    var create = false;\n\n    if (!elem) {\n      create = true;\n      elem = document.createElement('style');\n      elem.setAttribute('type', 'text/css');\n      elem.id = id;\n\n      if (media) {\n        elem.setAttribute('media', media);\n      }\n    }\n\n    var cssText = css;\n\n    if (sourceMap && typeof btoa === 'function') {\n      cssText += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + b64EncodeUnicode(JSON.stringify(sourceMap)) + \"*/\";\n      cssText += \"\\n/*# sourceURL=\" + sourceMap.file + \"?\" + id + \"*/\";\n    }\n\n    if ('textContent' in elem) {\n      elem.textContent = cssText;\n    } else {\n      elem.styleSheet.cssText = cssText;\n    }\n\n    if (create) {\n      if (prepend) {\n        document.head.insertBefore(elem, document.head.childNodes[0]);\n      } else {\n        document.head.appendChild(elem);\n      }\n    }\n  }\n\n  return removeCss.bind(null, ids);\n}\n\nmodule.exports = insertCss;\n//# sourceMappingURL=insertCss.js.map\n\n\n//# sourceURL=webpack://webpack-react-learn/./node_modules/isomorphic-style-loader/insertCss.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/index.js");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;