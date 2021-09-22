"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _LandingPage = _interopRequireDefault(require("./pages/LandingPage"));

var _OurClass = _interopRequireDefault(require("./pages/OurClass"));

require("./App.css");

require("./components/buttons/Button.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "app"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/"
  }, /*#__PURE__*/_react.default.createElement(_LandingPage.default, null)), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/our-class"
  }, /*#__PURE__*/_react.default.createElement(_OurClass.default, null)))));
}

var _default = App;
exports.default = _default;