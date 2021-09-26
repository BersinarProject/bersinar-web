"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactBootstrap = require("react-bootstrap");

require("./Navbar.css");

var _brandLogo = _interopRequireDefault(require("../../assets/images/brandLogo.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const navbar = () => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "app"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Navbar, {
    bg: "light",
    expand: "lg"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Container, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: "/",
    className: "navbar-brand"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "logo",
    src: _brandLogo.default,
    alt: "Bersinar Logo"
  })), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Navbar.Toggle, {
    "aria-controls": "basic-navbar-nav"
  }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Navbar.Collapse, {
    id: "basic-navbar-nav"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Nav, {
    className: "ms-auto d-flex justify-content-center align-items-center"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    exact: true,
    className: "item nav-link",
    "aria-current": "page",
    to: "/"
  }, "Home"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    className: "item nav-link",
    to: "/about-us"
  }, "About Us"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    className: "item nav-link",
    to: "/our-class"
  }, "Our Class"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    className: "btn-donate-navbar btn btn-shadow px-3",
    to: "/"
  }, "Donate"))))));
};

var _default = navbar;
exports.default = _default;