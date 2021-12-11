"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactBootstrap = require("react-bootstrap");

require("./Navbar.css");

var _bersinarLogoFull = _interopRequireDefault(require("../../assets/images/bersinar-logo/bersinarLogoFull.svg"));

var _bersinarLogoIcon = _interopRequireDefault(require("../../assets/images/bersinar-logo/bersinarLogoIcon.svg"));

var _donate = _interopRequireDefault(require("../../assets/images/donate.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const navbar = () => {
  function isMobile() {
    const mediaQuery = window.matchMedia("(max-width: 576px)");
    return mediaQuery.matches;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "navbar-component"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Navbar, {
    fixed: "top",
    expand: "xl"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Container, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: "/",
    className: "navbar-brand"
  }, isMobile() ? /*#__PURE__*/_react.default.createElement("img", {
    className: "navbar-logo-icon",
    src: _bersinarLogoIcon.default,
    alt: "Bersinar Logo"
  }) : /*#__PURE__*/_react.default.createElement("img", {
    className: "navbar-logo-full",
    src: _bersinarLogoFull.default,
    alt: "Bersinar Logo"
  })), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Navbar.Toggle, {
    "aria-controls": "basic-navbar-nav"
  }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Navbar.Collapse, {
    id: "basic-navbar-nav"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Nav, {
    className: "nav-links ms-auto d-flex justify-content-center align-items-center"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    exact: true,
    className: "nav-link item",
    "aria-current": "page",
    to: "/"
  }, "Beranda"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    className: "nav-link item",
    to: "/our-class"
  }, "Jadwal Kelas"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    className: "nav-link item",
    to: "/about-us"
  }, "Tentang Kami"), /*#__PURE__*/_react.default.createElement("div", {
    className: "donate"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "donate-button btn d-flex align-items-center",
    href: "https://trakteer.id/BersinarProject/tip/embed/modal",
    target: "_blank",
    rel: "noreferrer"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _donate.default,
    alt: "Donate",
    className: "donate-button-icon"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "donate-button-text"
  }, "Donasi"))))))));
};

var _default = navbar;
exports.default = _default;