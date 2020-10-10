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
  }, "quantity")), items.map(product => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styled__WEBPACK_IMPORTED_MODULE_5__["Item"], {
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
  display: grid;
  grid-template-columns: repeat(3, 1fr) 50px;
  grid-gap: 10px;
  .right {
    text-align: right;
  }
  ${_utils_styled__WEBPACK_IMPORTED_MODULE_1__["device"].mobile} {
    display: flex;
    flex-wrap: wrap;
    grid-gap: 0;
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
  ${_utils_styled__WEBPACK_IMPORTED_MODULE_1__["device"].mobile} {
    width: 50%;
  }
  ${_utils_styled__WEBPACK_IMPORTED_MODULE_1__["device"].mobile} {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hdG9tcy9CdXR0b24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYXRvbXMvQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F0b21zL0hlYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hdG9tcy9JbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hdG9tcy9RdWFudGl0eUNvdW50ZXIvYXNzZXRzL21pbnVzLnN2ZyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F0b21zL1F1YW50aXR5Q291bnRlci9hc3NldHMvcGx1cy5zdmciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hdG9tcy9RdWFudGl0eUNvdW50ZXIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYXRvbXMvU3BhY2VyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9ib2R5LmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3R5cG9ncmFwaHkvZm9udC5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29yZS9hY3Rpb25zL2NhcnQudHMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9hY3Rpb25zL2NhdGFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9hY3Rpb25zL2Vycm9yLnRzIiwid2VicGFjazovLy8uL2NvcmUvY29uc3RhbnRzL2NhcnQudHMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9jb25zdGFudHMvY2F0YWxvZy50cyIsIndlYnBhY2s6Ly8vLi9jb3JlL2NvbnN0YW50cy9lcnJvci50cyIsIndlYnBhY2s6Ly8vLi9jb3JlL3JlZHVjZXJzL2NhcnQudHMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9yZWR1Y2Vycy9jYXRhbG9nLnRzIiwid2VicGFjazovLy8uL2NvcmUvcmVkdWNlcnMvZXJyb3IudHMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9yZWR1Y2Vycy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb3JlL3N0b3JlLnRzIiwid2VicGFjazovLy8uL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NhcnQvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL21vZHVsZXMvY2FydC9pdGVtcy9hc3NldHMvdHJhc2guc3ZnIiwid2VicGFjazovLy8uL21vZHVsZXMvY2FydC9pdGVtcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jYXJ0L2l0ZW1zL3N0eWxlZC50cyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NhdGFsb2cvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL21vZHVsZXMvY2F0YWxvZy9pdGVtcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jYXRhbG9nL2l0ZW1zL3N0eWxlZC50cyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NhdGFsb2cvbW9kYWwvZGF0YS50cyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NhdGFsb2cvbW9kYWwvaGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NhdGFsb2cvbW9kYWwvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL21vZHVsZXMvY2F0YWxvZy9tb2RhbC9zdHlsZWQudHMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9lcnJvci1ub3RpZmljYXRpb25zL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2Vycm9yLW5vdGlmaWNhdGlvbnMvc3R5bGVkLnRzIiwid2VicGFjazovLy8uL21vZHVsZXMvbWFpbi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9uYXZpZ2F0aW9uL2RhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9uYXZpZ2F0aW9uL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25vdC1mb3VuZC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vcm91dGVzLW1hcC50cyIsIndlYnBhY2s6Ly8vLi9yb3V0ZXMudHN4Iiwid2VicGFjazovLy8uL3V0aWxzL3N0eWxlZC50cyJdLCJuYW1lcyI6WyJSb290Iiwic3R5bGVkIiwiYnV0dG9uIiwiQnV0dG9uIiwiY2hpbGRyZW4iLCJ0eXBlIiwib25DbGljayIsImRpdiIsIkNvbnRhaW5lciIsImgxIiwicHJvcHMiLCJhbGlnbiIsIkhlYWRlciIsImRlZmF1bHRQcm9wcyIsImlucHV0IiwiSW5wdXQiLCJRdWFudGl0eUNvdW50ZXIiLCJpbmNyZW1lbnQiLCJkZWNyZW1lbnQiLCJxdWFudGl0eSIsInBsdXMiLCJtaW51cyIsInRvcCIsImNzcyIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsIlNwYWNlciIsInNldFRvdGFsUHJpY2UiLCJTRVRfVE9UQUxfUFJJQ0UiLCJhZGRUb0NhcnQiLCJyZXMiLCJBRERfVE9fQ0FSVCIsInBheWxvYWQiLCJyZW1vdmVGcm9tQ2FydCIsImlkIiwiUkVNT1ZFX0ZST01fQ0FSVCIsImluY3JlbWVudENhcnRJdGVtIiwiSU5DUkVNRU5UX0NBUlRfSVRFTSIsImRlY3JlbWVudENhcnRJdGVtIiwiREVDUkVNRU5UX0NBUlRfSVRFTSIsImZldGNoQ2F0YWxvZyIsIkZFVENIX0NBVEFMT0ciLCJhZGRUb0NhdGFsb2ciLCJBRERfVE9fQ0FUQUxPRyIsImZldGNoQ2F0YWxvZ1N1Y2Nlc3MiLCJGRVRDSF9DQVRBTE9HX1NVQ0NFU1MiLCJ0aHVua0ZldGNoQ2F0YWxvZyIsImRpc3BhdGNoIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJzZXRFcnJvciIsIm1lc3NhZ2VzIiwiU0VUX0VSUk9SIiwiaGlkZUVycm9yIiwiSElERV9FUlJPUiIsImRlZmF1bHRTdGF0ZSIsInRvdGFsUHJpY2UiLCJpdGVtcyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInJlZHVjZSIsImFjYyIsImN1ciIsInByaWNlIiwibmV3SXRlbXMiLCJmaWx0ZXIiLCJpIiwibWFwIiwiaXRlbSIsImlzRmV0Y2hlZCIsImlzT3BlbiIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiY2F0YWxvZyIsImNhcnQiLCJlcnJvclJlZHVjZXIiLCJjb21wb3NlRW5oYW5jZXJzIiwicHJvY2VzcyIsIndpbmRvdyIsIl9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyIsImNvbXBvc2UiLCJlbmhhbmNlciIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJBbmNob3IiLCJMaW5rIiwiQ2FydCIsInVzZVNlbGVjdG9yIiwibGVuZ3RoIiwiSXRlbXMiLCJSZWFjdCIsInVzZURpc3BhdGNoIiwicmVtb3ZlIiwicHJvZHVjdCIsInRpdGxlIiwidHJhc2giLCJncmlkTGF5b3V0IiwiZGV2aWNlIiwibW9iaWxlIiwiSXRlbSIsIkNvbHVtbiIsIlRyYXNoIiwiQ2F0YWxvZyIsIm9wZW4iLCJpc0VtcHR5Q2F0YWxvZyIsImNhcnRJdGVtcyIsImFkZCIsImZpbmQiLCJidXR0b25Db250IiwibmFtZSIsInZhaWxkYXRlIiwidmFsdWVzIiwiZXJyb3JzIiwicGFyc2VJbnQiLCJNb2RhbCIsImNsb3NlTW9kYWwiLCJvblN1Ym1pdCIsIkRhdGUiLCJub3ciLCJoYW5kbGVTdWJtaXQiLCJwcmlzdGluZSIsInN1Ym1pdHRpbmciLCJpbnZhbGlkIiwiZm9ybSIsInJlc2V0IiwibWV0YSIsInRvdWNoZWQiLCJDbG9zZU1vZGFsIiwiRXJyb3IiLCJFcnJvck5vdGlmaWNhdGlvbiIsImhhbmRsZUNsb3NlIiwiVGV4dCIsIk1haW4iLCJ0byIsIldyYXBwZXIiLCJTdHlsZWRMaW5rIiwiTmF2aWdhdGlvbiIsIk5vdEZvdW5kIiwiSU5ERVhfUk9VVEUiLCJDQVRBTE9HX1JPVVRFIiwiQ0FSVF9ST1VURSIsIlJvdXRlcyIsInNpemUiLCJtb2JpbGVTIiwidGFibGV0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFF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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sTUFBTUMsTUFBZ0IsR0FBRyxtQkFDOUIsb0RBQUMsOENBQUQ7QUFBZ0IsVUFBUSxlQUFFO0FBQTFCLGdCQUNFLG9EQUFDLG1EQUFELHFCQUNFLG9EQUFDLGtEQUFEO0FBQU8sTUFBSSxFQUFFSCx1REFBYjtBQUEwQixPQUFLLE1BQS9CO0FBQWdDLFdBQVMsRUFBRU4scURBQUlBO0FBQS9DLEVBREYsZUFFRSxvREFBQyxrREFBRDtBQUFPLE1BQUksRUFBRU8seURBQWI7QUFBNEIsT0FBSyxNQUFqQztBQUFrQyxXQUFTLEVBQUVyQyx3REFBT0E7QUFBcEQsRUFGRixlQUdFLG9EQUFDLGtEQUFEO0FBQU8sTUFBSSxFQUFFc0Msc0RBQWI7QUFBeUIsT0FBSyxNQUE5QjtBQUErQixXQUFTLEVBQUV0RCxxREFBSUE7QUFBOUMsRUFIRixlQUlFLG9EQUFDLGtEQUFEO0FBQU8sV0FBUyxFQUFFbUQsMERBQVFBO0FBQTFCLEVBSkYsQ0FERixDQURLLEM7Ozs7Ozs7Ozs7OztBQ1JQO0FBQUE7QUFBQSxNQUFNSyxJQUFJLEdBQUc7QUFDWEMsU0FBTyxFQUFFLE9BREU7QUFFWDdDLFFBQU0sRUFBRSxPQUZHO0FBR1g4QyxRQUFNLEVBQUU7QUFIRyxDQUFiO0FBTU8sTUFBTS9DLE1BQU0sR0FBRztBQUNwQjhDLFNBQU8sRUFBRyxzQkFBcUJELElBQUksQ0FBQ0MsT0FBUSxHQUR4QjtBQUVwQjdDLFFBQU0sRUFBRyxzQkFBcUI0QyxJQUFJLENBQUM1QyxNQUFPLEdBRnRCO0FBR3BCOEMsUUFBTSxFQUFHLHNCQUFxQkYsSUFBSSxDQUFDRSxNQUFPO0FBSHRCLENBQWYsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvcnN+bWFpblwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuY29uc3QgUm9vdCA9IHN0eWxlZC5idXR0b25gXG4gIHdpZHRoOiAyMDBweDtcbiAgcGFkZGluZzogMTNweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6ICM0OGExZTY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuYFxuXG50eXBlIFByb3BzID0gUmVhY3QuQnV0dG9uSFRNTEF0dHJpYnV0ZXM8SFRNTEJ1dHRvbkVsZW1lbnQ+XG5cbmV4cG9ydCBjb25zdCBCdXR0b246IFJlYWN0LkZDPFByb3BzPiA9ICh7IGNoaWxkcmVuLCB0eXBlLCBvbkNsaWNrIH06IFByb3BzKSA9PiAoXG4gIDxSb290IHR5cGU9e3R5cGV9IG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgIHtjaGlsZHJlbn1cbiAgPC9Sb290PlxuKVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5jb25zdCBSb290ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDEyODBweDtcbiAgcGFkZGluZzogMCAyMHB4O1xuYFxuXG50eXBlIFByb3BzID0ge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG59XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXI6IFJlYWN0LkZDID0gKHsgY2hpbGRyZW4gfTogUHJvcHMpID0+IDxSb290PntjaGlsZHJlbn08L1Jvb3Q+XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmludGVyZmFjZSBIZWFkZXJQcm9wcyB7XG4gIHJlYWRvbmx5IGFsaWduPzogJ2F1dG8nIHwgJ2xlZnQnIHwgJ3JpZ2h0JyB8ICdjZW50ZXInXG59XG5cbmNvbnN0IFJvb3QgPSBzdHlsZWQuaDE8SGVhZGVyUHJvcHM+YFxuICBtYXJnaW46IDEwcHggMDtcbiAgZm9udC1zaXplOiAzMnB4O1xuICB0ZXh0LWFsaWduOiAkeyhwcm9wcykgPT4gcHJvcHMuYWxpZ259O1xuYFxuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBIZWFkZXJQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbn1cblxuY29uc3QgSGVhZGVyOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBjaGlsZHJlbiwgYWxpZ24gPSAnbGVmdCcgfTogUHJvcHMpID0+IDxSb290IGFsaWduPXthbGlnbn0+e2NoaWxkcmVufTwvUm9vdD5cblxuSGVhZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWxpZ246ICdsZWZ0Jyxcbn0gYXMgUHJvcHNcblxuZXhwb3J0IHsgSGVhZGVyIH1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuY29uc3QgUm9vdCA9IHN0eWxlZC5pbnB1dGBcbiAgd2lkdGg6IDIwMHB4O1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHNpbHZlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuYFxuXG50eXBlIFByb3BzID0gUmVhY3QuSW5wdXRIVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50PlxuXG5leHBvcnQgY29uc3QgSW5wdXQ6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wczogUHJvcHMpID0+IDxSb290IHsuLi5wcm9wc30gLz5cbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvNjBhMTMzZGY0MTYyZTJmZDE2N2EyODM1MGMzZWZjMmMuc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy85NDFmY2UxNzdiMmY1OTUwZWFiODljY2IwYzEwNjJjMi5zdmdcIjsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgcGx1cyBmcm9tICcuL2Fzc2V0cy9wbHVzLnN2ZydcbmltcG9ydCBtaW51cyBmcm9tICcuL2Fzc2V0cy9taW51cy5zdmcnXG5cbmNvbnN0IFJvb3QgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBoZWlnaHQ6IDI2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbmBcblxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyOiBub25lO1xuICBmbGV4LXNocmluazogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAmOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgJjpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuICAmOmRpc2FibGVkIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB9XG5gXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHF1YW50aXR5OiBudW1iZXJcbiAgaW5jcmVtZW50OiAoKSA9PiB2b2lkXG4gIGRlY3JlbWVudDogKCkgPT4gdm9pZFxufVxuXG5leHBvcnQgY29uc3QgUXVhbnRpdHlDb3VudGVyOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBpbmNyZW1lbnQsIGRlY3JlbWVudCwgcXVhbnRpdHkgfTogUHJvcHMpID0+IChcbiAgPFJvb3Q+XG4gICAgPEJ1dHRvbiBvbkNsaWNrPXtpbmNyZW1lbnR9PlxuICAgICAgPGltZyBzcmM9e3BsdXN9IGFsdD0ncGx1cycgLz5cbiAgICA8L0J1dHRvbj5cbiAgICB7cXVhbnRpdHl9XG4gICAgPEJ1dHRvbiBkaXNhYmxlZD17cXVhbnRpdHkgPD0gMX0gb25DbGljaz17ZGVjcmVtZW50fT5cbiAgICAgIDxpbWcgc3JjPXttaW51c30gYWx0PSdtaW51cycgLz5cbiAgICA8L0J1dHRvbj5cbiAgPC9Sb290PlxuKVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5pbnRlcmZhY2UgSGVhZGVyUHJvcHMge1xuICByZWFkb25seSB0b3A/OiBzdHJpbmdcbiAgcmVhZG9ubHkgbGVmdD86IHN0cmluZ1xuICByZWFkb25seSByaWdodD86IHN0cmluZ1xuICByZWFkb25seSBib3R0b20/OiBzdHJpbmdcbn1cblxuY29uc3QgUm9vdCA9IHN0eWxlZC5kaXY8SGVhZGVyUHJvcHM+YFxuICBkaXNwbGF5OiBibG9jaztcbiAgJHsoeyB0b3AgfSkgPT5cbiAgICB0b3AgJiZcbiAgICBjc3NgXG4gICAgICBwYWRkaW5nLXRvcDogJHt0b3B9cHg7XG4gICAgYH1cbiAgJHsoeyBsZWZ0IH0pID0+XG4gICAgbGVmdCAmJlxuICAgIGNzc2BcbiAgICAgIHBhZGRpbmctbGVmdDogJHtsZWZ0fXB4O1xuICAgIGB9O1xuICAkeyh7IHJpZ2h0IH0pID0+XG4gICAgcmlnaHQgJiZcbiAgICBjc3NgXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAke3JpZ2h0fXB4O1xuICAgIGB9O1xuICAkeyh7IGJvdHRvbSB9KSA9PlxuICAgIGJvdHRvbSAmJlxuICAgIGNzc2BcbiAgICAgIHBhZGRpbmctYm90dG9tOiAke2JvdHRvbX1weDtcbiAgICBgfTtcbmBcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgSGVhZGVyUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG59XG5cbmNvbnN0IFNwYWNlcjogUmVhY3QuRkM8UHJvcHM+ID0gKHsgY2hpbGRyZW4sIHRvcCwgbGVmdCwgYm90dG9tLCByaWdodCB9OiBQcm9wcykgPT4gKFxuICA8Um9vdCB0b3A9e3RvcH0gbGVmdD17bGVmdH0gYm90dG9tPXtib3R0b219IHJpZ2h0PXtyaWdodH0+XG4gICAge2NoaWxkcmVufVxuICA8L1Jvb3Q+XG4pXG5cblNwYWNlci5kZWZhdWx0UHJvcHMgPSB7XG4gIHRvcDogJzAnLFxuICBsZWZ0OiAnMCcsXG4gIHJpZ2h0OiAnMCcsXG4gIGJvdHRvbTogJzAnLFxufSBhcyBQcm9wc1xuXG5leHBvcnQgeyBTcGFjZXIgfVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHsgSUNhcnRBY3Rpb25zIH0gZnJvbSAnLi4vdHlwZXMvY2FydCdcbmltcG9ydCB7XG4gIEFERF9UT19DQVJULFxuICBSRU1PVkVfRlJPTV9DQVJULFxuICBJTkNSRU1FTlRfQ0FSVF9JVEVNLFxuICBERUNSRU1FTlRfQ0FSVF9JVEVNLFxuICBTRVRfVE9UQUxfUFJJQ0UsXG59IGZyb20gJy4uL2NvbnN0YW50cy9jYXJ0J1xuaW1wb3J0IHsgSVByb2R1Y3QgfSBmcm9tICdAL3R5cGVzL21vZGVscy9jYXRhbG9nJ1xuXG5leHBvcnQgY29uc3Qgc2V0VG90YWxQcmljZSA9ICgpOiBJQ2FydEFjdGlvbnMgPT4gKHtcbiAgdHlwZTogU0VUX1RPVEFMX1BSSUNFLFxufSlcblxuZXhwb3J0IGNvbnN0IGFkZFRvQ2FydCA9IChyZXM6IElQcm9kdWN0KTogSUNhcnRBY3Rpb25zID0+ICh7XG4gIHR5cGU6IEFERF9UT19DQVJULFxuICBwYXlsb2FkOiByZXMsXG59KVxuXG5leHBvcnQgY29uc3QgcmVtb3ZlRnJvbUNhcnQgPSAoaWQ6IG51bWJlcik6IElDYXJ0QWN0aW9ucyA9PiAoe1xuICB0eXBlOiBSRU1PVkVfRlJPTV9DQVJULFxuICBwYXlsb2FkOiBpZCxcbn0pXG5cbmV4cG9ydCBjb25zdCBpbmNyZW1lbnRDYXJ0SXRlbSA9IChpZDogbnVtYmVyKTogSUNhcnRBY3Rpb25zID0+ICh7XG4gIHR5cGU6IElOQ1JFTUVOVF9DQVJUX0lURU0sXG4gIHBheWxvYWQ6IGlkLFxufSlcblxuZXhwb3J0IGNvbnN0IGRlY3JlbWVudENhcnRJdGVtID0gKGlkOiBudW1iZXIpOiBJQ2FydEFjdGlvbnMgPT4gKHtcbiAgdHlwZTogREVDUkVNRU5UX0NBUlRfSVRFTSxcbiAgcGF5bG9hZDogaWQsXG59KVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgeyBUaHVua0FjdGlvbiB9IGZyb20gJ3JlZHV4LXRodW5rJ1xuaW1wb3J0IHsgSVByb2R1Y3QgfSBmcm9tICdAL3R5cGVzL21vZGVscy9jYXRhbG9nJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgSUNhdGFsb2dTdGF0ZSwgSUNhdGFsb2dBY3Rpb25zIH0gZnJvbSAnLi4vdHlwZXMvY2F0YWxvZydcbmltcG9ydCB7IEZFVENIX0NBVEFMT0csIEZFVENIX0NBVEFMT0dfU1VDQ0VTUywgQUREX1RPX0NBVEFMT0cgfSBmcm9tICcuLi9jb25zdGFudHMvY2F0YWxvZydcbmltcG9ydCB7IHNldEVycm9yIH0gZnJvbSAnLi9lcnJvcidcblxuZXhwb3J0IGNvbnN0IGZldGNoQ2F0YWxvZyA9ICgpOiBJQ2F0YWxvZ0FjdGlvbnMgPT4gKHtcbiAgdHlwZTogRkVUQ0hfQ0FUQUxPRyxcbn0pXG5cbmV4cG9ydCBjb25zdCBhZGRUb0NhdGFsb2cgPSAocGF5bG9hZDogSVByb2R1Y3QpOiBJQ2F0YWxvZ0FjdGlvbnMgPT4gKHtcbiAgdHlwZTogQUREX1RPX0NBVEFMT0csXG4gIHBheWxvYWQsXG59KVxuXG5leHBvcnQgY29uc3QgZmV0Y2hDYXRhbG9nU3VjY2VzcyA9IChyZXM6IElQcm9kdWN0W10pOiBJQ2F0YWxvZ0FjdGlvbnMgPT4gKHtcbiAgdHlwZTogRkVUQ0hfQ0FUQUxPR19TVUNDRVNTLFxuICBwYXlsb2FkOiByZXMsXG59KVxuXG5leHBvcnQgY29uc3QgdGh1bmtGZXRjaENhdGFsb2cgPSAoKTogVGh1bmtBY3Rpb248dm9pZCwgSUNhdGFsb2dTdGF0ZSwgdW5rbm93biwgQWN0aW9uPiA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goZmV0Y2hDYXRhbG9nKCkpXG4gIHJldHVybiBheGlvc1xuICAgIC5nZXQ8SVByb2R1Y3RbXT4oJ2h0dHBzOi8vcnVuLm1vY2t5LmlvL3YzLzQ3NTZlNzQwLTkwYTAtNGU4MC05ZmUxLWY5MTZkZWVmNWRlZCcpXG4gICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgZGlzcGF0Y2goZmV0Y2hDYXRhbG9nU3VjY2VzcyhyZXMuZGF0YSkpXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBkaXNwYXRjaChzZXRFcnJvcihlcnJvci5tZXNzYWdlcyB8fCAnc29tZXRoaW5nIGdldCB3cm9uZyA6KCcpKVxuICAgIH0pXG59XG4iLCJpbXBvcnQgeyBJRXJyb3JBY3Rpb25zIH0gZnJvbSAnLi4vdHlwZXMvZXJyb3InXG5pbXBvcnQgeyBTRVRfRVJST1IsIEhJREVfRVJST1IgfSBmcm9tICcuLi9jb25zdGFudHMvZXJyb3InXG5cbmV4cG9ydCBjb25zdCBzZXRFcnJvciA9IChlcnJvcjogc3RyaW5nKTogSUVycm9yQWN0aW9ucyA9PiAoe1xuICB0eXBlOiBTRVRfRVJST1IsXG4gIGVycm9yLFxufSlcblxuZXhwb3J0IGNvbnN0IGhpZGVFcnJvciA9ICgpOiBJRXJyb3JBY3Rpb25zID0+ICh7XG4gIHR5cGU6IEhJREVfRVJST1IsXG59KVxuIiwiZXhwb3J0IGNvbnN0IEFERF9UT19DQVJUID0gJ0BDQVJUL0FERCdcbmV4cG9ydCBjb25zdCBSRU1PVkVfRlJPTV9DQVJUID0gJ0BDQVJUL1JFTU9WRSdcbmV4cG9ydCBjb25zdCBJTkNSRU1FTlRfQ0FSVF9JVEVNID0gJ0BDQVJUL0lOQ1JFTUVOVF9JVEVNJ1xuZXhwb3J0IGNvbnN0IERFQ1JFTUVOVF9DQVJUX0lURU0gPSAnQENBUlQvREVDUkVNRU5UX0lURU0nXG5leHBvcnQgY29uc3QgU0VUX1RPVEFMX1BSSUNFID0gJ0BDQVJUL1NFVF9UT1RBTF9QUklDRSdcbiIsImV4cG9ydCBjb25zdCBGRVRDSF9DQVRBTE9HID0gJ0BDQVRBTE9HL0ZFVENIJ1xuZXhwb3J0IGNvbnN0IEZFVENIX0NBVEFMT0dfU1VDQ0VTUyA9ICdAQ0FUQUxPRy9GRVRDSF9DQVRBTE9HX1NVQ0NFU1MnXG5leHBvcnQgY29uc3QgQUREX1RPX0NBVEFMT0cgPSAnQENBVEFMT0cvQUREX1RPX0NBVEFMT0cnXG4iLCJleHBvcnQgY29uc3QgU0VUX0VSUk9SID0gJ1NFVF9FUlJPUidcbmV4cG9ydCBjb25zdCBISURFX0VSUk9SID0gJ0hJREVfRVJST1InXG4iLCJpbXBvcnQgeyBJQ2FydFN0YXRlLCBJQ2FydEFjdGlvbnMgfSBmcm9tICcuLi90eXBlcy9jYXJ0J1xuaW1wb3J0IHtcbiAgU0VUX1RPVEFMX1BSSUNFLFxuICBBRERfVE9fQ0FSVCxcbiAgUkVNT1ZFX0ZST01fQ0FSVCxcbiAgSU5DUkVNRU5UX0NBUlRfSVRFTSxcbiAgREVDUkVNRU5UX0NBUlRfSVRFTSxcbn0gZnJvbSAnLi4vY29uc3RhbnRzL2NhcnQnXG5pbXBvcnQgeyBJQ2FydEl0ZW0gfSBmcm9tICdAL3R5cGVzL21vZGVscy9jYXJ0J1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFN0YXRlOiBJQ2FydFN0YXRlID0ge1xuICB0b3RhbFByaWNlOiAwLFxuICBpdGVtczogW10sXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlOiBJQ2FydFN0YXRlID0gZGVmYXVsdFN0YXRlLCBhY3Rpb246IElDYXJ0QWN0aW9ucyk6IElDYXJ0U3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICAgIGNhc2UgU0VUX1RPVEFMX1BSSUNFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHRvdGFsUHJpY2U6IHN0YXRlLml0ZW1zLnJlZHVjZSgoYWNjLCBjdXIpID0+IGFjYyArIGN1ci5wcmljZSAqIGN1ci5xdWFudGl0eSwgMCksXG4gICAgICB9XG4gICAgY2FzZSBBRERfVE9fQ0FSVDpcbiAgICAgIGNvbnN0IG5ld0l0ZW1zID0gW3sgLi4uYWN0aW9uLnBheWxvYWQsIHF1YW50aXR5OiAxIH0sIC4uLnN0YXRlLml0ZW1zXVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGl0ZW1zOiBuZXdJdGVtcyxcbiAgICAgICAgdG90YWxQcmljZTogbmV3SXRlbXMucmVkdWNlKChhY2MsIGN1cikgPT4gYWNjICsgY3VyLnByaWNlLCAwKSxcbiAgICAgIH1cbiAgICBjYXNlIFJFTU9WRV9GUk9NX0NBUlQ6XG4gICAgICBjb25zdCBpdGVtcyA9IHN0YXRlLml0ZW1zLmZpbHRlcigoaSkgPT4gaS5pZCAhPT0gYWN0aW9uLnBheWxvYWQpXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXRlbXM6IGl0ZW1zLFxuICAgICAgICB0b3RhbFByaWNlOiBpdGVtcy5yZWR1Y2UoKGFjYywgY3VyKSA9PiBhY2MgKyBjdXIucHJpY2UsIDApLFxuICAgICAgfVxuICAgIGNhc2UgSU5DUkVNRU5UX0NBUlRfSVRFTTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpdGVtczogc3RhdGUuaXRlbXMubWFwKChpdGVtOiBJQ2FydEl0ZW0pID0+IHtcbiAgICAgICAgICBpZiAoaXRlbS5pZCA9PT0gYWN0aW9uLnBheWxvYWQpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHF1YW50aXR5OiBpdGVtLnF1YW50aXR5KyssXG4gICAgICAgICAgICAgIC4uLml0ZW0sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGl0ZW1cbiAgICAgICAgfSksXG4gICAgICB9XG4gICAgY2FzZSBERUNSRU1FTlRfQ0FSVF9JVEVNOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGl0ZW1zOiBzdGF0ZS5pdGVtcy5tYXAoKGl0ZW06IElDYXJ0SXRlbSkgPT4ge1xuICAgICAgICAgIGlmIChpdGVtLmlkID09PSBhY3Rpb24ucGF5bG9hZCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgcXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHktLSxcbiAgICAgICAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gaXRlbVxuICAgICAgICB9KSxcbiAgICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgSUNhdGFsb2dTdGF0ZSwgSUNhdGFsb2dBY3Rpb25zIH0gZnJvbSAnLi4vdHlwZXMvY2F0YWxvZydcbmltcG9ydCB7IEFERF9UT19DQVRBTE9HLCBGRVRDSF9DQVRBTE9HLCBGRVRDSF9DQVRBTE9HX1NVQ0NFU1MgfSBmcm9tICcuLi9jb25zdGFudHMvY2F0YWxvZydcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRTdGF0ZTogSUNhdGFsb2dTdGF0ZSA9IHtcbiAgaXNGZXRjaGVkOiBmYWxzZSxcbiAgaXRlbXM6IFtdLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZTogSUNhdGFsb2dTdGF0ZSA9IGRlZmF1bHRTdGF0ZSwgYWN0aW9uOiBJQ2F0YWxvZ0FjdGlvbnMpOiBJQ2F0YWxvZ1N0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgICBjYXNlIEZFVENIX0NBVEFMT0c6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNGZXRjaGVkOiB0cnVlLFxuICAgICAgfVxuICAgIGNhc2UgQUREX1RPX0NBVEFMT0c6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXRlbXM6IFthY3Rpb24ucGF5bG9hZCwgLi4uc3RhdGUuaXRlbXNdLFxuICAgICAgfVxuICAgIGNhc2UgRkVUQ0hfQ0FUQUxPR19TVUNDRVNTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGl0ZW1zOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgaXNGZXRjaGVkOiBmYWxzZSxcbiAgICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgSElERV9FUlJPUiwgU0VUX0VSUk9SIH0gZnJvbSAnLi4vY29uc3RhbnRzL2Vycm9yJ1xuaW1wb3J0IHsgSUVycm9yU3RhdGUsIElFcnJvckFjdGlvbnMgfSBmcm9tICcuLi90eXBlcy9lcnJvcidcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRTdGF0ZTogSUVycm9yU3RhdGUgPSB7XG4gIGVycm9yOiBudWxsLFxuICBpc09wZW46IGZhbHNlLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZTogSUVycm9yU3RhdGUgPSBkZWZhdWx0U3RhdGUsIGFjdGlvbjogSUVycm9yQWN0aW9ucyk6IElFcnJvclN0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgICBjYXNlIEhJREVfRVJST1I6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgIGlzT3BlbjogZmFsc2UsXG4gICAgICB9XG4gICAgY2FzZSBTRVRfRVJST1I6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZXJyb3I6IGFjdGlvbi5lcnJvcixcbiAgICAgICAgaXNPcGVuOiB0cnVlLFxuICAgICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7IHJlZHVjZXIgYXMgY2F0YWxvZyB9IGZyb20gJy4vY2F0YWxvZydcbmltcG9ydCB7IHJlZHVjZXIgYXMgY2FydCB9IGZyb20gJy4vY2FydCdcbmltcG9ydCB7IHJlZHVjZXIgYXMgZXJyb3JSZWR1Y2VyIH0gZnJvbSAnLi9lcnJvcidcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoeyBjYXRhbG9nLCBjYXJ0LCBlcnJvclJlZHVjZXIgfSlcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXJcbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCdcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuL3JlZHVjZXJzJ1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJ1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG5jb25zdCBjb21wb3NlRW5oYW5jZXJzID1cbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJlxuICAod2luZG93IGFzIGFueSkuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fXG4gICAgPyAod2luZG93IGFzIGFueSkuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fXG4gICAgOiBjb21wb3NlXG4vKiBlc2xpbnQtZW5hYmxlICovXG5cbmNvbnN0IGVuaGFuY2VyID0gYXBwbHlNaWRkbGV3YXJlKC4uLlt0aHVua10pXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBjb21wb3NlRW5oYW5jZXJzKGVuaGFuY2VyKSlcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmVcbiIsImltcG9ydCAncmVhY3QtYXBwLXBvbHlmaWxsL2llMTEnXG5pbXBvcnQgJ3JlYWN0LWFwcC1wb2x5ZmlsbC9zdGFibGUnXG5pbXBvcnQgJ2NvcmUtanMvZXM2L21hcCdcbmltcG9ydCAnY29yZS1qcy9lczYvc2V0J1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgSGFzaFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAL3JvdXRlcydcbmltcG9ydCAnQC9jb21wb25lbnRzL3R5cG9ncmFwaHkvZm9udC5jc3MnXG5pbXBvcnQgJ0AvY29tcG9uZW50cy9sYXlvdXQvYm9keS5jc3MnXG5pbXBvcnQgc3RvcmUgZnJvbSAnQC9jb3JlL3N0b3JlJ1xuaW1wb3J0IHsgTmF2aWdhdGlvbiB9IGZyb20gJy4vbW9kdWxlcy9uYXZpZ2F0aW9uJ1xuaW1wb3J0IHsgRXJyb3JOb3RpZmljYXRpb24gfSBmcm9tICcuL21vZHVsZXMvZXJyb3Itbm90aWZpY2F0aW9ucydcbmltcG9ydCAnbm9ybWFsaXplLmNzcydcblxuLy8gSGFzaFJvdXRlciDRgtC+0LvRjNC60L4g0L/QvtGC0L7QvNGDLCDRh9GC0L4g0Y3RgtC+INGD0YXQvtC00LjRgiDQvdCwIGdpdGh1YiBwYWdlc1xuZXhwb3J0IGNvbnN0IFJvb3Q6IFJlYWN0LkZDID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgIDxIYXNoUm91dGVyPlxuICAgICAgICAgIDxOYXZpZ2F0aW9uIC8+XG4gICAgICAgICAgPEVycm9yTm90aWZpY2F0aW9uIC8+XG4gICAgICAgICAgPFJvdXRlcyAvPlxuICAgICAgICA8L0hhc2hSb3V0ZXI+XG4gICAgICA8L1Byb3ZpZGVyPlxuICAgIDwvUmVhY3QuU3RyaWN0TW9kZT5cbiAgKVxufVxuXG5yZW5kZXIoPFJvb3QgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvYXRvbXMvQ29udGFpbmVyJ1xuaW1wb3J0IHsgU3BhY2VyIH0gZnJvbSAnQC9jb21wb25lbnRzL2F0b21zL1NwYWNlcidcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJ0AvY29tcG9uZW50cy9hdG9tcy9IZWFkZXInXG5pbXBvcnQgeyBJQ2FydFN0YXRlIH0gZnJvbSAnQC9jb3JlL3R5cGVzL2NhcnQnXG5pbXBvcnQgeyBJdGVtcyB9IGZyb20gJy4vaXRlbXMnXG5cbmNvbnN0IEFuY2hvciA9IHN0eWxlZChMaW5rKWBcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmx1ZTtcbiAgJjpob3ZlciB7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuYFxuXG5pbnRlcmZhY2UgUm9vdFN0YXRlIHtcbiAgY2FydDogSUNhcnRTdGF0ZVxufVxuXG5jb25zdCBDYXJ0OiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgY2FydCA9IHVzZVNlbGVjdG9yKChzdG9yZTogUm9vdFN0YXRlKSA9PiBzdG9yZS5jYXJ0KVxuICBpZiAoY2FydC5pdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFNwYWNlciB0b3A9JzIwJyBib3R0b209JzEwJz5cbiAgICAgICAgICA8SGVhZGVyPkNhcnQgaXMgZW1wdHkgOig8L0hlYWRlcj5cbiAgICAgICAgPC9TcGFjZXI+XG4gICAgICAgIDxBbmNob3IgdG89Jy9jYXRhbG9nJz5HbyB0byBjYXRhbG9nIOKGkjwvQW5jaG9yPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFNwYWNlciB0b3A9JzIwJz5cbiAgICAgICAgPEhlYWRlciBhbGlnbj0nY2VudGVyJz5Zb3VyIGNhcnQ8L0hlYWRlcj5cbiAgICAgIDwvU3BhY2VyPlxuICAgICAgPFNwYWNlciB0b3A9JzIwJyBib3R0b209JzIwJz5cbiAgICAgICAgPEl0ZW1zIGl0ZW1zPXtjYXJ0Lml0ZW1zfSAvPlxuICAgICAgPC9TcGFjZXI+XG4gICAgICA8U3BhY2VyIHRvcD0nMjAnPnRvdGFsIHByaWNlOiB7Y2FydC50b3RhbFByaWNlfTwvU3BhY2VyPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcnRcbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvODk3NjFmOTYzY2U2ZTcxYmMzMTcwNjFhYzBiNzJlZWUuc3ZnXCI7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgSUNhcnRJdGVtIH0gZnJvbSAnQC90eXBlcy9tb2RlbHMvY2FydCdcbmltcG9ydCB7IElDYXJ0U3RhdGUgfSBmcm9tICdAL2NvcmUvdHlwZXMvY2FydCdcbmltcG9ydCB7IGluY3JlbWVudENhcnRJdGVtLCBkZWNyZW1lbnRDYXJ0SXRlbSwgcmVtb3ZlRnJvbUNhcnQsIHNldFRvdGFsUHJpY2UgfSBmcm9tICdAL2NvcmUvYWN0aW9ucy9jYXJ0J1xuaW1wb3J0IHsgUXVhbnRpdHlDb3VudGVyIH0gZnJvbSAnQC9jb21wb25lbnRzL2F0b21zL1F1YW50aXR5Q291bnRlcidcbmltcG9ydCB0cmFzaCBmcm9tICcuL2Fzc2V0cy90cmFzaC5zdmcnXG5pbXBvcnQgKiBhcyBTdHlsZWQgZnJvbSAnLi9zdHlsZWQnXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGl0ZW1zOiBJQ2FydEl0ZW1bXVxufVxuXG5pbnRlcmZhY2UgUm9vdFN0YXRlIHtcbiAgY2FydDogSUNhcnRTdGF0ZVxufVxuXG5leHBvcnQgY29uc3QgSXRlbXM6IFJlYWN0LkZDPFByb3BzPiA9IFJlYWN0Lm1lbW8oZnVuY3Rpb24gSXRlbXMoeyBpdGVtcyB9OiBQcm9wcykge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcbiAgY29uc3QgcmVtb3ZlID0gUmVhY3QudXNlQ2FsbGJhY2soKGlkOiBudW1iZXIpID0+IHtcbiAgICBkaXNwYXRjaChyZW1vdmVGcm9tQ2FydChpZCkpXG4gICAgZGlzcGF0Y2goc2V0VG90YWxQcmljZSgpKVxuICB9LCBbXSlcblxuICBjb25zdCBpbmNyZW1lbnQgPSBSZWFjdC51c2VDYWxsYmFjaygoaWQ6IG51bWJlcikgPT4ge1xuICAgIGRpc3BhdGNoKGluY3JlbWVudENhcnRJdGVtKGlkKSlcbiAgICBkaXNwYXRjaChzZXRUb3RhbFByaWNlKCkpXG4gIH0sIFtdKVxuXG4gIGNvbnN0IGRlY3JlbWVudCA9IFJlYWN0LnVzZUNhbGxiYWNrKChpZDogbnVtYmVyKSA9PiB7XG4gICAgZGlzcGF0Y2goZGVjcmVtZW50Q2FydEl0ZW0oaWQpKVxuICAgIGRpc3BhdGNoKHNldFRvdGFsUHJpY2UoKSlcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFN0eWxlZC5IZWFkZXI+XG4gICAgICAgIDxTdHlsZWQuQ29sdW1uPnRpdGxlPC9TdHlsZWQuQ29sdW1uPlxuICAgICAgICA8U3R5bGVkLkNvbHVtbiByaWdodD5wcmljZTwvU3R5bGVkLkNvbHVtbj5cbiAgICAgICAgPFN0eWxlZC5Db2x1bW4gcmlnaHQ+cXVhbnRpdHk8L1N0eWxlZC5Db2x1bW4+XG4gICAgICA8L1N0eWxlZC5IZWFkZXI+XG4gICAgICB7aXRlbXMubWFwKChwcm9kdWN0OiBJQ2FydEl0ZW0pID0+IChcbiAgICAgICAgPFN0eWxlZC5JdGVtIGtleT17YCR7cHJvZHVjdC50aXRsZX1gfT5cbiAgICAgICAgICA8U3R5bGVkLkNvbHVtbj57cHJvZHVjdC50aXRsZX08L1N0eWxlZC5Db2x1bW4+XG4gICAgICAgICAgPFN0eWxlZC5Db2x1bW4gcmlnaHQ+e3Byb2R1Y3QucHJpY2V9IC8gJDwvU3R5bGVkLkNvbHVtbj5cbiAgICAgICAgICA8U3R5bGVkLkNvbHVtbiByaWdodCBxdWFudGl0eT5cbiAgICAgICAgICAgIDxRdWFudGl0eUNvdW50ZXJcbiAgICAgICAgICAgICAgaW5jcmVtZW50PXsoKSA9PiBpbmNyZW1lbnQocHJvZHVjdC5pZCl9XG4gICAgICAgICAgICAgIGRlY3JlbWVudD17KCkgPT4gZGVjcmVtZW50KHByb2R1Y3QuaWQpfVxuICAgICAgICAgICAgICBxdWFudGl0eT17cHJvZHVjdC5xdWFudGl0eX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9TdHlsZWQuQ29sdW1uPlxuICAgICAgICAgIDxTdHlsZWQuQ29sdW1uIHJpZ2h0PlxuICAgICAgICAgICAgPFN0eWxlZC5UcmFzaCBvbkNsaWNrPXsoKSA9PiByZW1vdmUocHJvZHVjdC5pZCl9PlxuICAgICAgICAgICAgICA8aW1nIHNyYz17dHJhc2h9IGFsdD0ndHJhc2gnIC8+XG4gICAgICAgICAgICA8L1N0eWxlZC5UcmFzaD5cbiAgICAgICAgICA8L1N0eWxlZC5Db2x1bW4+XG4gICAgICAgIDwvU3R5bGVkLkl0ZW0+XG4gICAgICApKX1cbiAgICA8Lz5cbiAgKVxufSlcbiIsImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBkZXZpY2UgfSBmcm9tICdAL3V0aWxzL3N0eWxlZCdcblxuZXhwb3J0IGNvbnN0IGdyaWRMYXlvdXQgPSBjc3NgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcikgNTBweDtcbiAgZ3JpZC1nYXA6IDEwcHg7XG4gIC5yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbiAgJHtkZXZpY2UubW9iaWxlfSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZ3JpZC1nYXA6IDA7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICR7Z3JpZExheW91dH1cbiAgJHtkZXZpY2UubW9iaWxlfSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgSXRlbSA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMzMzMztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgJHtncmlkTGF5b3V0fVxuICAmOjpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IENvbHVtbiA9IHN0eWxlZC5kaXY8eyByaWdodD86IGJvb2xlYW47IHF1YW50aXR5PzogYm9vbGVhbiB9PmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiAkeyh7IHJpZ2h0IH0pID0+IChyaWdodCA/ICdmbGV4LWVuZCcgOiAnZmxleC1zdGFydCcpfTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgJHtkZXZpY2UubW9iaWxlfSB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAke2RldmljZS5tb2JpbGV9IHtcbiAgICAmOm50aC1jaGlsZCgzKSxcbiAgICAmOm50aC1jaGlsZCg0KSB7XG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICB9XG4gIH1cbiAgJHsoeyBxdWFudGl0eSB9KSA9PlxuICAgIHF1YW50aXR5ICYmXG4gICAgY3NzYFxuICAgICAgJHtkZXZpY2UubW9iaWxlfSB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIH1cbiAgICBgfVxuYFxuXG5leHBvcnQgY29uc3QgVHJhc2ggPSBzdHlsZWQuZGl2YFxuICBjdXJzb3I6IHBvaW50ZXI7XG5gXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgSUNhdGFsb2dTdGF0ZSB9IGZyb20gJ0AvY29yZS90eXBlcy9jYXRhbG9nJ1xuaW1wb3J0IHsgdGh1bmtGZXRjaENhdGFsb2cgfSBmcm9tICdAL2NvcmUvYWN0aW9ucy9jYXRhbG9nJ1xuaW1wb3J0IHsgU3BhY2VyIH0gZnJvbSAnQC9jb21wb25lbnRzL2F0b21zL1NwYWNlcidcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJ0AvY29tcG9uZW50cy9hdG9tcy9IZWFkZXInXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAL2NvbXBvbmVudHMvYXRvbXMvQnV0dG9uJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQC9jb21wb25lbnRzL2F0b21zL0NvbnRhaW5lcidcbmltcG9ydCB7IEl0ZW1zIH0gZnJvbSAnLi9pdGVtcydcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnLi9tb2RhbCdcblxuaW50ZXJmYWNlIFJvb3RTdGF0ZSB7XG4gIGNhdGFsb2c6IElDYXRhbG9nU3RhdGVcbn1cblxuY29uc3QgQ2F0YWxvZzogUmVhY3QuRkMgPSBSZWFjdC5tZW1vKGZ1bmN0aW9uIENhdGFsb2coKSB7XG4gIGNvbnN0IFtpc09wZW4sIG9wZW5dID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuICBjb25zdCB7IGl0ZW1zIH0gPSB1c2VTZWxlY3Rvcigoc3RvcmU6IFJvb3RTdGF0ZSkgPT4gc3RvcmUuY2F0YWxvZylcbiAgY29uc3QgaXNFbXB0eUNhdGFsb2cgPSBpdGVtcy5sZW5ndGggPT09IDBcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNFbXB0eUNhdGFsb2cpIHtcbiAgICAgIGRpc3BhdGNoKHRodW5rRmV0Y2hDYXRhbG9nKCkpXG4gICAgfVxuICB9LCBbXSlcblxuICBpZiAoaXNFbXB0eUNhdGFsb2cpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFNwYWNlciB0b3A9JzIwJz5cbiAgICAgICAgPEhlYWRlciBhbGlnbj0nY2VudGVyJz5TdG9jayBvZiB0aGUgY29tcGFuaWVzPC9IZWFkZXI+XG4gICAgICA8L1NwYWNlcj5cbiAgICAgIDxTcGFjZXIgdG9wPScyMCcgYm90dG9tPScyMCc+XG4gICAgICAgIDxJdGVtcyBpdGVtcz17aXRlbXN9IC8+XG4gICAgICA8L1NwYWNlcj5cbiAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gb3Blbih0cnVlKX0+YWRkIHN0b2NrPC9CdXR0b24+XG4gICAgICB7aXNPcGVuICYmIDxNb2RhbCBjbG9zZU1vZGFsPXsoKSA9PiBvcGVuKGZhbHNlKX0gLz59XG4gICAgPC9Db250YWluZXI+XG4gIClcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IENhdGFsb2dcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBJUHJvZHVjdCB9IGZyb20gJ0AvdHlwZXMvbW9kZWxzL2NhdGFsb2cnXG5pbXBvcnQgeyBJQ2FydFN0YXRlIH0gZnJvbSAnQC9jb3JlL3R5cGVzL2NhcnQnXG5pbXBvcnQgeyBhZGRUb0NhcnQsIHNldFRvdGFsUHJpY2UgfSBmcm9tICdAL2NvcmUvYWN0aW9ucy9jYXJ0J1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQC9jb21wb25lbnRzL2F0b21zL0J1dHRvbidcbmltcG9ydCAqIGFzIFN0eWxlZCBmcm9tICcuL3N0eWxlZCdcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgaXRlbXM6IElQcm9kdWN0W11cbn1cblxuaW50ZXJmYWNlIFJvb3RTdGF0ZSB7XG4gIGNhcnQ6IElDYXJ0U3RhdGVcbn1cblxuZXhwb3J0IGNvbnN0IEl0ZW1zOiBSZWFjdC5GQzxQcm9wcz4gPSBSZWFjdC5tZW1vKGZ1bmN0aW9uIEl0ZW1zKHsgaXRlbXMgfTogUHJvcHMpIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXG4gIGNvbnN0IGNhcnRJdGVtcyA9IHVzZVNlbGVjdG9yKChzdG9yZTogUm9vdFN0YXRlKSA9PiBzdG9yZS5jYXJ0Lml0ZW1zKVxuICBjb25zdCBhZGQgPSBSZWFjdC51c2VDYWxsYmFjaygocHJvZHVjdDogSVByb2R1Y3QpID0+IHtcbiAgICBkaXNwYXRjaChhZGRUb0NhcnQocHJvZHVjdCkpXG4gICAgZGlzcGF0Y2goc2V0VG90YWxQcmljZSgpKVxuICB9LCBbXSlcblxuICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbFxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTdHlsZWQuSGVhZGVyPlxuICAgICAgICA8U3R5bGVkLkNvbHVtbj50aXRsZTwvU3R5bGVkLkNvbHVtbj5cbiAgICAgICAgPFN0eWxlZC5Db2x1bW4gcmlnaHQ+cHJpY2U8L1N0eWxlZC5Db2x1bW4+XG4gICAgICA8L1N0eWxlZC5IZWFkZXI+XG4gICAgICB7aXRlbXMubWFwKChwcm9kdWN0OiBJUHJvZHVjdCkgPT4gKFxuICAgICAgICA8U3R5bGVkLkl0ZW0ga2V5PXtgJHtwcm9kdWN0LnRpdGxlfWB9PlxuICAgICAgICAgIDxTdHlsZWQuQ29sdW1uPntwcm9kdWN0LnRpdGxlfTwvU3R5bGVkLkNvbHVtbj5cbiAgICAgICAgICA8U3R5bGVkLkNvbHVtbiByaWdodD57cHJvZHVjdC5wcmljZX0gLyAkPC9TdHlsZWQuQ29sdW1uPlxuICAgICAgICAgIDxTdHlsZWQuQ29sdW1uIGJ1dHRvbkNvbnQgcmlnaHQ+XG4gICAgICAgICAgICB7Y2FydEl0ZW1zLmZpbmQoKGk6IElQcm9kdWN0KSA9PiBpLmlkID09PSBwcm9kdWN0LmlkKSA/IChcbiAgICAgICAgICAgICAgJ0FkZGVkJ1xuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBhZGQocHJvZHVjdCl9PkFkZCB0byBDYXJ0PC9CdXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvU3R5bGVkLkNvbHVtbj5cbiAgICAgICAgPC9TdHlsZWQuSXRlbT5cbiAgICAgICkpfVxuICAgIDwvPlxuICApXG59KVxuIiwiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IGRldmljZSB9IGZyb20gJ0AvdXRpbHMvc3R5bGVkJ1xuXG5leHBvcnQgY29uc3QgZ3JpZExheW91dCA9IGNzc2BcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLnJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuICAke2RldmljZS5tb2JpbGV9IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAwIDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAke2dyaWRMYXlvdXR9XG4gICR7ZGV2aWNlLm1vYmlsZX0ge1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgSXRlbSA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMzMzMztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgJHtncmlkTGF5b3V0fVxuICAmOjpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gICR7ZGV2aWNlLm1vYmlsZX0ge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IENvbHVtbiA9IHN0eWxlZC5kaXY8eyByaWdodD86IGJvb2xlYW47IGJ1dHRvbkNvbnQ/OiBib29sZWFuIH0+YFxuICB3aWR0aDogMzMlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICR7KHsgcmlnaHQgfSkgPT4gKHJpZ2h0ID8gJ2ZsZXgtZW5kJyA6ICdmbGV4LXN0YXJ0Jyl9O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAkeyh7IGJ1dHRvbkNvbnQgfSkgPT5cbiAgICBidXR0b25Db250ICYmXG4gICAgY3NzYFxuICAgICAgJHtkZXZpY2UubW9iaWxlfSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICB9XG4gICAgYH1cbmBcbiIsImV4cG9ydCBkZWZhdWx0IFtcbiAge1xuICAgIG5hbWU6ICd0aXRsZScsXG4gICAgdHlwZTogJ3RleHQnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ3ByaWNlJyxcbiAgICB0eXBlOiAnbnVtYmVyJyxcbiAgfSxcbl1cbiIsImltcG9ydCB0eXBlIHsgVmFsdWVzLCBFcnJvcnMgfSBmcm9tICcuL3R5cGVzJ1xuXG5leHBvcnQgY29uc3QgdmFpbGRhdGUgPSAodmFsdWVzOiBWYWx1ZXMpOiBFcnJvcnMgPT4ge1xuICBjb25zdCBlcnJvcnM6IEVycm9ycyA9IHt9XG4gIGlmICghdmFsdWVzLnRpdGxlKSB7XG4gICAgZXJyb3JzLnRpdGxlID0gJ1RpdGxlIGlzIHJlcXVpcmVkJ1xuICB9IGVsc2UgaWYgKHZhbHVlcy50aXRsZS5sZW5ndGggPiAzMCkge1xuICAgIGVycm9ycy50aXRsZSA9ICdNYXggMzAgc3ltYm9scydcbiAgfVxuICBpZiAoIXZhbHVlcy5wcmljZSkge1xuICAgIGVycm9ycy5wcmljZSA9ICdQcmljZSBpcyByZXF1aXJlZCdcbiAgfSBlbHNlIGlmIChwYXJzZUludCh2YWx1ZXMucHJpY2UpIDw9IDApIHtcbiAgICBlcnJvcnMucHJpY2UgPSAnUHJpY2UgbXVzdCBiZSBncmVhdGVyIHRoYW4gMCdcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRm9ybSwgRmllbGQgfSBmcm9tICdyZWFjdC1maW5hbC1mb3JtJ1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0AvY29tcG9uZW50cy9hdG9tcy9CdXR0b24nXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0AvY29tcG9uZW50cy9hdG9tcy9JbnB1dCdcbmltcG9ydCB7IFNwYWNlciB9IGZyb20gJ0AvY29tcG9uZW50cy9hdG9tcy9TcGFjZXInXG5pbXBvcnQgeyBhZGRUb0NhdGFsb2cgfSBmcm9tICdAL2NvcmUvYWN0aW9ucy9jYXRhbG9nJ1xuaW1wb3J0IGRhdGEgZnJvbSAnLi9kYXRhJ1xuaW1wb3J0IHsgdmFpbGRhdGUgfSBmcm9tICcuL2hlbHBlcnMnXG5pbXBvcnQgdHlwZSB7IFZhbHVlcyB9IGZyb20gJy4vdHlwZXMnXG5pbXBvcnQgKiBhcyBTdHlsZWQgZnJvbSAnLi9zdHlsZWQnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNsb3NlTW9kYWw6ICgpID0+IHZvaWRcbn1cblxuZXhwb3J0IGNvbnN0IE1vZGFsOiBSZWFjdC5GQzxQcm9wcz4gPSBSZWFjdC5tZW1vKGZ1bmN0aW9uIE1vZGFsKHsgY2xvc2VNb2RhbCB9OiBQcm9wcykge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcbiAgY29uc3Qgb25TdWJtaXQgPSBSZWFjdC51c2VDYWxsYmFjaygodmFsdWVzOiBWYWx1ZXMpID0+IHtcbiAgICBkaXNwYXRjaChhZGRUb0NhdGFsb2coeyAuLi52YWx1ZXMsIHByaWNlOiBwYXJzZUludCh2YWx1ZXMucHJpY2UpLCBpZDogRGF0ZS5ub3coKSB9KSlcbiAgICBjbG9zZU1vZGFsKClcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkLlJvb3Q+XG4gICAgICA8Rm9ybVxuICAgICAgICBvblN1Ym1pdD17b25TdWJtaXR9XG4gICAgICAgIHZhbGlkYXRlPXt2YWlsZGF0ZX1cbiAgICAgICAgcmVuZGVyPXsoeyBoYW5kbGVTdWJtaXQsIHByaXN0aW5lLCBzdWJtaXR0aW5nLCBpbnZhbGlkLCBmb3JtIH0pID0+IChcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9J2Zvcm0nPlxuICAgICAgICAgICAgPFN0eWxlZC5DbG9zZU1vZGFsXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBmb3JtLnJlc2V0KClcbiAgICAgICAgICAgICAgICBjbG9zZU1vZGFsKClcbiAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgIOKcllxuICAgICAgICAgICAgPC9TdHlsZWQuQ2xvc2VNb2RhbD5cbiAgICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8RmllbGQga2V5PXtgZmllbGRfJHtpdGVtLm5hbWV9YH0gbmFtZT17aXRlbS5uYW1lfSB0eXBlPXtpdGVtLnR5cGV9PlxuICAgICAgICAgICAgICAgIHsoeyBpbnB1dCwgbWV0YSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8U3BhY2VyIGJvdHRvbT0nMjAnPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgey4uLmlucHV0fSB0eXBlPXtpdGVtLnR5cGV9IHBsYWNlaG9sZGVyPXtpdGVtLm5hbWV9IC8+XG4gICAgICAgICAgICAgICAgICAgIHttZXRhLmVycm9yICYmIG1ldGEudG91Y2hlZCAmJiA8U3R5bGVkLkVycm9yPnttZXRhLmVycm9yfTwvU3R5bGVkLkVycm9yPn1cbiAgICAgICAgICAgICAgICAgIDwvU3BhY2VyPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT0nc3VibWl0JyBkaXNhYmxlZD17c3VibWl0dGluZyB8fCBwcmlzdGluZSB8fCBpbnZhbGlkfT5cbiAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICl9XG4gICAgICAvPlxuICAgIDwvU3R5bGVkLlJvb3Q+XG4gIClcbn0pXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgUm9vdCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2RlZGVkZWNmO1xuICAuZm9ybSB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDMwcHggNTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBDbG9zZU1vZGFsID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjNDhhMWU2O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5gXG5cbmV4cG9ydCBjb25zdCBFcnJvciA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiByZWQ7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbmBcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgaGlkZUVycm9yIH0gZnJvbSAnQC9jb3JlL2FjdGlvbnMvZXJyb3InXG5pbXBvcnQgeyBJRXJyb3JTdGF0ZSB9IGZyb20gJ0AvY29yZS90eXBlcy9lcnJvcidcbmltcG9ydCAqIGFzIFN0eWxlZCBmcm9tICcuL3N0eWxlZCdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0AvY29tcG9uZW50cy9hdG9tcy9CdXR0b24nXG5pbXBvcnQgeyBTcGFjZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvYXRvbXMvU3BhY2VyJ1xuXG5pbnRlcmZhY2UgUm9vdFN0YXRlIHtcbiAgZXJyb3JSZWR1Y2VyOiBJRXJyb3JTdGF0ZVxufVxuXG5leHBvcnQgY29uc3QgRXJyb3JOb3RpZmljYXRpb246IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBpc09wZW4gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuZXJyb3JSZWR1Y2VyLmlzT3BlbilcbiAgY29uc3QgZXJyb3IgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuZXJyb3JSZWR1Y2VyLmVycm9yKVxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICBkaXNwYXRjaChoaWRlRXJyb3IoKSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtpc09wZW4gJiYgZXJyb3IgJiYgKFxuICAgICAgICA8U3R5bGVkLlJvb3Q+XG4gICAgICAgICAgPFNwYWNlciByaWdodD0nMjAnPlxuICAgICAgICAgICAgPFN0eWxlZC5UZXh0PntlcnJvcn08L1N0eWxlZC5UZXh0PlxuICAgICAgICAgIDwvU3BhY2VyPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2V9PmNsb3NlIGVycm9yPC9CdXR0b24+XG4gICAgICAgIDwvU3R5bGVkLlJvb3Q+XG4gICAgICApfVxuICAgIDwvPlxuICApXG59XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgUm9vdCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBmaXJlYnJpY2s7XG4gIHBhZGRpbmc6IDIwcHg7XG5gXG5cbmV4cG9ydCBjb25zdCBUZXh0ID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6IHdoaXRlO1xuYFxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvYXRvbXMvQ29udGFpbmVyJ1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnQC9jb21wb25lbnRzL2F0b21zL0hlYWRlcidcbmltcG9ydCB7IFNwYWNlciB9IGZyb20gJ0AvY29tcG9uZW50cy9hdG9tcy9TcGFjZXInXG5cbmNvbnN0IE1haW46IFJlYWN0LkZDID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8U3BhY2VyIHRvcD0nMjAnPlxuICAgICAgICA8SGVhZGVyIGFsaWduPSdjZW50ZXInPk1haW4gcGFnZTwvSGVhZGVyPlxuICAgICAgPC9TcGFjZXI+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpblxuIiwiZXhwb3J0IGRlZmF1bHQgW1xuICB7XG4gICAgdG86ICcvJyxcbiAgICBuYW1lOiAnSG9tZScsXG4gIH0sXG4gIHtcbiAgICB0bzogJy9jYXRhbG9nJyxcbiAgICBuYW1lOiAnQ2F0YWxvZycsXG4gIH0sXG4gIHtcbiAgICB0bzogJy9jYXJ0JyxcbiAgICBuYW1lOiAnQ2FydCcsXG4gIH0sXG5dIGFzIEFycmF5PHsgdG86IHN0cmluZzsgbmFtZTogc3RyaW5nIH0+XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0AvY29tcG9uZW50cy9hdG9tcy9Db250YWluZXInXG5pbXBvcnQgeyBTcGFjZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvYXRvbXMvU3BhY2VyJ1xuaW1wb3J0IGRhdGEgZnJvbSAnLi9kYXRhJ1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogY3JpbXNvbjtcbmBcblxuY29uc3QgUm9vdCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmBcblxuY29uc3QgU3R5bGVkTGluayA9IHN0eWxlZChMaW5rKWBcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICY6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBOYXZpZ2F0aW9uOiBSZWFjdC5GQyA9IFJlYWN0Lm1lbW8oZnVuY3Rpb24gTmF2aWdhdGlvbigpIHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlcj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxTcGFjZXIgdG9wPScxMCcgYm90dG9tPScxMCc+XG4gICAgICAgICAgPFJvb3Q+XG4gICAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgPFN0eWxlZExpbmsga2V5PXtgbmF2XyR7aXRlbS5uYW1lfWB9IHRvPXtpdGVtLnRvfT5cbiAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICA8L1N0eWxlZExpbms+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1Jvb3Q+XG4gICAgICAgIDwvU3BhY2VyPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9XcmFwcGVyPlxuICApXG59KVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvYXRvbXMvQ29udGFpbmVyJ1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnQC9jb21wb25lbnRzL2F0b21zL0hlYWRlcidcbmltcG9ydCB7IFNwYWNlciB9IGZyb20gJ0AvY29tcG9uZW50cy9hdG9tcy9TcGFjZXInXG5cbmNvbnN0IEFuY2hvciA9IHN0eWxlZChMaW5rKWBcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmx1ZTtcbiAgJjpob3ZlciB7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuYFxuXG5jb25zdCBOb3RGb3VuZDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxTcGFjZXIgdG9wPScyMCcgYm90dG9tPScxMCc+XG4gICAgICAgIDxIZWFkZXI+UGFnZSBub3QgZm91bmQ8L0hlYWRlcj5cbiAgICAgIDwvU3BhY2VyPlxuICAgICAgPEFuY2hvciB0bz0nLyc+R28gdG8gaG9tZSDihpI8L0FuY2hvcj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOb3RGb3VuZFxuIiwiZXhwb3J0IGNvbnN0IElOREVYX1JPVVRFID0gJy8nXG5leHBvcnQgY29uc3QgQ0FUQUxPR19ST1VURSA9ICcvY2F0YWxvZydcbmV4cG9ydCBjb25zdCBDQVJUX1JPVVRFID0gJy9jYXJ0J1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBSb3V0ZSwgU3dpdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IHsgSU5ERVhfUk9VVEUsIENBVEFMT0dfUk9VVEUsIENBUlRfUk9VVEUgfSBmcm9tICcuL3JvdXRlcy1tYXAnXG5pbXBvcnQgTWFpbiBmcm9tICdAL21vZHVsZXMvbWFpbidcbmltcG9ydCBDYXRhbG9nIGZyb20gJ0AvbW9kdWxlcy9jYXRhbG9nJ1xuaW1wb3J0IENhcnQgZnJvbSAnQC9tb2R1bGVzL2NhcnQnXG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnQC9tb2R1bGVzL25vdC1mb3VuZCdcblxuZXhwb3J0IGNvbnN0IFJvdXRlczogUmVhY3QuRkMgPSAoKSA9PiAoXG4gIDxSZWFjdC5TdXNwZW5zZSBmYWxsYmFjaz17PGRpdj5Mb2FkLi4uPC9kaXY+fT5cbiAgICA8U3dpdGNoPlxuICAgICAgPFJvdXRlIHBhdGg9e0lOREVYX1JPVVRFfSBleGFjdCBjb21wb25lbnQ9e01haW59IC8+XG4gICAgICA8Um91dGUgcGF0aD17Q0FUQUxPR19ST1VURX0gZXhhY3QgY29tcG9uZW50PXtDYXRhbG9nfSAvPlxuICAgICAgPFJvdXRlIHBhdGg9e0NBUlRfUk9VVEV9IGV4YWN0IGNvbXBvbmVudD17Q2FydH0gLz5cbiAgICAgIDxSb3V0ZSBjb21wb25lbnQ9e05vdEZvdW5kfSAvPlxuICAgIDwvU3dpdGNoPlxuICA8L1JlYWN0LlN1c3BlbnNlPlxuKVxuIiwiY29uc3Qgc2l6ZSA9IHtcbiAgbW9iaWxlUzogJzM3NHB4JyxcbiAgbW9iaWxlOiAnNzY3cHgnLFxuICB0YWJsZXQ6ICcxMDIzcHgnLFxufVxuXG5leHBvcnQgY29uc3QgZGV2aWNlID0ge1xuICBtb2JpbGVTOiBgQG1lZGlhIChtYXgtd2lkdGg6ICR7c2l6ZS5tb2JpbGVTfSlgLFxuICBtb2JpbGU6IGBAbWVkaWEgKG1heC13aWR0aDogJHtzaXplLm1vYmlsZX0pYCxcbiAgdGFibGV0OiBgQG1lZGlhIChtYXgtd2lkdGg6ICR7c2l6ZS50YWJsZXR9KWAsXG59XG4iXSwic291cmNlUm9vdCI6IiJ9