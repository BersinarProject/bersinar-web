"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

require("animate.css");

var _LandingPage = _interopRequireDefault(require("./pages/LandingPage"));

var _OurClass = _interopRequireDefault(require("./pages/our-class/OurClass"));

var _AboutUs = _interopRequireDefault(require("./pages/about-us/AboutUs"));

var _Faq = _interopRequireDefault(require("./pages/faq/Faq"));

var _ScrollToTop = _interopRequireDefault(require("./ScrollToTop"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "app"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(_ScrollToTop.default, null), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/"
  }, /*#__PURE__*/_react.default.createElement(_LandingPage.default, null)), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/our-class"
  }, /*#__PURE__*/_react.default.createElement(_OurClass.default, null)), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/about-us"
  }, /*#__PURE__*/_react.default.createElement(_AboutUs.default, null)), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/faq"
  }, /*#__PURE__*/_react.default.createElement(_Faq.default, null)))));
}

var _default = App;
exports.default = _default;