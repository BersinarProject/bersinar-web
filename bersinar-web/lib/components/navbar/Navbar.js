"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

require("./Navbar.css");

var _brandLogo = _interopRequireDefault(require("../../assets/images/brandLogo.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const navbar = () => /*#__PURE__*/_react.default.createElement("div", {
  className: "app"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "col-lg-12"
}, /*#__PURE__*/_react.default.createElement("nav", {
  className: "navbar navbar-expand-lg navbar-light bg-light"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "container-fluid"
}, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
  to: "/",
  className: "navbar-brand"
}, /*#__PURE__*/_react.default.createElement("img", {
  className: "logo",
  src: _brandLogo.default,
  alt: ""
})), /*#__PURE__*/_react.default.createElement("button", {
  className: "navbar-toggler",
  type: "button",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#navbarNavAltMarkup",
  "aria-controls": "navbarNavAltMarkup",
  "aria-expanded": "false",
  "aria-label": "Toggle navigation"
}, /*#__PURE__*/_react.default.createElement("span", {
  className: "navbar-toggler-icon"
})), /*#__PURE__*/_react.default.createElement("div", {
  className: "collapse navbar-collapse",
  id: "navbarNavAltMarkup"
}, /*#__PURE__*/_react.default.createElement("ul", {
  className: "navbar-nav ms-auto"
}, /*#__PURE__*/_react.default.createElement("li", {
  className: "nav-item"
}, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
  exact: true,
  className: "item nav-link",
  "aria-current": "page",
  to: "/"
}, "Home")), /*#__PURE__*/_react.default.createElement("li", {
  className: "nav-item"
}, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
  className: "item nav-link",
  to: "/about-us"
}, "About Us")), /*#__PURE__*/_react.default.createElement("li", {
  className: "nav-item"
}, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
  className: "item nav-link",
  to: "/our-class"
}, "Our Class")), /*#__PURE__*/_react.default.createElement("li", {
  className: "nav-item"
}, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
  className: "btn-donate btn  btn-shadow px-4",
  to: "/"
}, "Donate"))))))));

var _default = navbar;
exports.default = _default;