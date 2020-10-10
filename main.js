/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/atoms/Button.tsx":
/*!*************************************!*\
  !*** ./components/atoms/Button.tsx ***!
  \*************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");


const Root = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button`
  width: 200px;
  padding: 13px 20px;
  border-radius: 5px;
  background: #48a1e6;
  outline: none;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;
const Button = ({
  children,
  type,
  onClick
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Root, {
  type: type,
  onClick: onClick
}, children);

/***/ }),

/***/ "./components/atoms/Container.tsx":
/*!****************************************!*\
  !*** ./components/atoms/Container.tsx ***!
  \****************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");


const Root = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: block;
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 20px;
`;
const Container = ({
  children
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Root, null, children);

/***/ }),

/***/ "./components/atoms/Header.tsx":
/*!*************************************!*\
  !*** ./components/atoms/Header.tsx ***!
  \*************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");


const Root = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1`
  margin: 10px 0;
  font-size: 32px;
  text-align: ${props => props.align};
`;

const Header = ({
  children,
  align = 'left'
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Root, {
  align: align
}, children);

Header.defaultProps = {
  align: 'left'
};


/***/ }),

/***/ "./components/atoms/Input.tsx":
/*!************************************!*\
  !*** ./components/atoms/Input.tsx ***!
  \************************************/
/*! exports provided: Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");


const Root = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input`
  width: 200px;
  padding: 10px 15px;
  outline: none;
  border: 1px solid silver;
  border-radius: 5px;
`;
const Input = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Root, props);

/***/ }),

/***/ "./components/atoms/QuantityCounter/assets/minus.svg":
/*!***********************************************************!*\
  !*** ./components/atoms/QuantityCounter/assets/minus.svg ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/60a133df4162e2fd167a28350c3efc2c.svg");

/***/ }),

/***/ "./components/atoms/QuantityCounter/assets/plus.svg":
/*!**********************************************************!*\
  !*** ./components/atoms/QuantityCounter/assets/plus.svg ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/941fce177b2f5950eab89ccb0c1062c2.svg");

/***/ }),

/***/ "./components/atoms/QuantityCounter/index.tsx":
/*!****************************************************!*\
  !*** ./components/atoms/QuantityCounter/index.tsx ***!
  \****************************************************/
/*! exports provided: QuantityCounter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuantityCounter", function() { return QuantityCounter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _assets_plus_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/plus.svg */ "./components/atoms/QuantityCounter/assets/plus.svg");
/* harmony import */ var _assets_minus_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/minus.svg */ "./components/atoms/QuantityCounter/assets/minus.svg");




const Root = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  height: 26px;
  overflow: hidden;
  border-radius: 5px;
`;
const Button = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button`
  cursor: pointer;
  align-items: center;
  justify-content: center;
  display: flex;
  border: none;
  flex-shrink: 0;
  outline: none;
  height: 100%;
  &:first-child {
    margin-right: 10px;
  }
  &:last-child {
    margin-left: 10px;
  }
  &:disabled {
    cursor: not-allowed;
  }
`;
const QuantityCounter = ({
  increment,
  decrement,
  quantity
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Root, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Button, {
  onClick: increment
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
  src: _assets_plus_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
  alt: "plus"
})), quantity, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Button, {
  disabled: quantity <= 1,
  onClick: decrement
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
  src: _assets_minus_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
  alt: "minus"
})));

/***/ }),

/***/ "./components/atoms/Spacer.tsx":
/*!*************************************!*\
  !*** ./components/atoms/Spacer.tsx ***!
  \*************************************/
/*! exports provided: Spacer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spacer", function() { return Spacer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");


const Root = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: block;
  ${({
  top
}) => top && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      padding-top: ${top}px;
    `}
  ${({
  left
}) => left && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      padding-left: ${left}px;
    `};
  ${({
  right
}) => right && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      padding-right: ${right}px;
    `};
  ${({
  bottom
}) => bottom && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      padding-bottom: ${bottom}px;
    `};
`;

const Spacer = ({
  children,
  top,
  left,
  bottom,
  right
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Root, {
  top: top,
  left: left,
  bottom: bottom,
  right: right
}, children);

Spacer.defaultProps = {
  top: '0',
  left: '0',
  right: '0',
  bottom: '0'
};


/***/ }),

/***/ "./components/layout/body.css":
/*!************************************!*\
  !*** ./components/layout/body.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/typography/font.css":
/*!****************************************!*\
  !*** ./components/typography/font.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./core/actions/cart.ts":
/*!******************************!*\
  !*** ./core/actions/cart.ts ***!
  \******************************/
/*! exports provided: setTotalPrice, addToCart, removeFromCart, incrementCartItem, decrementCartItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTotalPrice", function() { return setTotalPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCart", function() { return addToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFromCart", function() { return removeFromCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incrementCartItem", function() { return incrementCartItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrementCartItem", function() { return decrementCartItem; });
/* harmony import */ var _constants_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/cart */ "./core/constants/cart.ts");

const setTotalPrice = () => ({
  type: _constants_cart__WEBPACK_IMPORTED_MODULE_0__["SET_TOTAL_PRICE"]
});
const addToCart = res => ({
  type: _constants_cart__WEBPACK_IMPORTED_MODULE_0__["ADD_TO_CART"],
  payload: res
});
const removeFromCart = id => ({
  type: _constants_cart__WEBPACK_IMPORTED_MODULE_0__["REMOVE_FROM_CART"],
  payload: id
});
const incrementCartItem = id => ({
  type: _constants_cart__WEBPACK_IMPORTED_MODULE_0__["INCREMENT_CART_ITEM"],
  payload: id
});
const decrementCartItem = id => ({
  type: _constants_cart__WEBPACK_IMPORTED_MODULE_0__["DECREMENT_CART_ITEM"],
  payload: id
});

/***/ }),

/***/ "./core/actions/catalog.ts":
/*!*********************************!*\
  !*** ./core/actions/catalog.ts ***!
  \*********************************/
/*! exports provided: fetchCatalog, addToCatalog, fetchCatalogSuccess, thunkFetchCatalog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCatalog", function() { return fetchCatalog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCatalog", function() { return addToCatalog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCatalogSuccess", function() { return fetchCatalogSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thunkFetchCatalog", function() { return thunkFetchCatalog; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/catalog */ "./core/constants/catalog.ts");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error */ "./core/actions/error.ts");
/* eslint-disable no-console */



const fetchCatalog = () => ({
  type: _constants_catalog__WEBPACK_IMPORTED_MODULE_1__["FETCH_CATALOG"]
});
const addToCatalog = payload => ({
  type: _constants_catalog__WEBPACK_IMPORTED_MODULE_1__["ADD_TO_CATALOG"],
  payload
});
const fetchCatalogSuccess = res => ({
  type: _constants_catalog__WEBPACK_IMPORTED_MODULE_1__["FETCH_CATALOG_SUCCESS"],
  payload: res
});
const thunkFetchCatalog = () => dispatch => {
  dispatch(fetchCatalog());
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('https://run.mocky.io/v3/4756e740-90a0-4e80-9fe1-f916deef5ded').then(res => {
    dispatch(fetchCatalogSuccess(res.data));
  }).catch(error => {
    dispatch(Object(_error__WEBPACK_IMPORTED_MODULE_2__["setError"])(error.messages || 'something get wrong :('));
  });
};

/***/ }),

/***/ "./core/actions/error.ts":
/*!*******************************!*\
  !*** ./core/actions/error.ts ***!
  \*******************************/
/*! exports provided: setError, hideError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setError", function() { return setError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideError", function() { return hideError; });
/* harmony import */ var _constants_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/error */ "./core/constants/error.ts");

const setError = error => ({
  type: _constants_error__WEBPACK_IMPORTED_MODULE_0__["SET_ERROR"],
  error
});
const hideError = () => ({
  type: _constants_error__WEBPACK_IMPORTED_MODULE_0__["HIDE_ERROR"]
});

/***/ }),

/***/ "./core/constants/cart.ts":
/*!********************************!*\
  !*** ./core/constants/cart.ts ***!
  \********************************/
/*! exports provided: ADD_TO_CART, REMOVE_FROM_CART, INCREMENT_CART_ITEM, DECREMENT_CART_ITEM, SET_TOTAL_PRICE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_CART", function() { return ADD_TO_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FROM_CART", function() { return REMOVE_FROM_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCREMENT_CART_ITEM", function() { return INCREMENT_CART_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECREMENT_CART_ITEM", function() { return DECREMENT_CART_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TOTAL_PRICE", function() { return SET_TOTAL_PRICE; });
const ADD_TO_CART = '@CART/ADD';
const REMOVE_FROM_CART = '@CART/REMOVE';
const INCREMENT_CART_ITEM = '@CART/INCREMENT_ITEM';
const DECREMENT_CART_ITEM = '@CART/DECREMENT_ITEM';
const SET_TOTAL_PRICE = '@CART/SET_TOTAL_PRICE';

/***/ }),

/***/ "./core/constants/catalog.ts":
/*!***********************************!*\
  !*** ./core/constants/catalog.ts ***!
  \***********************************/
/*! exports provided: FETCH_CATALOG, FETCH_CATALOG_SUCCESS, ADD_TO_CATALOG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CATALOG", function() { return FETCH_CATALOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CATALOG_SUCCESS", function() { return FETCH_CATALOG_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_CATALOG", function() { return ADD_TO_CATALOG; });
const FETCH_CATALOG = '@CATALOG/FETCH';
const FETCH_CATALOG_SUCCESS = '@CATALOG/FETCH_CATALOG_SUCCESS';
const ADD_TO_CATALOG = '@CATALOG/ADD_TO_CATALOG';

/***/ }),

/***/ "./core/constants/error.ts":
/*!*********************************!*\
  !*** ./core/constants/error.ts ***!
  \*********************************/
/*! exports provided: SET_ERROR, HIDE_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ERROR", function() { return SET_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIDE_ERROR", function() { return HIDE_ERROR; });
const SET_ERROR = 'SET_ERROR';
const HIDE_ERROR = 'HIDE_ERROR';

/***/ }),

/***/ "./core/reducers/cart.ts":
/*!*******************************!*\
  !*** ./core/reducers/cart.ts ***!
  \*******************************/
/*! exports provided: defaultState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultState", function() { return defaultState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _constants_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/cart */ "./core/constants/cart.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const defaultState = {
  totalPrice: 0,
  items: []
};
function reducer(state = defaultState, action) {
  switch (action.type) {
    default:
      return state;

    case _constants_cart__WEBPACK_IMPORTED_MODULE_0__["SET_TOTAL_PRICE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        totalPrice: state.items.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
      });

    case _constants_cart__WEBPACK_IMPORTED_MODULE_0__["ADD_TO_CART"]:
      const newItems = [_objectSpread(_objectSpread({}, action.payload), {}, {
        quantity: 1
      }), ...state.items];
      return _objectSpread(_objectSpread({}, state), {}, {
        items: newItems,
        totalPrice: newItems.reduce((acc, cur) => acc + cur.price, 0)
      });

    case _constants_cart__WEBPACK_IMPORTED_MODULE_0__["REMOVE_FROM_CART"]:
      const items = state.items.filter(i => i.id !== action.payload);
      return _objectSpread(_objectSpread({}, state), {}, {
        items: items,
        totalPrice: items.reduce((acc, cur) => acc + cur.price, 0)
      });

    case _constants_cart__WEBPACK_IMPORTED_MODULE_0__["INCREMENT_CART_ITEM"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        items: state.items.map(item => {
          if (item.id === action.payload) {
            return _objectSpread({
              quantity: item.quantity++
            }, item);
          }

          return item;
        })
      });

    case _constants_cart__WEBPACK_IMPORTED_MODULE_0__["DECREMENT_CART_ITEM"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        items: state.items.map(item => {
          if (item.id === action.payload) {
            return _objectSpread({
              quantity: item.quantity--
            }, item);
          }

          return item;
        })
      });
  }
}

/***/ }),

/***/ "./core/reducers/catalog.ts":
/*!**********************************!*\
  !*** ./core/reducers/catalog.ts ***!
  \**********************************/
/*! exports provided: defaultState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultState", function() { return defaultState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _constants_catalog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/catalog */ "./core/constants/catalog.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const defaultState = {
  isFetched: false,
  items: []
};
function reducer(state = defaultState, action) {
  switch (action.type) {
    default:
      return state;

    case _constants_catalog__WEBPACK_IMPORTED_MODULE_0__["FETCH_CATALOG"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetched: true
      });

    case _constants_catalog__WEBPACK_IMPORTED_MODULE_0__["ADD_TO_CATALOG"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        items: [action.payload, ...state.items]
      });

    case _constants_catalog__WEBPACK_IMPORTED_MODULE_0__["FETCH_CATALOG_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        items: action.payload,
        isFetched: false
      });
  }
}

/***/ }),

/***/ "./core/reducers/error.ts":
/*!********************************!*\
  !*** ./core/reducers/error.ts ***!
  \********************************/
/*! exports provided: defaultState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultState", function() { return defaultState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _constants_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/error */ "./core/constants/error.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const defaultState = {
  error: null,
  isOpen: false
};
function reducer(state = defaultState, action) {
  switch (action.type) {
    default:
      return state;

    case _constants_error__WEBPACK_IMPORTED_MODULE_0__["HIDE_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: null,
        isOpen: false
      });

    case _constants_error__WEBPACK_IMPORTED_MODULE_0__["SET_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: action.error,
        isOpen: true
      });
  }
}

/***/ }),

/***/ "./core/reducers/index.ts":
/*!********************************!*\
  !*** ./core/reducers/index.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "../node_modules/redux/es/redux.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./core/reducers/catalog.ts");
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart */ "./core/reducers/cart.ts");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error */ "./core/reducers/error.ts");




const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  catalog: _catalog__WEBPACK_IMPORTED_MODULE_1__["reducer"],
  cart: _cart__WEBPACK_IMPORTED_MODULE_2__["reducer"],
  errorReducer: _error__WEBPACK_IMPORTED_MODULE_3__["reducer"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./core/store.ts":
/*!***********************!*\
  !*** ./core/store.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "../node_modules/redux/es/redux.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ "./core/reducers/index.ts");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "../node_modules/redux-thunk/es/index.js");



/* eslint-disable @typescript-eslint/no-explicit-any */

const composeEnhancers =  true && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : redux__WEBPACK_IMPORTED_MODULE_0__["compose"];
/* eslint-enable */

const enhancer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...[redux_thunk__WEBPACK_IMPORTED_MODULE_2__["default"]]);
const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_1__["default"], composeEnhancers(enhancer));
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./index.tsx":
/*!*******************!*\
  !*** ./index.tsx ***!
  \*******************/
/*! exports provided: Root */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Root", function() { return Root; });
/* harmony import */ var react_app_polyfill_ie11__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-app-polyfill/ie11 */ "../node_modules/react-app-polyfill/ie11.js");
/* harmony import */ var react_app_polyfill_ie11__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_app_polyfill_ie11__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_app_polyfill_stable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-app-polyfill/stable */ "../node_modules/react-app-polyfill/stable.js");
/* harmony import */ var react_app_polyfill_stable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_app_polyfill_stable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_es6_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/es6/map */ "../node_modules/core-js/es6/map.js");
/* harmony import */ var core_js_es6_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_es6_set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/es6/set */ "../node_modules/core-js/es6/set.js");
/* harmony import */ var core_js_es6_set__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_set__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/routes */ "./routes.tsx");
/* harmony import */ var _components_typography_font_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/typography/font.css */ "./components/typography/font.css");
/* harmony import */ var _components_typography_font_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_typography_font_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_layout_body_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/layout/body.css */ "./components/layout/body.css");
/* harmony import */ var _components_layout_body_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_layout_body_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _core_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/core/store */ "./core/store.ts");
/* harmony import */ var _modules_navigation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/navigation */ "./modules/navigation/index.tsx");
/* harmony import */ var _modules_error_notifications__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/error-notifications */ "./modules/error-notifications/index.tsx");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! normalize.css */ "../node_modules/normalize.css/normalize.css");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_14__);














 // HashRouter только потому, что это уходит на github pages

const Root = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](react__WEBPACK_IMPORTED_MODULE_4__["StrictMode"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](react_redux__WEBPACK_IMPORTED_MODULE_6__["Provider"], {
    store: _core_store__WEBPACK_IMPORTED_MODULE_11__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_7__["HashRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_modules_navigation__WEBPACK_IMPORTED_MODULE_12__["Navigation"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_modules_error_notifications__WEBPACK_IMPORTED_MODULE_13__["ErrorNotification"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_routes__WEBPACK_IMPORTED_MODULE_8__["Routes"], null))));
};
Object(react_dom__WEBPACK_IMPORTED_MODULE_5__["render"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](Root, null), document.getElementById('root'));

/***/ }),

/***/ "./modules/cart/index.tsx":
/*!********************************!*\
  !*** ./modules/cart/index.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_atoms_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/atoms/Container */ "./components/atoms/Container.tsx");
/* harmony import */ var _components_atoms_Spacer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/atoms/Spacer */ "./components/atoms/Spacer.tsx");
/* harmony import */ var _components_atoms_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/atoms/Header */ "./components/atoms/Header.tsx");
/* harmony import */ var _items__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./items */ "./modules/cart/items/index.tsx");








const Anchor = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"])`
  text-decoration: none;
  color: blue;
  &:hover {
    color: red;
  }
`;

const Cart = () => {
  const cart = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(store => store.cart);

  if (cart.items.length === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_atoms_Container__WEBPACK_IMPORTED_MODULE_4__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_atoms_Spacer__WEBPACK_IMPORTED_MODULE_5__["Spacer"], {
      top: "20",
      bottom: "10"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_atoms_Header__WEBPACK_IMPORTED_MODULE_6__["Header"], null, "Cart is empty :(")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Anchor, {
      to: "/catalog"
    }, "Go to catalog \u2192"));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_atoms_Container__WEBPACK_IMPORTED_MODULE_4__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_atoms_Spacer__WEBPACK_IMPORTED_MODULE_5__["Spacer"], {
    top: "20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_atoms_Header__WEBPACK_IMPORTED_MODULE_6__["Header"], {
    align: "center"
  }, "Your cart")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_atoms_Spacer__WEBPACK_IMPORTED_MODULE_5__["Spacer"], {
    top: "20",
    bottom: "20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_items__WEBPACK_IMPORTED_MODULE_7__["Items"], {
    items: cart.items
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_atoms_Spacer__WEBPACK_IMPORTED_MODULE_5__["Spacer"], {
    top: "20"
  }, "total price: ", cart.totalPrice));
};

/* harmony default export */ __webpack_exports__["default"] = (Cart);

/***/ }),

/***/ "./modules/cart/items/assets/trash.svg":
/*!*********************************************!*\
  !*** ./modules/cart/items/assets/trash.svg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/89761f963ce6e71bc317061ac0b72eee.svg");

/***/ }),

/***/ "./modules/cart/items/index.tsx":
/*!**************************************!*\
  !*** ./modules/cart/items/index.tsx ***!
  \**************************************/
/*! exports provided: Items */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Items", function() { return Items; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _core_actions_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/actions/cart */ "./core/actions/cart.ts");
/* harmony import */ var _components_atoms_QuantityCounter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/atoms/QuantityCounter */ "./components/atoms/QuantityCounter/index.tsx");
/* harmony import */ var _assets_trash_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/trash.svg */ "./modules/cart/items/assets/trash.svg");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styled */ "./modules/cart/items/styled.ts");






const Items = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["memo"](function Items({
  items
}) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const remove = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](id => {
    dispatch(Object(_core_actions_cart__WEBPACK_IMPORTED_MODULE_2__["removeFromCart"])(id));
    dispatch(Object(_core_actions_cart__WEBPACK_IMPORTED_MODULE_2__["setTotalPrice"])());
  }, []);
  const increment = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](id => {
    dispatch(Object(_core_actions_cart__WEBPACK_IMPORTED_MODULE_2__["incrementCartItem"])(id));
    dispatch(Object(_core_actions_cart__WEBPACK_IMPORTED_MODULE_2__["setTotalPrice"])());
  }, []);
  const decrement = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](id => {
    dispatch(Object(_core_actions_cart__WEBPACK_IMPORTED_MODULE_2__["decrementCartItem"])(id));
    dispatch(Object(_core_actions_cart__WEBPACK_IMPORTED_MODULE_2__["setTotalPrice"])());
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styled__WEBPACK_IMPORTED_MODULE_5__["Header"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styled__WEBPACK_IMPORTED_MODULE_5__["Column"], null, "title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styled__WEBPACK_IMPORTED_MODULE_5__["Column"], {
    right: true
  }, "price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styled__WEBPACK_IMPORTED_MODULE_5__["Column"], {
    right: true
  }, "quantity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styled__WEBPACK_IMPORTED_MODULE_5__["Column"], null)), items.map(product => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styled__WEBPACK_IMPORTED_MODULE_5__["Item"], {
    key: `${product.title}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styled__WEBPACK_IMPORTED_MODULE_5__["Column"], null, product.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styled__WEBPACK_IMPORTED_MODULE_5__["Column"], {
    right: true
  }, product.price, " / $"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styled__WEBPACK_IMPORTED_MODULE_5__["Column"], {
    right: true,
    quantity: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_atoms_QuantityCounter__WEBPACK_IMPORTED_MODULE_3__["QuantityCounter"], {
    increment: () => increment(product.id),
    decrement: () => decrement(product.id),
    quantity: product.quantity
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styled__WEBPACK_IMPORTED_MODULE_5__["Column"], {
    right: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styled__WEBPACK_IMPORTED_MODULE_5__["Trash"], {
    onClick: () => remove(product.id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    src: _assets_trash_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
    alt: "trash"
  }))))));
});

/***/ }),

/***/ "./modules/cart/items/styled.ts":
/*!**************************************!*\
  !*** ./modules/cart/items/styled.ts ***!
  \**************************************/
/*! exports provided: gridLayout, Header, Item, Column, Trash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridLayout", function() { return gridLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Column", function() { return Column; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trash", function() { return Trash; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _utils_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/styled */ "./utils/styled.ts");


const gridLayout = styled_components__WEBPACK_IMPORTED_MODULE_0__["css"]`
  display: flex;
  justify-content: space-between;
  .right {
    text-align: right;
  }
  ${_utils_styled__WEBPACK_IMPORTED_MODULE_1__["device"].mobile} {
    flex-wrap: wrap;
  }
`;
const Header = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  padding: 0 20px;
  margin-bottom: 20px;
  font-weight: bold;
  ${gridLayout}
  ${_utils_styled__WEBPACK_IMPORTED_MODULE_1__["device"].mobile} {
    display: none;
  }
`;
const Item = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #333333;
  margin-bottom: 20px;
  ${gridLayout}
  &::last-child {
    margin-bottom: 0;
    padding: 10px;
  }
`;
const Column = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  justify-content: ${({
  right
}) => right ? 'flex-end' : 'flex-start'};
  align-items: center;
  width: 30%;
  &:nth-child(4) {
    width: 50px;
  }
  ${_utils_styled__WEBPACK_IMPORTED_MODULE_1__["device"].mobile} {
    width: 50%;
    &:nth-child(3),
    &:nth-child(4) {
      padding-top: 10px;
    }
  }
  ${({
  quantity
}) => quantity && styled_components__WEBPACK_IMPORTED_MODULE_0__["css"]`
      ${_utils_styled__WEBPACK_IMPORTED_MODULE_1__["device"].mobile} {
        justify-content: flex-start;
      }
    `}
`;
const Trash = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  cursor: pointer;
`;

/***/ }),

/***/ "./modules/catalog/index.tsx":
/*!***********************************!*\
  !*** ./modules/catalog/index.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _core_actions_catalog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/actions/catalog */ "./core/actions/catalog.ts");
/* harmony import */ var _components_atoms_Spacer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/atoms/Spacer */ "./components/atoms/Spacer.tsx");
/* harmony import */ var _components_atoms_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/atoms/Header */ "./components/atoms/Header.tsx");
/* harmony import */ var _components_atoms_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/atoms/Button */ "./components/atoms/Button.tsx");
/* harmony import */ var _components_atoms_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/atoms/Container */ "./components/atoms/Container.tsx");
/* harmony import */ var _items__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./items */ "./modules/catalog/items/index.tsx");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modal */ "./modules/catalog/modal/index.tsx");









const Catalog = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["memo"](function Catalog() {
  const [isOpen, open] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    items
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(store => store.catalog);
  const isEmptyCatalog = items.length === 0;
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    if (isEmptyCatalog) {
      dispatch(Object(_core_actions_catalog__WEBPACK_IMPORTED_MODULE_2__["thunkFetchCatalog"])());
    }
  }, []);

  if (isEmptyCatalog) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_atoms_Container__WEBPACK_IMPORTED_MODULE_6__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_atoms_Spacer__WEBPACK_IMPORTED_MODULE_3__["Spacer"], {
    top: "20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_atoms_Header__WEBPACK_IMPORTED_MODULE_4__["Header"], {
    align: "center"
  }, "Stock of the companies")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_atoms_Spacer__WEBPACK_IMPORTED_MODULE_3__["Spacer"], {
    top: "20",
    bottom: "20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_items__WEBPACK_IMPORTED_MODULE_7__["Items"], {
    items: items
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_atoms_Button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    onClick: () => open(true)
  }, "add stock"), isOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_modal__WEBPACK_IMPORTED_MODULE_8__["Modal"], {
    closeModal: () => open(false)
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (Catalog);

/***/ }),

/***/ "./modules/catalog/items/index.tsx":
/*!*****************************************!*\
  !*** ./modules/catalog/items/index.tsx ***!
  \*****************************************/
/*! exports provided: Items */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Items", function() { return Items; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _core_actions_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/actions/cart */ "./core/actions/cart.ts");
/* harmony import */ var _components_atoms_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/atoms/Button */ "./components/atoms/Button.tsx");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styled */ "./modules/catalog/items/styled.ts");





const Items = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["memo"](function Items({
  items
}) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const cartItems = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(store => store.cart.items);
  const add = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](product => {
    dispatch(Object(_core_actions_cart__WEBPACK_IMPORTED_MODULE_2__["addToCart"])(product));
    dispatch(Object(_core_actions_cart__WEBPACK_IMPORTED_MODULE_2__["setTotalPrice"])());
  }, []);
  if (items.length === 0) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styled__WEBPACK_IMPORTED_MODULE_4__["Header"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styled__WEBPACK_IMPORTED_MODULE_4__["Column"], null, "title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styled__WEBPACK_IMPORTED_MODULE_4__["Column"], {
    right: true
  }, "price")), items.map(product => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styled__WEBPACK_IMPORTED_MODULE_4__["Item"], {
    key: `${product.title}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styled__WEBPACK_IMPORTED_MODULE_4__["Column"], null, product.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styled__WEBPACK_IMPORTED_MODULE_4__["Column"], {
    right: true
  }, product.price, " / $"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styled__WEBPACK_IMPORTED_MODULE_4__["Column"], {
    buttonCont: true,
    right: true
  }, cartItems.find(i => i.id === product.id) ? 'Added' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_atoms_Button__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: () => add(product)
  }, "Add to Cart")))));
});

/***/ }),

/***/ "./modules/catalog/items/styled.ts":
/*!*****************************************!*\
  !*** ./modules/catalog/items/styled.ts ***!
  \*****************************************/
/*! exports provided: gridLayout, Header, Item, Column */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridLayout", function() { return gridLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Column", function() { return Column; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _utils_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/styled */ "./utils/styled.ts");


const gridLayout = styled_components__WEBPACK_IMPORTED_MODULE_0__["css"]`
  display: flex;
  align-items: center;
  .right {
    text-align: right;
  }
  ${_utils_styled__WEBPACK_IMPORTED_MODULE_1__["device"].mobile} {
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;
const Header = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  padding: 0 20px;
  margin-bottom: 20px;
  font-weight: bold;
  ${gridLayout}
  ${_utils_styled__WEBPACK_IMPORTED_MODULE_1__["device"].mobile} {
    padding: 0 10px;
  }
`;
const Item = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #333333;
  margin-bottom: 20px;
  ${gridLayout}
  &::last-child {
    margin-bottom: 0;
  }
  ${_utils_styled__WEBPACK_IMPORTED_MODULE_1__["device"].mobile} {
    padding: 10px;
  }
`;
const Column = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  width: 33%;
  display: flex;
  justify-content: ${({
  right
}) => right ? 'flex-end' : 'flex-start'};
  align-items: center;
  ${({
  buttonCont
}) => buttonCont && styled_components__WEBPACK_IMPORTED_MODULE_0__["css"]`
      ${_utils_styled__WEBPACK_IMPORTED_MODULE_1__["device"].mobile} {
        width: 100%;
        justify-content: center;
        padding-top: 10px;
      }
    `}
`;

/***/ }),

/***/ "./modules/catalog/modal/data.ts":
/*!***************************************!*\
  !*** ./modules/catalog/modal/data.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  name: 'title',
  type: 'text'
}, {
  name: 'price',
  type: 'number'
}]);

/***/ }),

/***/ "./modules/catalog/modal/helpers.ts":
/*!******************************************!*\
  !*** ./modules/catalog/modal/helpers.ts ***!
  \******************************************/
/*! exports provided: vaildate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vaildate", function() { return vaildate; });
const vaildate = values => {
  const errors = {};

  if (!values.title) {
    errors.title = 'Title is required';
  } else if (values.title.length > 30) {
    errors.title = 'Max 30 symbols';
  }

  if (!values.price) {
    errors.price = 'Price is required';
  } else if (parseInt(values.price) <= 0) {
    errors.price = 'Price must be greater than 0';
  }

  return errors;
};

/***/ }),

/***/ "./modules/catalog/modal/index.tsx":
/*!*****************************************!*\
  !*** ./modules/catalog/modal/index.tsx ***!
  \*****************************************/
/*! exports provided: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-final-form */ "../node_modules/react-final-form/dist/react-final-form.es.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _components_atoms_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/atoms/Button */ "./components/atoms/Button.tsx");
/* harmony import */ var _components_atoms_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/atoms/Input */ "./components/atoms/Input.tsx");
/* harmony import */ var _components_atoms_Spacer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/atoms/Spacer */ "./components/atoms/Spacer.tsx");
/* harmony import */ var _core_actions_catalog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/core/actions/catalog */ "./core/actions/catalog.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data */ "./modules/catalog/modal/data.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers */ "./modules/catalog/modal/helpers.ts");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styled */ "./modules/catalog/modal/styled.ts");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const Modal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["memo"](function Modal({
  closeModal
}) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const onSubmit = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](values => {
    dispatch(Object(_core_actions_catalog__WEBPACK_IMPORTED_MODULE_6__["addToCatalog"])(_objectSpread(_objectSpread({}, values), {}, {
      price: parseInt(values.price),
      id: Date.now()
    })));
    closeModal();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styled__WEBPACK_IMPORTED_MODULE_9__["Root"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_final_form__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onSubmit: onSubmit,
    validate: _helpers__WEBPACK_IMPORTED_MODULE_8__["vaildate"],
    render: ({
      handleSubmit,
      pristine,
      submitting,
      invalid,
      form
    }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", {
      onSubmit: handleSubmit,
      className: "form"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styled__WEBPACK_IMPORTED_MODULE_9__["CloseModal"], {
      onClick: () => {
        form.reset();
        closeModal();
      }
    }, "\u2716"), _data__WEBPACK_IMPORTED_MODULE_7__["default"].map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_final_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
      key: `field_${item.name}`,
      name: item.name,
      type: item.type
    }, ({
      input,
      meta
    }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_atoms_Spacer__WEBPACK_IMPORTED_MODULE_5__["Spacer"], {
      bottom: "20"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_atoms_Input__WEBPACK_IMPORTED_MODULE_4__["Input"], _extends({}, input, {
      type: item.type,
      placeholder: item.name
    })), meta.error && meta.touched && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styled__WEBPACK_IMPORTED_MODULE_9__["Error"], null, meta.error)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_atoms_Button__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      type: "submit",
      disabled: submitting || pristine || invalid
    }, "Submit"))
  }));
});

/***/ }),

/***/ "./modules/catalog/modal/styled.ts":
/*!*****************************************!*\
  !*** ./modules/catalog/modal/styled.ts ***!
  \*****************************************/
/*! exports provided: Root, CloseModal, Error */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Root", function() { return Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseModal", function() { return CloseModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error", function() { return Error; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");

const Root = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #dededecf;
  .form {
    background: white;
    border-radius: 5px;
    padding: 30px 50px;
    position: relative;
    text-align: center;
  }
`;
const CloseModal = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 20px;
  color: #48a1e6;
  cursor: pointer;
`;
const Error = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  color: red;
  padding-top: 5px;
  font-size: 12px;
  text-align: left;
`;

/***/ }),

/***/ "./modules/error-notifications/index.tsx":
/*!***********************************************!*\
  !*** ./modules/error-notifications/index.tsx ***!
  \***********************************************/
/*! exports provided: ErrorNotification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorNotification", function() { return ErrorNotification; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _core_actions_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/actions/error */ "./core/actions/error.ts");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ "./modules/error-notifications/styled.ts");
/* harmony import */ var _components_atoms_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/atoms/Button */ "./components/atoms/Button.tsx");
/* harmony import */ var _components_atoms_Spacer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/atoms/Spacer */ "./components/atoms/Spacer.tsx");






const ErrorNotification = () => {
  const isOpen = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.errorReducer.isOpen);
  const error = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.errorReducer.error);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  const handleClose = () => {
    dispatch(Object(_core_actions_error__WEBPACK_IMPORTED_MODULE_2__["hideError"])());
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, isOpen && error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["Root"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_atoms_Spacer__WEBPACK_IMPORTED_MODULE_5__["Spacer"], {
    right: "20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["Text"], null, error)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_atoms_Button__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    onClick: handleClose
  }, "close error")));
};

/***/ }),

/***/ "./modules/error-notifications/styled.ts":
/*!***********************************************!*\
  !*** ./modules/error-notifications/styled.ts ***!
  \***********************************************/
/*! exports provided: Root, Text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Root", function() { return Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");

const Root = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: firebrick;
  padding: 20px;
`;
const Text = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  color: white;
`;

/***/ }),

/***/ "./modules/main/index.tsx":
/*!********************************!*\
  !*** ./modules/main/index.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_atoms_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/atoms/Container */ "./components/atoms/Container.tsx");
/* harmony import */ var _components_atoms_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/atoms/Header */ "./components/atoms/Header.tsx");
/* harmony import */ var _components_atoms_Spacer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/atoms/Spacer */ "./components/atoms/Spacer.tsx");





const Main = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_atoms_Container__WEBPACK_IMPORTED_MODULE_1__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_atoms_Spacer__WEBPACK_IMPORTED_MODULE_3__["Spacer"], {
    top: "20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_atoms_Header__WEBPACK_IMPORTED_MODULE_2__["Header"], {
    align: "center"
  }, "Main page")));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./modules/navigation/data.ts":
/*!************************************!*\
  !*** ./modules/navigation/data.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  to: '/',
  name: 'Home'
}, {
  to: '/catalog',
  name: 'Catalog'
}, {
  to: '/cart',
  name: 'Cart'
}]);

/***/ }),

/***/ "./modules/navigation/index.tsx":
/*!**************************************!*\
  !*** ./modules/navigation/index.tsx ***!
  \**************************************/
/*! exports provided: Navigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigation", function() { return Navigation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_atoms_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/atoms/Container */ "./components/atoms/Container.tsx");
/* harmony import */ var _components_atoms_Spacer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/atoms/Spacer */ "./components/atoms/Spacer.tsx");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data */ "./modules/navigation/data.ts");






const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  background: crimson;
`;
const Root = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"])`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
const Navigation = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["memo"](function Navigation() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_atoms_Container__WEBPACK_IMPORTED_MODULE_3__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_atoms_Spacer__WEBPACK_IMPORTED_MODULE_4__["Spacer"], {
    top: "10",
    bottom: "10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Root, null, _data__WEBPACK_IMPORTED_MODULE_5__["default"].map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](StyledLink, {
    key: `nav_${item.name}`,
    to: item.to
  }, item.name))))));
});

/***/ }),

/***/ "./modules/not-found/index.tsx":
/*!*************************************!*\
  !*** ./modules/not-found/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_atoms_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/atoms/Container */ "./components/atoms/Container.tsx");
/* harmony import */ var _components_atoms_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/atoms/Header */ "./components/atoms/Header.tsx");
/* harmony import */ var _components_atoms_Spacer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/atoms/Spacer */ "./components/atoms/Spacer.tsx");






const Anchor = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"])`
  text-decoration: none;
  color: blue;
  &:hover {
    color: red;
  }
`;

const NotFound = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_atoms_Container__WEBPACK_IMPORTED_MODULE_3__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_atoms_Spacer__WEBPACK_IMPORTED_MODULE_5__["Spacer"], {
    top: "20",
    bottom: "10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_atoms_Header__WEBPACK_IMPORTED_MODULE_4__["Header"], null, "Page not found")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Anchor, {
    to: "/"
  }, "Go to home \u2192"));
};

/* harmony default export */ __webpack_exports__["default"] = (NotFound);

/***/ }),

/***/ "./routes-map.ts":
/*!***********************!*\
  !*** ./routes-map.ts ***!
  \***********************/
/*! exports provided: INDEX_ROUTE, CATALOG_ROUTE, CART_ROUTE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INDEX_ROUTE", function() { return INDEX_ROUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATALOG_ROUTE", function() { return CATALOG_ROUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CART_ROUTE", function() { return CART_ROUTE; });
const INDEX_ROUTE = '/';
const CATALOG_ROUTE = '/catalog';
const CART_ROUTE = '/cart';

/***/ }),

/***/ "./routes.tsx":
/*!********************!*\
  !*** ./routes.tsx ***!
  \********************/
/*! exports provided: Routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routes", function() { return Routes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "../node_modules/react-router/esm/react-router.js");
/* harmony import */ var _routes_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes-map */ "./routes-map.ts");
/* harmony import */ var _modules_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/modules/main */ "./modules/main/index.tsx");
/* harmony import */ var _modules_catalog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/modules/catalog */ "./modules/catalog/index.tsx");
/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/modules/cart */ "./modules/cart/index.tsx");
/* harmony import */ var _modules_not_found__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/modules/not-found */ "./modules/not-found/index.tsx");







const Routes = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
  fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, "Load...")
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  path: _routes_map__WEBPACK_IMPORTED_MODULE_2__["INDEX_ROUTE"],
  exact: true,
  component: _modules_main__WEBPACK_IMPORTED_MODULE_3__["default"]
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  path: _routes_map__WEBPACK_IMPORTED_MODULE_2__["CATALOG_ROUTE"],
  exact: true,
  component: _modules_catalog__WEBPACK_IMPORTED_MODULE_4__["default"]
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  path: _routes_map__WEBPACK_IMPORTED_MODULE_2__["CART_ROUTE"],
  exact: true,
  component: _modules_cart__WEBPACK_IMPORTED_MODULE_5__["default"]
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  component: _modules_not_found__WEBPACK_IMPORTED_MODULE_6__["default"]
})));

/***/ }),

/***/ "./utils/styled.ts":
/*!*************************!*\
  !*** ./utils/styled.ts ***!
  \*************************/
/*! exports provided: device */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "device", function() { return device; });
const size = {
  mobileS: '374px',
  mobile: '767px',
  tablet: '1023px'
};
const device = {
  mobileS: `@media (max-width: ${size.mobileS})`,
  mobile: `@media (max-width: ${size.mobile})`,
  tablet: `@media (max-width: ${size.tablet})`
};

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi @babel/polyfill ./index.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"../node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! /Users/jimmy/Projects/optimax/src/index.tsx */"./index.tsx");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hdG9tcy9CdXR0b24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYXRvbXMvQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F0b21zL0hlYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hdG9tcy9JbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hdG9tcy9RdWFudGl0eUNvdW50ZXIvYXNzZXRzL21pbnVzLnN2ZyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F0b21zL1F1YW50aXR5Q291bnRlci9hc3NldHMvcGx1cy5zdmciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hdG9tcy9RdWFudGl0eUNvdW50ZXIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYXRvbXMvU3BhY2VyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9ib2R5LmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3R5cG9ncmFwaHkvZm9udC5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29yZS9hY3Rpb25zL2NhcnQudHMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9hY3Rpb25zL2NhdGFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9hY3Rpb25zL2Vycm9yLnRzIiwid2VicGFjazovLy8uL2NvcmUvY29uc3RhbnRzL2NhcnQudHMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9jb25zdGFudHMvY2F0YWxvZy50cyIsIndlYnBhY2s6Ly8vLi9jb3JlL2NvbnN0YW50cy9lcnJvci50cyIsIndlYnBhY2s6Ly8vLi9jb3JlL3JlZHVjZXJzL2NhcnQudHMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9yZWR1Y2Vycy9jYXRhbG9nLnRzIiwid2VicGFjazovLy8uL2NvcmUvcmVkdWNlcnMvZXJyb3IudHMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9yZWR1Y2Vycy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb3JlL3N0b3JlLnRzIiwid2VicGFjazovLy8uL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NhcnQvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL21vZHVsZXMvY2FydC9pdGVtcy9hc3NldHMvdHJhc2guc3ZnIiwid2VicGFjazovLy8uL21vZHVsZXMvY2FydC9pdGVtcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jYXJ0L2l0ZW1zL3N0eWxlZC50cyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NhdGFsb2cvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL21vZHVsZXMvY2F0YWxvZy9pdGVtcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jYXRhbG9nL2l0ZW1zL3N0eWxlZC50cyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NhdGFsb2cvbW9kYWwvZGF0YS50cyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NhdGFsb2cvbW9kYWwvaGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NhdGFsb2cvbW9kYWwvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL21vZHVsZXMvY2F0YWxvZy9tb2RhbC9zdHlsZWQudHMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9lcnJvci1ub3RpZmljYXRpb25zL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Vycm9yLW5vdGlmaWNhdGlvbnMvc3R5bGVkLnRzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWFpbi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9uYXZpZ2F0aW9uL2RhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9uYXZpZ2F0aW9uL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25vdC1mb3VuZC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vcm91dGVzLW1hcC50cyIsIndlYnBhY2s6Ly8vLi9yb3V0ZXMudHN4Iiwid2VicGFjazovLy8uL3V0aWxzL3N0eWxlZC50cyJdLCJuYW1lcyI6WyJSb290Iiwic3R5bGVkIiwiYnV0dG9uIiwiQnV0dG9uIiwiY2hpbGRyZW4iLCJ0eXBlIiwib25DbGljayIsImRpdiIsIkNvbnRhaW5lciIsImgxIiwicHJvcHMiLCJhbGlnbiIsIkhlYWRlciIsImRlZmF1bHRQcm9wcyIsImlucHV0IiwiSW5wdXQiLCJRdWFudGl0eUNvdW50ZXIiLCJpbmNyZW1lbnQiLCJkZWNyZW1lbnQiLCJxdWFudGl0eSIsInBsdXMiLCJtaW51cyIsInRvcCIsImNzcyIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsIlNwYWNlciIsInNldFRvdGFsUHJpY2UiLCJTRVRfVE9UQUxfUFJJQ0UiLCJhZGRUb0NhcnQiLCJyZXMiLCJBRERfVE9fQ0FSVCIsInBheWxvYWQiLCJyZW1vdmVGcm9tQ2FydCIsImlkIiwiUkVNT1ZFX0ZST01fQ0FSVCIsImluY3JlbWVudENhcnRJdGVtIiwiSU5DUkVNRU5UX0NBUlRfSVRFTSIsImRlY3JlbWVudENhcnRJdGVtIiwiREVDUkVNRU5UX0NBUlRfSVRFTSIsImZldGNoQ2F0YWxvZyIsIkZFVENIX0NBVEFMT0ciLCJhZGRUb0NhdGFsb2ciLCJBRERfVE9fQ0FUQUxPRyIsImZldGNoQ2F0YWxvZ1N1Y2Nlc3MiLCJGRVRDSF9DQVRBTE9HX1NVQ0NFU1MiLCJ0aHVua0ZldGNoQ2F0YWxvZyIsImRpc3BhdGNoIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJzZXRFcnJvciIsIm1lc3NhZ2VzIiwiU0VUX0VSUk9SIiwiaGlkZUVycm9yIiwiSElERV9FUlJPUiIsImRlZmF1bHRTdGF0ZSIsInRvdGFsUHJpY2UiLCJpdGVtcyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInJlZHVjZSIsImFjYyIsImN1ciIsInByaWNlIiwibmV3SXRlbXMiLCJmaWx0ZXIiLCJpIiwibWFwIiwiaXRlbSIsImlzRmV0Y2hlZCIsImlzT3BlbiIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiY2F0YWxvZyIsImNhcnQiLCJlcnJvclJlZHVjZXIiLCJjb21wb3NlRW5oYW5jZXJzIiwicHJvY2VzcyIsIndpbmRvdyIsIl9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyIsImNvbXBvc2UiLCJlbmhhbmNlciIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJBbmNob3IiLCJMaW5rIiwiQ2FydCIsInVzZVNlbGVjdG9yIiwibGVuZ3RoIiwiSXRlbXMiLCJSZWFjdCIsInVzZURpc3BhdGNoIiwicmVtb3ZlIiwicHJvZHVjdCIsInRpdGxlIiwidHJhc2giLCJncmlkTGF5b3V0IiwiZGV2aWNlIiwibW9iaWxlIiwiSXRlbSIsIkNvbHVtbiIsIlRyYXNoIiwiQ2F0YWxvZyIsIm9wZW4iLCJpc0VtcHR5Q2F0YWxvZyIsImNhcnRJdGVtcyIsImFkZCIsImZpbmQiLCJidXR0b25Db250IiwibmFtZSIsInZhaWxkYXRlIiwidmFsdWVzIiwiZXJyb3JzIiwicGFyc2VJbnQiLCJNb2RhbCIsImNsb3NlTW9kYWwiLCJvblN1Ym1pdCIsIkRhdGUiLCJub3ciLCJoYW5kbGVTdWJtaXQiLCJwcmlzdGluZSIsInN1Ym1pdHRpbmciLCJpbnZhbGlkIiwiZm9ybSIsInJlc2V0IiwibWV0YSIsInRvdWNoZWQiLCJDbG9zZU1vZGFsIiwiRXJyb3IiLCJFcnJvck5vdGlmaWNhdGlvbiIsImhhbmRsZUNsb3NlIiwiVGV4dCIsIk1haW4iLCJ0byIsIldyYXBwZXIiLCJTdHlsZWRMaW5rIiwiTmF2aWdhdGlvbiIsIk5vdEZvdW5kIiwiSU5ERVhfUk9VVEUiLCJDQVRBTE9HX1JPVVRFIiwiQ0FSVF9ST1VURSIsIlJvdXRlcyIsInNpemUiLCJtb2JpbGVTIiwidGFibGV0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFF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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxNQUFNQyxNQUFnQixHQUFHLG1CQUM5QixvREFBQyw4Q0FBRDtBQUFnQixVQUFRLGVBQUU7QUFBMUIsZ0JBQ0Usb0RBQUMsbURBQUQscUJBQ0Usb0RBQUMsa0RBQUQ7QUFBTyxNQUFJLEVBQUVILHVEQUFiO0FBQTBCLE9BQUssTUFBL0I7QUFBZ0MsV0FBUyxFQUFFTixxREFBSUE7QUFBL0MsRUFERixlQUVFLG9EQUFDLGtEQUFEO0FBQU8sTUFBSSxFQUFFTyx5REFBYjtBQUE0QixPQUFLLE1BQWpDO0FBQWtDLFdBQVMsRUFBRXJDLHdEQUFPQTtBQUFwRCxFQUZGLGVBR0Usb0RBQUMsa0RBQUQ7QUFBTyxNQUFJLEVBQUVzQyxzREFBYjtBQUF5QixPQUFLLE1BQTlCO0FBQStCLFdBQVMsRUFBRXRELHFEQUFJQTtBQUE5QyxFQUhGLGVBSUUsb0RBQUMsa0RBQUQ7QUFBTyxXQUFTLEVBQUVtRCwwREFBUUE7QUFBMUIsRUFKRixDQURGLENBREssQzs7Ozs7Ozs7Ozs7O0FDUlA7QUFBQTtBQUFBLE1BQU1LLElBQUksR0FBRztBQUNYQyxTQUFPLEVBQUUsT0FERTtBQUVYN0MsUUFBTSxFQUFFLE9BRkc7QUFHWDhDLFFBQU0sRUFBRTtBQUhHLENBQWI7QUFNTyxNQUFNL0MsTUFBTSxHQUFHO0FBQ3BCOEMsU0FBTyxFQUFHLHNCQUFxQkQsSUFBSSxDQUFDQyxPQUFRLEdBRHhCO0FBRXBCN0MsUUFBTSxFQUFHLHNCQUFxQjRDLElBQUksQ0FBQzVDLE1BQU8sR0FGdEI7QUFHcEI4QyxRQUFNLEVBQUcsc0JBQXFCRixJQUFJLENBQUNFLE1BQU87QUFIdEIsQ0FBZixDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9yc35tYWluXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5jb25zdCBSb290ID0gc3R5bGVkLmJ1dHRvbmBcbiAgd2lkdGg6IDIwMHB4O1xuICBwYWRkaW5nOiAxM3B4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogIzQ4YTFlNjtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5gXG5cbnR5cGUgUHJvcHMgPSBSZWFjdC5CdXR0b25IVE1MQXR0cmlidXRlczxIVE1MQnV0dG9uRWxlbWVudD5cblxuZXhwb3J0IGNvbnN0IEJ1dHRvbjogUmVhY3QuRkM8UHJvcHM+ID0gKHsgY2hpbGRyZW4sIHR5cGUsIG9uQ2xpY2sgfTogUHJvcHMpID0+IChcbiAgPFJvb3QgdHlwZT17dHlwZX0gb25DbGljaz17b25DbGlja30+XG4gICAge2NoaWxkcmVufVxuICA8L1Jvb3Q+XG4pXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmNvbnN0IFJvb3QgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogMTI4MHB4O1xuICBwYWRkaW5nOiAwIDIwcHg7XG5gXG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbn1cblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lcjogUmVhY3QuRkMgPSAoeyBjaGlsZHJlbiB9OiBQcm9wcykgPT4gPFJvb3Q+e2NoaWxkcmVufTwvUm9vdD5cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuaW50ZXJmYWNlIEhlYWRlclByb3BzIHtcbiAgcmVhZG9ubHkgYWxpZ24/OiAnYXV0bycgfCAnbGVmdCcgfCAncmlnaHQnIHwgJ2NlbnRlcidcbn1cblxuY29uc3QgUm9vdCA9IHN0eWxlZC5oMTxIZWFkZXJQcm9wcz5gXG4gIG1hcmdpbjogMTBweCAwO1xuICBmb250LXNpemU6IDMycHg7XG4gIHRleHQtYWxpZ246ICR7KHByb3BzKSA9PiBwcm9wcy5hbGlnbn07XG5gXG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIEhlYWRlclByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxufVxuXG5jb25zdCBIZWFkZXI6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGNoaWxkcmVuLCBhbGlnbiA9ICdsZWZ0JyB9OiBQcm9wcykgPT4gPFJvb3QgYWxpZ249e2FsaWdufT57Y2hpbGRyZW59PC9Sb290PlxuXG5IZWFkZXIuZGVmYXVsdFByb3BzID0ge1xuICBhbGlnbjogJ2xlZnQnLFxufSBhcyBQcm9wc1xuXG5leHBvcnQgeyBIZWFkZXIgfVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5jb25zdCBSb290ID0gc3R5bGVkLmlucHV0YFxuICB3aWR0aDogMjAwcHg7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgc2lsdmVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG5gXG5cbnR5cGUgUHJvcHMgPSBSZWFjdC5JbnB1dEhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+XG5cbmV4cG9ydCBjb25zdCBJbnB1dDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzOiBQcm9wcykgPT4gPFJvb3Qgey4uLnByb3BzfSAvPlxuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy82MGExMzNkZjQxNjJlMmZkMTY3YTI4MzUwYzNlZmMyYy5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzLzk0MWZjZTE3N2IyZjU5NTBlYWI4OWNjYjBjMTA2MmMyLnN2Z1wiOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBwbHVzIGZyb20gJy4vYXNzZXRzL3BsdXMuc3ZnJ1xuaW1wb3J0IG1pbnVzIGZyb20gJy4vYXNzZXRzL21pbnVzLnN2ZydcblxuY29uc3QgUm9vdCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGhlaWdodDogMjZweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuYFxuXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXI6IG5vbmU7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICBoZWlnaHQ6IDEwMCU7XG4gICY6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuICAmOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG4gICY6ZGlzYWJsZWQge1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIH1cbmBcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcXVhbnRpdHk6IG51bWJlclxuICBpbmNyZW1lbnQ6ICgpID0+IHZvaWRcbiAgZGVjcmVtZW50OiAoKSA9PiB2b2lkXG59XG5cbmV4cG9ydCBjb25zdCBRdWFudGl0eUNvdW50ZXI6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGluY3JlbWVudCwgZGVjcmVtZW50LCBxdWFudGl0eSB9OiBQcm9wcykgPT4gKFxuICA8Um9vdD5cbiAgICA8QnV0dG9uIG9uQ2xpY2s9e2luY3JlbWVudH0+XG4gICAgICA8aW1nIHNyYz17cGx1c30gYWx0PSdwbHVzJyAvPlxuICAgIDwvQnV0dG9uPlxuICAgIHtxdWFudGl0eX1cbiAgICA8QnV0dG9uIGRpc2FibGVkPXtxdWFudGl0eSA8PSAxfSBvbkNsaWNrPXtkZWNyZW1lbnR9PlxuICAgICAgPGltZyBzcmM9e21pbnVzfSBhbHQ9J21pbnVzJyAvPlxuICAgIDwvQnV0dG9uPlxuICA8L1Jvb3Q+XG4pXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmludGVyZmFjZSBIZWFkZXJQcm9wcyB7XG4gIHJlYWRvbmx5IHRvcD86IHN0cmluZ1xuICByZWFkb25seSBsZWZ0Pzogc3RyaW5nXG4gIHJlYWRvbmx5IHJpZ2h0Pzogc3RyaW5nXG4gIHJlYWRvbmx5IGJvdHRvbT86IHN0cmluZ1xufVxuXG5jb25zdCBSb290ID0gc3R5bGVkLmRpdjxIZWFkZXJQcm9wcz5gXG4gIGRpc3BsYXk6IGJsb2NrO1xuICAkeyh7IHRvcCB9KSA9PlxuICAgIHRvcCAmJlxuICAgIGNzc2BcbiAgICAgIHBhZGRpbmctdG9wOiAke3RvcH1weDtcbiAgICBgfVxuICAkeyh7IGxlZnQgfSkgPT5cbiAgICBsZWZ0ICYmXG4gICAgY3NzYFxuICAgICAgcGFkZGluZy1sZWZ0OiAke2xlZnR9cHg7XG4gICAgYH07XG4gICR7KHsgcmlnaHQgfSkgPT5cbiAgICByaWdodCAmJlxuICAgIGNzc2BcbiAgICAgIHBhZGRpbmctcmlnaHQ6ICR7cmlnaHR9cHg7XG4gICAgYH07XG4gICR7KHsgYm90dG9tIH0pID0+XG4gICAgYm90dG9tICYmXG4gICAgY3NzYFxuICAgICAgcGFkZGluZy1ib3R0b206ICR7Ym90dG9tfXB4O1xuICAgIGB9O1xuYFxuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBIZWFkZXJQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbn1cblxuY29uc3QgU3BhY2VyOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBjaGlsZHJlbiwgdG9wLCBsZWZ0LCBib3R0b20sIHJpZ2h0IH06IFByb3BzKSA9PiAoXG4gIDxSb290IHRvcD17dG9wfSBsZWZ0PXtsZWZ0fSBib3R0b209e2JvdHRvbX0gcmlnaHQ9e3JpZ2h0fT5cbiAgICB7Y2hpbGRyZW59XG4gIDwvUm9vdD5cbilcblxuU3BhY2VyLmRlZmF1bHRQcm9wcyA9IHtcbiAgdG9wOiAnMCcsXG4gIGxlZnQ6ICcwJyxcbiAgcmlnaHQ6ICcwJyxcbiAgYm90dG9tOiAnMCcsXG59IGFzIFByb3BzXG5cbmV4cG9ydCB7IFNwYWNlciB9XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgeyBJQ2FydEFjdGlvbnMgfSBmcm9tICcuLi90eXBlcy9jYXJ0J1xuaW1wb3J0IHtcbiAgQUREX1RPX0NBUlQsXG4gIFJFTU9WRV9GUk9NX0NBUlQsXG4gIElOQ1JFTUVOVF9DQVJUX0lURU0sXG4gIERFQ1JFTUVOVF9DQVJUX0lURU0sXG4gIFNFVF9UT1RBTF9QUklDRSxcbn0gZnJvbSAnLi4vY29uc3RhbnRzL2NhcnQnXG5pbXBvcnQgeyBJUHJvZHVjdCB9IGZyb20gJ0AvdHlwZXMvbW9kZWxzL2NhdGFsb2cnXG5cbmV4cG9ydCBjb25zdCBzZXRUb3RhbFByaWNlID0gKCk6IElDYXJ0QWN0aW9ucyA9PiAoe1xuICB0eXBlOiBTRVRfVE9UQUxfUFJJQ0UsXG59KVxuXG5leHBvcnQgY29uc3QgYWRkVG9DYXJ0ID0gKHJlczogSVByb2R1Y3QpOiBJQ2FydEFjdGlvbnMgPT4gKHtcbiAgdHlwZTogQUREX1RPX0NBUlQsXG4gIHBheWxvYWQ6IHJlcyxcbn0pXG5cbmV4cG9ydCBjb25zdCByZW1vdmVGcm9tQ2FydCA9IChpZDogbnVtYmVyKTogSUNhcnRBY3Rpb25zID0+ICh7XG4gIHR5cGU6IFJFTU9WRV9GUk9NX0NBUlQsXG4gIHBheWxvYWQ6IGlkLFxufSlcblxuZXhwb3J0IGNvbnN0IGluY3JlbWVudENhcnRJdGVtID0gKGlkOiBudW1iZXIpOiBJQ2FydEFjdGlvbnMgPT4gKHtcbiAgdHlwZTogSU5DUkVNRU5UX0NBUlRfSVRFTSxcbiAgcGF5bG9hZDogaWQsXG59KVxuXG5leHBvcnQgY29uc3QgZGVjcmVtZW50Q2FydEl0ZW0gPSAoaWQ6IG51bWJlcik6IElDYXJ0QWN0aW9ucyA9PiAoe1xuICB0eXBlOiBERUNSRU1FTlRfQ0FSVF9JVEVNLFxuICBwYXlsb2FkOiBpZCxcbn0pXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7IFRodW5rQWN0aW9uIH0gZnJvbSAncmVkdXgtdGh1bmsnXG5pbXBvcnQgeyBJUHJvZHVjdCB9IGZyb20gJ0AvdHlwZXMvbW9kZWxzL2NhdGFsb2cnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyBJQ2F0YWxvZ1N0YXRlLCBJQ2F0YWxvZ0FjdGlvbnMgfSBmcm9tICcuLi90eXBlcy9jYXRhbG9nJ1xuaW1wb3J0IHsgRkVUQ0hfQ0FUQUxPRywgRkVUQ0hfQ0FUQUxPR19TVUNDRVNTLCBBRERfVE9fQ0FUQUxPRyB9IGZyb20gJy4uL2NvbnN0YW50cy9jYXRhbG9nJ1xuaW1wb3J0IHsgc2V0RXJyb3IgfSBmcm9tICcuL2Vycm9yJ1xuXG5leHBvcnQgY29uc3QgZmV0Y2hDYXRhbG9nID0gKCk6IElDYXRhbG9nQWN0aW9ucyA9PiAoe1xuICB0eXBlOiBGRVRDSF9DQVRBTE9HLFxufSlcblxuZXhwb3J0IGNvbnN0IGFkZFRvQ2F0YWxvZyA9IChwYXlsb2FkOiBJUHJvZHVjdCk6IElDYXRhbG9nQWN0aW9ucyA9PiAoe1xuICB0eXBlOiBBRERfVE9fQ0FUQUxPRyxcbiAgcGF5bG9hZCxcbn0pXG5cbmV4cG9ydCBjb25zdCBmZXRjaENhdGFsb2dTdWNjZXNzID0gKHJlczogSVByb2R1Y3RbXSk6IElDYXRhbG9nQWN0aW9ucyA9PiAoe1xuICB0eXBlOiBGRVRDSF9DQVRBTE9HX1NVQ0NFU1MsXG4gIHBheWxvYWQ6IHJlcyxcbn0pXG5cbmV4cG9ydCBjb25zdCB0aHVua0ZldGNoQ2F0YWxvZyA9ICgpOiBUaHVua0FjdGlvbjx2b2lkLCBJQ2F0YWxvZ1N0YXRlLCB1bmtub3duLCBBY3Rpb24+ID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaChmZXRjaENhdGFsb2coKSlcbiAgcmV0dXJuIGF4aW9zXG4gICAgLmdldDxJUHJvZHVjdFtdPignaHR0cHM6Ly9ydW4ubW9ja3kuaW8vdjMvNDc1NmU3NDAtOTBhMC00ZTgwLTlmZTEtZjkxNmRlZWY1ZGVkJylcbiAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICBkaXNwYXRjaChmZXRjaENhdGFsb2dTdWNjZXNzKHJlcy5kYXRhKSlcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGRpc3BhdGNoKHNldEVycm9yKGVycm9yLm1lc3NhZ2VzIHx8ICdzb21ldGhpbmcgZ2V0IHdyb25nIDooJykpXG4gICAgfSlcbn1cbiIsImltcG9ydCB7IElFcnJvckFjdGlvbnMgfSBmcm9tICcuLi90eXBlcy9lcnJvcidcbmltcG9ydCB7IFNFVF9FUlJPUiwgSElERV9FUlJPUiB9IGZyb20gJy4uL2NvbnN0YW50cy9lcnJvcidcblxuZXhwb3J0IGNvbnN0IHNldEVycm9yID0gKGVycm9yOiBzdHJpbmcpOiBJRXJyb3JBY3Rpb25zID0+ICh7XG4gIHR5cGU6IFNFVF9FUlJPUixcbiAgZXJyb3IsXG59KVxuXG5leHBvcnQgY29uc3QgaGlkZUVycm9yID0gKCk6IElFcnJvckFjdGlvbnMgPT4gKHtcbiAgdHlwZTogSElERV9FUlJPUixcbn0pXG4iLCJleHBvcnQgY29uc3QgQUREX1RPX0NBUlQgPSAnQENBUlQvQUREJ1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9GUk9NX0NBUlQgPSAnQENBUlQvUkVNT1ZFJ1xuZXhwb3J0IGNvbnN0IElOQ1JFTUVOVF9DQVJUX0lURU0gPSAnQENBUlQvSU5DUkVNRU5UX0lURU0nXG5leHBvcnQgY29uc3QgREVDUkVNRU5UX0NBUlRfSVRFTSA9ICdAQ0FSVC9ERUNSRU1FTlRfSVRFTSdcbmV4cG9ydCBjb25zdCBTRVRfVE9UQUxfUFJJQ0UgPSAnQENBUlQvU0VUX1RPVEFMX1BSSUNFJ1xuIiwiZXhwb3J0IGNvbnN0IEZFVENIX0NBVEFMT0cgPSAnQENBVEFMT0cvRkVUQ0gnXG5leHBvcnQgY29uc3QgRkVUQ0hfQ0FUQUxPR19TVUNDRVNTID0gJ0BDQVRBTE9HL0ZFVENIX0NBVEFMT0dfU1VDQ0VTUydcbmV4cG9ydCBjb25zdCBBRERfVE9fQ0FUQUxPRyA9ICdAQ0FUQUxPRy9BRERfVE9fQ0FUQUxPRydcbiIsImV4cG9ydCBjb25zdCBTRVRfRVJST1IgPSAnU0VUX0VSUk9SJ1xuZXhwb3J0IGNvbnN0IEhJREVfRVJST1IgPSAnSElERV9FUlJPUidcbiIsImltcG9ydCB7IElDYXJ0U3RhdGUsIElDYXJ0QWN0aW9ucyB9IGZyb20gJy4uL3R5cGVzL2NhcnQnXG5pbXBvcnQge1xuICBTRVRfVE9UQUxfUFJJQ0UsXG4gIEFERF9UT19DQVJULFxuICBSRU1PVkVfRlJPTV9DQVJULFxuICBJTkNSRU1FTlRfQ0FSVF9JVEVNLFxuICBERUNSRU1FTlRfQ0FSVF9JVEVNLFxufSBmcm9tICcuLi9jb25zdGFudHMvY2FydCdcbmltcG9ydCB7IElDYXJ0SXRlbSB9IGZyb20gJ0AvdHlwZXMvbW9kZWxzL2NhcnQnXG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0U3RhdGU6IElDYXJ0U3RhdGUgPSB7XG4gIHRvdGFsUHJpY2U6IDAsXG4gIGl0ZW1zOiBbXSxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGU6IElDYXJ0U3RhdGUgPSBkZWZhdWx0U3RhdGUsIGFjdGlvbjogSUNhcnRBY3Rpb25zKTogSUNhcnRTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gICAgY2FzZSBTRVRfVE9UQUxfUFJJQ0U6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdG90YWxQcmljZTogc3RhdGUuaXRlbXMucmVkdWNlKChhY2MsIGN1cikgPT4gYWNjICsgY3VyLnByaWNlICogY3VyLnF1YW50aXR5LCAwKSxcbiAgICAgIH1cbiAgICBjYXNlIEFERF9UT19DQVJUOlxuICAgICAgY29uc3QgbmV3SXRlbXMgPSBbeyAuLi5hY3Rpb24ucGF5bG9hZCwgcXVhbnRpdHk6IDEgfSwgLi4uc3RhdGUuaXRlbXNdXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXRlbXM6IG5ld0l0ZW1zLFxuICAgICAgICB0b3RhbFByaWNlOiBuZXdJdGVtcy5yZWR1Y2UoKGFjYywgY3VyKSA9PiBhY2MgKyBjdXIucHJpY2UsIDApLFxuICAgICAgfVxuICAgIGNhc2UgUkVNT1ZFX0ZST01fQ0FSVDpcbiAgICAgIGNvbnN0IGl0ZW1zID0gc3RhdGUuaXRlbXMuZmlsdGVyKChpKSA9PiBpLmlkICE9PSBhY3Rpb24ucGF5bG9hZClcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpdGVtczogaXRlbXMsXG4gICAgICAgIHRvdGFsUHJpY2U6IGl0ZW1zLnJlZHVjZSgoYWNjLCBjdXIpID0+IGFjYyArIGN1ci5wcmljZSwgMCksXG4gICAgICB9XG4gICAgY2FzZSBJTkNSRU1FTlRfQ0FSVF9JVEVNOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGl0ZW1zOiBzdGF0ZS5pdGVtcy5tYXAoKGl0ZW06IElDYXJ0SXRlbSkgPT4ge1xuICAgICAgICAgIGlmIChpdGVtLmlkID09PSBhY3Rpb24ucGF5bG9hZCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgcXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHkrKyxcbiAgICAgICAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gaXRlbVxuICAgICAgICB9KSxcbiAgICAgIH1cbiAgICBjYXNlIERFQ1JFTUVOVF9DQVJUX0lURU06XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXRlbXM6IHN0YXRlLml0ZW1zLm1hcCgoaXRlbTogSUNhcnRJdGVtKSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGFjdGlvbi5wYXlsb2FkKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBxdWFudGl0eTogaXRlbS5xdWFudGl0eS0tLFxuICAgICAgICAgICAgICAuLi5pdGVtLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBpdGVtXG4gICAgICAgIH0pLFxuICAgICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBJQ2F0YWxvZ1N0YXRlLCBJQ2F0YWxvZ0FjdGlvbnMgfSBmcm9tICcuLi90eXBlcy9jYXRhbG9nJ1xuaW1wb3J0IHsgQUREX1RPX0NBVEFMT0csIEZFVENIX0NBVEFMT0csIEZFVENIX0NBVEFMT0dfU1VDQ0VTUyB9IGZyb20gJy4uL2NvbnN0YW50cy9jYXRhbG9nJ1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFN0YXRlOiBJQ2F0YWxvZ1N0YXRlID0ge1xuICBpc0ZldGNoZWQ6IGZhbHNlLFxuICBpdGVtczogW10sXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlOiBJQ2F0YWxvZ1N0YXRlID0gZGVmYXVsdFN0YXRlLCBhY3Rpb246IElDYXRhbG9nQWN0aW9ucyk6IElDYXRhbG9nU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICAgIGNhc2UgRkVUQ0hfQ0FUQUxPRzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0ZldGNoZWQ6IHRydWUsXG4gICAgICB9XG4gICAgY2FzZSBBRERfVE9fQ0FUQUxPRzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpdGVtczogW2FjdGlvbi5wYXlsb2FkLCAuLi5zdGF0ZS5pdGVtc10sXG4gICAgICB9XG4gICAgY2FzZSBGRVRDSF9DQVRBTE9HX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXRlbXM6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICBpc0ZldGNoZWQ6IGZhbHNlLFxuICAgICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBISURFX0VSUk9SLCBTRVRfRVJST1IgfSBmcm9tICcuLi9jb25zdGFudHMvZXJyb3InXG5pbXBvcnQgeyBJRXJyb3JTdGF0ZSwgSUVycm9yQWN0aW9ucyB9IGZyb20gJy4uL3R5cGVzL2Vycm9yJ1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFN0YXRlOiBJRXJyb3JTdGF0ZSA9IHtcbiAgZXJyb3I6IG51bGwsXG4gIGlzT3BlbjogZmFsc2UsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlOiBJRXJyb3JTdGF0ZSA9IGRlZmF1bHRTdGF0ZSwgYWN0aW9uOiBJRXJyb3JBY3Rpb25zKTogSUVycm9yU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICAgIGNhc2UgSElERV9FUlJPUjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgaXNPcGVuOiBmYWxzZSxcbiAgICAgIH1cbiAgICBjYXNlIFNFVF9FUlJPUjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBlcnJvcjogYWN0aW9uLmVycm9yLFxuICAgICAgICBpc09wZW46IHRydWUsXG4gICAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgcmVkdWNlciBhcyBjYXRhbG9nIH0gZnJvbSAnLi9jYXRhbG9nJ1xuaW1wb3J0IHsgcmVkdWNlciBhcyBjYXJ0IH0gZnJvbSAnLi9jYXJ0J1xuaW1wb3J0IHsgcmVkdWNlciBhcyBlcnJvclJlZHVjZXIgfSBmcm9tICcuL2Vycm9yJ1xuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7IGNhdGFsb2csIGNhcnQsIGVycm9yUmVkdWNlciB9KVxuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlclxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMnXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnXG5cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbmNvbnN0IGNvbXBvc2VFbmhhbmNlcnMgPVxuICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gIHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmXG4gICh3aW5kb3cgYXMgYW55KS5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX19cbiAgICA/ICh3aW5kb3cgYXMgYW55KS5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX19cbiAgICA6IGNvbXBvc2Vcbi8qIGVzbGludC1lbmFibGUgKi9cblxuY29uc3QgZW5oYW5jZXIgPSBhcHBseU1pZGRsZXdhcmUoLi4uW3RodW5rXSlcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGNvbXBvc2VFbmhhbmNlcnMoZW5oYW5jZXIpKVxuXG5leHBvcnQgZGVmYXVsdCBzdG9yZVxuIiwiaW1wb3J0ICdyZWFjdC1hcHAtcG9seWZpbGwvaWUxMSdcbmltcG9ydCAncmVhY3QtYXBwLXBvbHlmaWxsL3N0YWJsZSdcbmltcG9ydCAnY29yZS1qcy9lczYvbWFwJ1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9zZXQnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBIYXNoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Avcm91dGVzJ1xuaW1wb3J0ICdAL2NvbXBvbmVudHMvdHlwb2dyYXBoeS9mb250LmNzcydcbmltcG9ydCAnQC9jb21wb25lbnRzL2xheW91dC9ib2R5LmNzcydcbmltcG9ydCBzdG9yZSBmcm9tICdAL2NvcmUvc3RvcmUnXG5pbXBvcnQgeyBOYXZpZ2F0aW9uIH0gZnJvbSAnLi9tb2R1bGVzL25hdmlnYXRpb24nXG5pbXBvcnQgeyBFcnJvck5vdGlmaWNhdGlvbiB9IGZyb20gJy4vbW9kdWxlcy9lcnJvci1ub3RpZmljYXRpb25zJ1xuaW1wb3J0ICdub3JtYWxpemUuY3NzJ1xuXG4vLyBIYXNoUm91dGVyINGC0L7Qu9GM0LrQviDQv9C+0YLQvtC80YMsINGH0YLQviDRjdGC0L4g0YPRhdC+0LTQuNGCINC90LAgZ2l0aHViIHBhZ2VzXG5leHBvcnQgY29uc3QgUm9vdDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFJlYWN0LlN0cmljdE1vZGU+XG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgPEhhc2hSb3V0ZXI+XG4gICAgICAgICAgPE5hdmlnYXRpb24gLz5cbiAgICAgICAgICA8RXJyb3JOb3RpZmljYXRpb24gLz5cbiAgICAgICAgICA8Um91dGVzIC8+XG4gICAgICAgIDwvSGFzaFJvdXRlcj5cbiAgICAgIDwvUHJvdmlkZXI+XG4gICAgPC9SZWFjdC5TdHJpY3RNb2RlPlxuICApXG59XG5cbnJlbmRlcig8Um9vdCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSlcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0AvY29tcG9uZW50cy9hdG9tcy9Db250YWluZXInXG5pbXBvcnQgeyBTcGFjZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvYXRvbXMvU3BhY2VyJ1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnQC9jb21wb25lbnRzL2F0b21zL0hlYWRlcidcbmltcG9ydCB7IElDYXJ0U3RhdGUgfSBmcm9tICdAL2NvcmUvdHlwZXMvY2FydCdcbmltcG9ydCB7IEl0ZW1zIH0gZnJvbSAnLi9pdGVtcydcblxuY29uc3QgQW5jaG9yID0gc3R5bGVkKExpbmspYFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibHVlO1xuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogcmVkO1xuICB9XG5gXG5cbmludGVyZmFjZSBSb290U3RhdGUge1xuICBjYXJ0OiBJQ2FydFN0YXRlXG59XG5cbmNvbnN0IENhcnQ6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBjYXJ0ID0gdXNlU2VsZWN0b3IoKHN0b3JlOiBSb290U3RhdGUpID0+IHN0b3JlLmNhcnQpXG4gIGlmIChjYXJ0Lml0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U3BhY2VyIHRvcD0nMjAnIGJvdHRvbT0nMTAnPlxuICAgICAgICAgIDxIZWFkZXI+Q2FydCBpcyBlbXB0eSA6KDwvSGVhZGVyPlxuICAgICAgICA8L1NwYWNlcj5cbiAgICAgICAgPEFuY2hvciB0bz0nL2NhdGFsb2cnPkdvIHRvIGNhdGFsb2cg4oaSPC9BbmNob3I+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8U3BhY2VyIHRvcD0nMjAnPlxuICAgICAgICA8SGVhZGVyIGFsaWduPSdjZW50ZXInPllvdXIgY2FydDwvSGVhZGVyPlxuICAgICAgPC9TcGFjZXI+XG4gICAgICA8U3BhY2VyIHRvcD0nMjAnIGJvdHRvbT0nMjAnPlxuICAgICAgICA8SXRlbXMgaXRlbXM9e2NhcnQuaXRlbXN9IC8+XG4gICAgICA8L1NwYWNlcj5cbiAgICAgIDxTcGFjZXIgdG9wPScyMCc+dG90YWwgcHJpY2U6IHtjYXJ0LnRvdGFsUHJpY2V9PC9TcGFjZXI+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FydFxuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy84OTc2MWY5NjNjZTZlNzFiYzMxNzA2MWFjMGI3MmVlZS5zdmdcIjsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBJQ2FydEl0ZW0gfSBmcm9tICdAL3R5cGVzL21vZGVscy9jYXJ0J1xuaW1wb3J0IHsgSUNhcnRTdGF0ZSB9IGZyb20gJ0AvY29yZS90eXBlcy9jYXJ0J1xuaW1wb3J0IHsgaW5jcmVtZW50Q2FydEl0ZW0sIGRlY3JlbWVudENhcnRJdGVtLCByZW1vdmVGcm9tQ2FydCwgc2V0VG90YWxQcmljZSB9IGZyb20gJ0AvY29yZS9hY3Rpb25zL2NhcnQnXG5pbXBvcnQgeyBRdWFudGl0eUNvdW50ZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvYXRvbXMvUXVhbnRpdHlDb3VudGVyJ1xuaW1wb3J0IHRyYXNoIGZyb20gJy4vYXNzZXRzL3RyYXNoLnN2ZydcbmltcG9ydCAqIGFzIFN0eWxlZCBmcm9tICcuL3N0eWxlZCdcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgaXRlbXM6IElDYXJ0SXRlbVtdXG59XG5cbmludGVyZmFjZSBSb290U3RhdGUge1xuICBjYXJ0OiBJQ2FydFN0YXRlXG59XG5cbmV4cG9ydCBjb25zdCBJdGVtczogUmVhY3QuRkM8UHJvcHM+ID0gUmVhY3QubWVtbyhmdW5jdGlvbiBJdGVtcyh7IGl0ZW1zIH06IFByb3BzKSB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuICBjb25zdCByZW1vdmUgPSBSZWFjdC51c2VDYWxsYmFjaygoaWQ6IG51bWJlcikgPT4ge1xuICAgIGRpc3BhdGNoKHJlbW92ZUZyb21DYXJ0KGlkKSlcbiAgICBkaXNwYXRjaChzZXRUb3RhbFByaWNlKCkpXG4gIH0sIFtdKVxuXG4gIGNvbnN0IGluY3JlbWVudCA9IFJlYWN0LnVzZUNhbGxiYWNrKChpZDogbnVtYmVyKSA9PiB7XG4gICAgZGlzcGF0Y2goaW5jcmVtZW50Q2FydEl0ZW0oaWQpKVxuICAgIGRpc3BhdGNoKHNldFRvdGFsUHJpY2UoKSlcbiAgfSwgW10pXG5cbiAgY29uc3QgZGVjcmVtZW50ID0gUmVhY3QudXNlQ2FsbGJhY2soKGlkOiBudW1iZXIpID0+IHtcbiAgICBkaXNwYXRjaChkZWNyZW1lbnRDYXJ0SXRlbShpZCkpXG4gICAgZGlzcGF0Y2goc2V0VG90YWxQcmljZSgpKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U3R5bGVkLkhlYWRlcj5cbiAgICAgICAgPFN0eWxlZC5Db2x1bW4+dGl0bGU8L1N0eWxlZC5Db2x1bW4+XG4gICAgICAgIDxTdHlsZWQuQ29sdW1uIHJpZ2h0PnByaWNlPC9TdHlsZWQuQ29sdW1uPlxuICAgICAgICA8U3R5bGVkLkNvbHVtbiByaWdodD5xdWFudGl0eTwvU3R5bGVkLkNvbHVtbj5cbiAgICAgICAgPFN0eWxlZC5Db2x1bW4gLz5cbiAgICAgIDwvU3R5bGVkLkhlYWRlcj5cbiAgICAgIHtpdGVtcy5tYXAoKHByb2R1Y3Q6IElDYXJ0SXRlbSkgPT4gKFxuICAgICAgICA8U3R5bGVkLkl0ZW0ga2V5PXtgJHtwcm9kdWN0LnRpdGxlfWB9PlxuICAgICAgICAgIDxTdHlsZWQuQ29sdW1uPntwcm9kdWN0LnRpdGxlfTwvU3R5bGVkLkNvbHVtbj5cbiAgICAgICAgICA8U3R5bGVkLkNvbHVtbiByaWdodD57cHJvZHVjdC5wcmljZX0gLyAkPC9TdHlsZWQuQ29sdW1uPlxuICAgICAgICAgIDxTdHlsZWQuQ29sdW1uIHJpZ2h0IHF1YW50aXR5PlxuICAgICAgICAgICAgPFF1YW50aXR5Q291bnRlclxuICAgICAgICAgICAgICBpbmNyZW1lbnQ9eygpID0+IGluY3JlbWVudChwcm9kdWN0LmlkKX1cbiAgICAgICAgICAgICAgZGVjcmVtZW50PXsoKSA9PiBkZWNyZW1lbnQocHJvZHVjdC5pZCl9XG4gICAgICAgICAgICAgIHF1YW50aXR5PXtwcm9kdWN0LnF1YW50aXR5fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1N0eWxlZC5Db2x1bW4+XG4gICAgICAgICAgPFN0eWxlZC5Db2x1bW4gcmlnaHQ+XG4gICAgICAgICAgICA8U3R5bGVkLlRyYXNoIG9uQ2xpY2s9eygpID0+IHJlbW92ZShwcm9kdWN0LmlkKX0+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXt0cmFzaH0gYWx0PSd0cmFzaCcgLz5cbiAgICAgICAgICAgIDwvU3R5bGVkLlRyYXNoPlxuICAgICAgICAgIDwvU3R5bGVkLkNvbHVtbj5cbiAgICAgICAgPC9TdHlsZWQuSXRlbT5cbiAgICAgICkpfVxuICAgIDwvPlxuICApXG59KVxuIiwiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IGRldmljZSB9IGZyb20gJ0AvdXRpbHMvc3R5bGVkJ1xuXG5leHBvcnQgY29uc3QgZ3JpZExheW91dCA9IGNzc2BcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAucmlnaHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG4gICR7ZGV2aWNlLm1vYmlsZX0ge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMCAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgJHtncmlkTGF5b3V0fVxuICAke2RldmljZS5tb2JpbGV9IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBJdGVtID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzMzMzO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAke2dyaWRMYXlvdXR9XG4gICY6Omxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgQ29sdW1uID0gc3R5bGVkLmRpdjx7IHJpZ2h0PzogYm9vbGVhbjsgcXVhbnRpdHk/OiBib29sZWFuIH0+YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICR7KHsgcmlnaHQgfSkgPT4gKHJpZ2h0ID8gJ2ZsZXgtZW5kJyA6ICdmbGV4LXN0YXJ0Jyl9O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMzAlO1xuICAmOm50aC1jaGlsZCg0KSB7XG4gICAgd2lkdGg6IDUwcHg7XG4gIH1cbiAgJHtkZXZpY2UubW9iaWxlfSB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICAmOm50aC1jaGlsZCgzKSxcbiAgICAmOm50aC1jaGlsZCg0KSB7XG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICB9XG4gIH1cbiAgJHsoeyBxdWFudGl0eSB9KSA9PlxuICAgIHF1YW50aXR5ICYmXG4gICAgY3NzYFxuICAgICAgJHtkZXZpY2UubW9iaWxlfSB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIH1cbiAgICBgfVxuYFxuXG5leHBvcnQgY29uc3QgVHJhc2ggPSBzdHlsZWQuZGl2YFxuICBjdXJzb3I6IHBvaW50ZXI7XG5gXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgSUNhdGFsb2dTdGF0ZSB9IGZyb20gJ0AvY29yZS90eXBlcy9jYXRhbG9nJ1xuaW1wb3J0IHsgdGh1bmtGZXRjaENhdGFsb2cgfSBmcm9tICdAL2NvcmUvYWN0aW9ucy9jYXRhbG9nJ1xuaW1wb3J0IHsgU3BhY2VyIH0gZnJvbSAnQC9jb21wb25lbnRzL2F0b21zL1NwYWNlcidcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJ0AvY29tcG9uZW50cy9hdG9tcy9IZWFkZXInXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAL2NvbXBvbmVudHMvYXRvbXMvQnV0dG9uJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQC9jb21wb25lbnRzL2F0b21zL0NvbnRhaW5lcidcbmltcG9ydCB7IEl0ZW1zIH0gZnJvbSAnLi9pdGVtcydcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnLi9tb2RhbCdcblxuaW50ZXJmYWNlIFJvb3RTdGF0ZSB7XG4gIGNhdGFsb2c6IElDYXRhbG9nU3RhdGVcbn1cblxuY29uc3QgQ2F0YWxvZzogUmVhY3QuRkMgPSBSZWFjdC5tZW1vKGZ1bmN0aW9uIENhdGFsb2coKSB7XG4gIGNvbnN0IFtpc09wZW4sIG9wZW5dID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuICBjb25zdCB7IGl0ZW1zIH0gPSB1c2VTZWxlY3Rvcigoc3RvcmU6IFJvb3RTdGF0ZSkgPT4gc3RvcmUuY2F0YWxvZylcbiAgY29uc3QgaXNFbXB0eUNhdGFsb2cgPSBpdGVtcy5sZW5ndGggPT09IDBcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNFbXB0eUNhdGFsb2cpIHtcbiAgICAgIGRpc3BhdGNoKHRodW5rRmV0Y2hDYXRhbG9nKCkpXG4gICAgfVxuICB9LCBbXSlcblxuICBpZiAoaXNFbXB0eUNhdGFsb2cpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFNwYWNlciB0b3A9JzIwJz5cbiAgICAgICAgPEhlYWRlciBhbGlnbj0nY2VudGVyJz5TdG9jayBvZiB0aGUgY29tcGFuaWVzPC9IZWFkZXI+XG4gICAgICA8L1NwYWNlcj5cbiAgICAgIDxTcGFjZXIgdG9wPScyMCcgYm90dG9tPScyMCc+XG4gICAgICAgIDxJdGVtcyBpdGVtcz17aXRlbXN9IC8+XG4gICAgICA8L1NwYWNlcj5cbiAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gb3Blbih0cnVlKX0+YWRkIHN0b2NrPC9CdXR0b24+XG4gICAgICB7aXNPcGVuICYmIDxNb2RhbCBjbG9zZU1vZGFsPXsoKSA9PiBvcGVuKGZhbHNlKX0gLz59XG4gICAgPC9Db250YWluZXI+XG4gIClcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IENhdGFsb2dcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBJUHJvZHVjdCB9IGZyb20gJ0AvdHlwZXMvbW9kZWxzL2NhdGFsb2cnXG5pbXBvcnQgeyBJQ2FydFN0YXRlIH0gZnJvbSAnQC9jb3JlL3R5cGVzL2NhcnQnXG5pbXBvcnQgeyBhZGRUb0NhcnQsIHNldFRvdGFsUHJpY2UgfSBmcm9tICdAL2NvcmUvYWN0aW9ucy9jYXJ0J1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQC9jb21wb25lbnRzL2F0b21zL0J1dHRvbidcbmltcG9ydCAqIGFzIFN0eWxlZCBmcm9tICcuL3N0eWxlZCdcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgaXRlbXM6IElQcm9kdWN0W11cbn1cblxuaW50ZXJmYWNlIFJvb3RTdGF0ZSB7XG4gIGNhcnQ6IElDYXJ0U3RhdGVcbn1cblxuZXhwb3J0IGNvbnN0IEl0ZW1zOiBSZWFjdC5GQzxQcm9wcz4gPSBSZWFjdC5tZW1vKGZ1bmN0aW9uIEl0ZW1zKHsgaXRlbXMgfTogUHJvcHMpIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXG4gIGNvbnN0IGNhcnRJdGVtcyA9IHVzZVNlbGVjdG9yKChzdG9yZTogUm9vdFN0YXRlKSA9PiBzdG9yZS5jYXJ0Lml0ZW1zKVxuICBjb25zdCBhZGQgPSBSZWFjdC51c2VDYWxsYmFjaygocHJvZHVjdDogSVByb2R1Y3QpID0+IHtcbiAgICBkaXNwYXRjaChhZGRUb0NhcnQocHJvZHVjdCkpXG4gICAgZGlzcGF0Y2goc2V0VG90YWxQcmljZSgpKVxuICB9LCBbXSlcblxuICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbFxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTdHlsZWQuSGVhZGVyPlxuICAgICAgICA8U3R5bGVkLkNvbHVtbj50aXRsZTwvU3R5bGVkLkNvbHVtbj5cbiAgICAgICAgPFN0eWxlZC5Db2x1bW4gcmlnaHQ+cHJpY2U8L1N0eWxlZC5Db2x1bW4+XG4gICAgICA8L1N0eWxlZC5IZWFkZXI+XG4gICAgICB7aXRlbXMubWFwKChwcm9kdWN0OiBJUHJvZHVjdCkgPT4gKFxuICAgICAgICA8U3R5bGVkLkl0ZW0ga2V5PXtgJHtwcm9kdWN0LnRpdGxlfWB9PlxuICAgICAgICAgIDxTdHlsZWQuQ29sdW1uPntwcm9kdWN0LnRpdGxlfTwvU3R5bGVkLkNvbHVtbj5cbiAgICAgICAgICA8U3R5bGVkLkNvbHVtbiByaWdodD57cHJvZHVjdC5wcmljZX0gLyAkPC9TdHlsZWQuQ29sdW1uPlxuICAgICAgICAgIDxTdHlsZWQuQ29sdW1uIGJ1dHRvbkNvbnQgcmlnaHQ+XG4gICAgICAgICAgICB7Y2FydEl0ZW1zLmZpbmQoKGk6IElQcm9kdWN0KSA9PiBpLmlkID09PSBwcm9kdWN0LmlkKSA/IChcbiAgICAgICAgICAgICAgJ0FkZGVkJ1xuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBhZGQocHJvZHVjdCl9PkFkZCB0byBDYXJ0PC9CdXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvU3R5bGVkLkNvbHVtbj5cbiAgICAgICAgPC9TdHlsZWQuSXRlbT5cbiAgICAgICkpfVxuICAgIDwvPlxuICApXG59KVxuIiwiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IGRldmljZSB9IGZyb20gJ0AvdXRpbHMvc3R5bGVkJ1xuXG5leHBvcnQgY29uc3QgZ3JpZExheW91dCA9IGNzc2BcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLnJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuICAke2RldmljZS5tb2JpbGV9IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAwIDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAke2dyaWRMYXlvdXR9XG4gICR7ZGV2aWNlLm1vYmlsZX0ge1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgSXRlbSA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMzMzMztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgJHtncmlkTGF5b3V0fVxuICAmOjpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gICR7ZGV2aWNlLm1vYmlsZX0ge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IENvbHVtbiA9IHN0eWxlZC5kaXY8eyByaWdodD86IGJvb2xlYW47IGJ1dHRvbkNvbnQ/OiBib29sZWFuIH0+YFxuICB3aWR0aDogMzMlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICR7KHsgcmlnaHQgfSkgPT4gKHJpZ2h0ID8gJ2ZsZXgtZW5kJyA6ICdmbGV4LXN0YXJ0Jyl9O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAkeyh7IGJ1dHRvbkNvbnQgfSkgPT5cbiAgICBidXR0b25Db250ICYmXG4gICAgY3NzYFxuICAgICAgJHtkZXZpY2UubW9iaWxlfSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICB9XG4gICAgYH1cbmBcbiIsImV4cG9ydCBkZWZhdWx0IFtcbiAge1xuICAgIG5hbWU6ICd0aXRsZScsXG4gICAgdHlwZTogJ3RleHQnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ3ByaWNlJyxcbiAgICB0eXBlOiAnbnVtYmVyJyxcbiAgfSxcbl1cbiIsImltcG9ydCB0eXBlIHsgVmFsdWVzLCBFcnJvcnMgfSBmcm9tICcuL3R5cGVzJ1xuXG5leHBvcnQgY29uc3QgdmFpbGRhdGUgPSAodmFsdWVzOiBWYWx1ZXMpOiBFcnJvcnMgPT4ge1xuICBjb25zdCBlcnJvcnM6IEVycm9ycyA9IHt9XG4gIGlmICghdmFsdWVzLnRpdGxlKSB7XG4gICAgZXJyb3JzLnRpdGxlID0gJ1RpdGxlIGlzIHJlcXVpcmVkJ1xuICB9IGVsc2UgaWYgKHZhbHVlcy50aXRsZS5sZW5ndGggPiAzMCkge1xuICAgIGVycm9ycy50aXRsZSA9ICdNYXggMzAgc3ltYm9scydcbiAgfVxuICBpZiAoIXZhbHVlcy5wcmljZSkge1xuICAgIGVycm9ycy5wcmljZSA9ICdQcmljZSBpcyByZXF1aXJlZCdcbiAgfSBlbHNlIGlmIChwYXJzZUludCh2YWx1ZXMucHJpY2UpIDw9IDApIHtcbiAgICBlcnJvcnMucHJpY2UgPSAnUHJpY2UgbXVzdCBiZSBncmVhdGVyIHRoYW4gMCdcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRm9ybSwgRmllbGQgfSBmcm9tICdyZWFjdC1maW5hbC1mb3JtJ1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0AvY29tcG9uZW50cy9hdG9tcy9CdXR0b24nXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0AvY29tcG9uZW50cy9hdG9tcy9JbnB1dCdcbmltcG9ydCB7IFNwYWNlciB9IGZyb20gJ0AvY29tcG9uZW50cy9hdG9tcy9TcGFjZXInXG5pbXBvcnQgeyBhZGRUb0NhdGFsb2cgfSBmcm9tICdAL2NvcmUvYWN0aW9ucy9jYXRhbG9nJ1xuaW1wb3J0IGRhdGEgZnJvbSAnLi9kYXRhJ1xuaW1wb3J0IHsgdmFpbGRhdGUgfSBmcm9tICcuL2hlbHBlcnMnXG5pbXBvcnQgdHlwZSB7IFZhbHVlcyB9IGZyb20gJy4vdHlwZXMnXG5pbXBvcnQgKiBhcyBTdHlsZWQgZnJvbSAnLi9zdHlsZWQnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNsb3NlTW9kYWw6ICgpID0+IHZvaWRcbn1cblxuZXhwb3J0IGNvbnN0IE1vZGFsOiBSZWFjdC5GQzxQcm9wcz4gPSBSZWFjdC5tZW1vKGZ1bmN0aW9uIE1vZGFsKHsgY2xvc2VNb2RhbCB9OiBQcm9wcykge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcbiAgY29uc3Qgb25TdWJtaXQgPSBSZWFjdC51c2VDYWxsYmFjaygodmFsdWVzOiBWYWx1ZXMpID0+IHtcbiAgICBkaXNwYXRjaChhZGRUb0NhdGFsb2coeyAuLi52YWx1ZXMsIHByaWNlOiBwYXJzZUludCh2YWx1ZXMucHJpY2UpLCBpZDogRGF0ZS5ub3coKSB9KSlcbiAgICBjbG9zZU1vZGFsKClcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkLlJvb3Q+XG4gICAgICA8Rm9ybVxuICAgICAgICBvblN1Ym1pdD17b25TdWJtaXR9XG4gICAgICAgIHZhbGlkYXRlPXt2YWlsZGF0ZX1cbiAgICAgICAgcmVuZGVyPXsoeyBoYW5kbGVTdWJtaXQsIHByaXN0aW5lLCBzdWJtaXR0aW5nLCBpbnZhbGlkLCBmb3JtIH0pID0+IChcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9J2Zvcm0nPlxuICAgICAgICAgICAgPFN0eWxlZC5DbG9zZU1vZGFsXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBmb3JtLnJlc2V0KClcbiAgICAgICAgICAgICAgICBjbG9zZU1vZGFsKClcbiAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgIOKcllxuICAgICAgICAgICAgPC9TdHlsZWQuQ2xvc2VNb2RhbD5cbiAgICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8RmllbGQga2V5PXtgZmllbGRfJHtpdGVtLm5hbWV9YH0gbmFtZT17aXRlbS5uYW1lfSB0eXBlPXtpdGVtLnR5cGV9PlxuICAgICAgICAgICAgICAgIHsoeyBpbnB1dCwgbWV0YSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8U3BhY2VyIGJvdHRvbT0nMjAnPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgey4uLmlucHV0fSB0eXBlPXtpdGVtLnR5cGV9IHBsYWNlaG9sZGVyPXtpdGVtLm5hbWV9IC8+XG4gICAgICAgICAgICAgICAgICAgIHttZXRhLmVycm9yICYmIG1ldGEudG91Y2hlZCAmJiA8U3R5bGVkLkVycm9yPnttZXRhLmVycm9yfTwvU3R5bGVkLkVycm9yPn1cbiAgICAgICAgICAgICAgICAgIDwvU3BhY2VyPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT0nc3VibWl0JyBkaXNhYmxlZD17c3VibWl0dGluZyB8fCBwcmlzdGluZSB8fCBpbnZhbGlkfT5cbiAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICl9XG4gICAgICAvPlxuICAgIDwvU3R5bGVkLlJvb3Q+XG4gIClcbn0pXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgUm9vdCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2RlZGVkZWNmO1xuICAuZm9ybSB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDMwcHggNTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBDbG9zZU1vZGFsID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjNDhhMWU2O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5gXG5cbmV4cG9ydCBjb25zdCBFcnJvciA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiByZWQ7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbmBcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgaGlkZUVycm9yIH0gZnJvbSAnQC9jb3JlL2FjdGlvbnMvZXJyb3InXG5pbXBvcnQgeyBJRXJyb3JTdGF0ZSB9IGZyb20gJ0AvY29yZS90eXBlcy9lcnJvcidcbmltcG9ydCAqIGFzIFN0eWxlZCBmcm9tICcuL3N0eWxlZCdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0AvY29tcG9uZW50cy9hdG9tcy9CdXR0b24nXG5pbXBvcnQgeyBTcGFjZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvYXRvbXMvU3BhY2VyJ1xuXG5pbnRlcmZhY2UgUm9vdFN0YXRlIHtcbiAgZXJyb3JSZWR1Y2VyOiBJRXJyb3JTdGF0ZVxufVxuXG5leHBvcnQgY29uc3QgRXJyb3JOb3RpZmljYXRpb246IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBpc09wZW4gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuZXJyb3JSZWR1Y2VyLmlzT3BlbilcbiAgY29uc3QgZXJyb3IgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuZXJyb3JSZWR1Y2VyLmVycm9yKVxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICBkaXNwYXRjaChoaWRlRXJyb3IoKSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtpc09wZW4gJiYgZXJyb3IgJiYgKFxuICAgICAgICA8U3R5bGVkLlJvb3Q+XG4gICAgICAgICAgPFNwYWNlciByaWdodD0nMjAnPlxuICAgICAgICAgICAgPFN0eWxlZC5UZXh0PntlcnJvcn08L1N0eWxlZC5UZXh0PlxuICAgICAgICAgIDwvU3BhY2VyPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2V9PmNsb3NlIGVycm9yPC9CdXR0b24+XG4gICAgICAgIDwvU3R5bGVkLlJvb3Q+XG4gICAgICApfVxuICAgIDwvPlxuICApXG59XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgUm9vdCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBmaXJlYnJpY2s7XG4gIHBhZGRpbmc6IDIwcHg7XG5gXG5cbmV4cG9ydCBjb25zdCBUZXh0ID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6IHdoaXRlO1xuYFxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvYXRvbXMvQ29udGFpbmVyJ1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnQC9jb21wb25lbnRzL2F0b21zL0hlYWRlcidcbmltcG9ydCB7IFNwYWNlciB9IGZyb20gJ0AvY29tcG9uZW50cy9hdG9tcy9TcGFjZXInXG5cbmNvbnN0IE1haW46IFJlYWN0LkZDID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8U3BhY2VyIHRvcD0nMjAnPlxuICAgICAgICA8SGVhZGVyIGFsaWduPSdjZW50ZXInPk1haW4gcGFnZTwvSGVhZGVyPlxuICAgICAgPC9TcGFjZXI+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpblxuIiwiZXhwb3J0IGRlZmF1bHQgW1xuICB7XG4gICAgdG86ICcvJyxcbiAgICBuYW1lOiAnSG9tZScsXG4gIH0sXG4gIHtcbiAgICB0bzogJy9jYXRhbG9nJyxcbiAgICBuYW1lOiAnQ2F0YWxvZycsXG4gIH0sXG4gIHtcbiAgICB0bzogJy9jYXJ0JyxcbiAgICBuYW1lOiAnQ2FydCcsXG4gIH0sXG5dIGFzIEFycmF5PHsgdG86IHN0cmluZzsgbmFtZTogc3RyaW5nIH0+XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0AvY29tcG9uZW50cy9hdG9tcy9Db250YWluZXInXG5pbXBvcnQgeyBTcGFjZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvYXRvbXMvU3BhY2VyJ1xuaW1wb3J0IGRhdGEgZnJvbSAnLi9kYXRhJ1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogY3JpbXNvbjtcbmBcblxuY29uc3QgUm9vdCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmBcblxuY29uc3QgU3R5bGVkTGluayA9IHN0eWxlZChMaW5rKWBcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICY6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBOYXZpZ2F0aW9uOiBSZWFjdC5GQyA9IFJlYWN0Lm1lbW8oZnVuY3Rpb24gTmF2aWdhdGlvbigpIHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlcj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxTcGFjZXIgdG9wPScxMCcgYm90dG9tPScxMCc+XG4gICAgICAgICAgPFJvb3Q+XG4gICAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgPFN0eWxlZExpbmsga2V5PXtgbmF2XyR7aXRlbS5uYW1lfWB9IHRvPXtpdGVtLnRvfT5cbiAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICA8L1N0eWxlZExpbms+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1Jvb3Q+XG4gICAgICAgIDwvU3BhY2VyPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9XcmFwcGVyPlxuICApXG59KVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvYXRvbXMvQ29udGFpbmVyJ1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnQC9jb21wb25lbnRzL2F0b21zL0hlYWRlcidcbmltcG9ydCB7IFNwYWNlciB9IGZyb20gJ0AvY29tcG9uZW50cy9hdG9tcy9TcGFjZXInXG5cbmNvbnN0IEFuY2hvciA9IHN0eWxlZChMaW5rKWBcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmx1ZTtcbiAgJjpob3ZlciB7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuYFxuXG5jb25zdCBOb3RGb3VuZDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxTcGFjZXIgdG9wPScyMCcgYm90dG9tPScxMCc+XG4gICAgICAgIDxIZWFkZXI+UGFnZSBub3QgZm91bmQ8L0hlYWRlcj5cbiAgICAgIDwvU3BhY2VyPlxuICAgICAgPEFuY2hvciB0bz0nLyc+R28gdG8gaG9tZSDihpI8L0FuY2hvcj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOb3RGb3VuZFxuIiwiZXhwb3J0IGNvbnN0IElOREVYX1JPVVRFID0gJy8nXG5leHBvcnQgY29uc3QgQ0FUQUxPR19ST1VURSA9ICcvY2F0YWxvZydcbmV4cG9ydCBjb25zdCBDQVJUX1JPVVRFID0gJy9jYXJ0J1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBSb3V0ZSwgU3dpdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IHsgSU5ERVhfUk9VVEUsIENBVEFMT0dfUk9VVEUsIENBUlRfUk9VVEUgfSBmcm9tICcuL3JvdXRlcy1tYXAnXG5pbXBvcnQgTWFpbiBmcm9tICdAL21vZHVsZXMvbWFpbidcbmltcG9ydCBDYXRhbG9nIGZyb20gJ0AvbW9kdWxlcy9jYXRhbG9nJ1xuaW1wb3J0IENhcnQgZnJvbSAnQC9tb2R1bGVzL2NhcnQnXG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnQC9tb2R1bGVzL25vdC1mb3VuZCdcblxuZXhwb3J0IGNvbnN0IFJvdXRlczogUmVhY3QuRkMgPSAoKSA9PiAoXG4gIDxSZWFjdC5TdXNwZW5zZSBmYWxsYmFjaz17PGRpdj5Mb2FkLi4uPC9kaXY+fT5cbiAgICA8U3dpdGNoPlxuICAgICAgPFJvdXRlIHBhdGg9e0lOREVYX1JPVVRFfSBleGFjdCBjb21wb25lbnQ9e01haW59IC8+XG4gICAgICA8Um91dGUgcGF0aD17Q0FUQUxPR19ST1VURX0gZXhhY3QgY29tcG9uZW50PXtDYXRhbG9nfSAvPlxuICAgICAgPFJvdXRlIHBhdGg9e0NBUlRfUk9VVEV9IGV4YWN0IGNvbXBvbmVudD17Q2FydH0gLz5cbiAgICAgIDxSb3V0ZSBjb21wb25lbnQ9e05vdEZvdW5kfSAvPlxuICAgIDwvU3dpdGNoPlxuICA8L1JlYWN0LlN1c3BlbnNlPlxuKVxuIiwiY29uc3Qgc2l6ZSA9IHtcbiAgbW9iaWxlUzogJzM3NHB4JyxcbiAgbW9iaWxlOiAnNzY3cHgnLFxuICB0YWJsZXQ6ICcxMDIzcHgnLFxufVxuXG5leHBvcnQgY29uc3QgZGV2aWNlID0ge1xuICBtb2JpbGVTOiBgQG1lZGlhIChtYXgtd2lkdGg6ICR7c2l6ZS5tb2JpbGVTfSlgLFxuICBtb2JpbGU6IGBAbWVkaWEgKG1heC13aWR0aDogJHtzaXplLm1vYmlsZX0pYCxcbiAgdGFibGV0OiBgQG1lZGlhIChtYXgtd2lkdGg6ICR7c2l6ZS50YWJsZXR9KWAsXG59XG4iXSwic291cmNlUm9vdCI6IiJ9