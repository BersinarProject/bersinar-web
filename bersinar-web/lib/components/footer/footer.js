"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("react-reveal");

var _reactBootstrap = require("react-bootstrap");

require("animate.css");

require("./Footer.css");

var _reactRouterDom = require("react-router-dom");

var _bersinarLogoFull = _interopRequireDefault(require("../../assets/images/bersinar-logo/bersinarLogoFull.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Footer = () => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "footer"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Container, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-contents d-flex flex-wrap"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-content"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "footer-title"
  }, "Navigasi"), /*#__PURE__*/_react.default.createElement("ul", {
    className: "py-2"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "footer-link"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    className: "footer-link",
    to: "/"
  }, "Beranda")), /*#__PURE__*/_react.default.createElement("li", {
    className: "footer-link"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    className: "footer-link",
    to: "/our-class"
  }, "Jadwal Kelas")), /*#__PURE__*/_react.default.createElement("li", {
    className: "footer-link"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    className: "footer-link",
    to: "/about-us"
  }, "Tentang Kami")), /*#__PURE__*/_react.default.createElement("li", {
    className: "footer-link"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "footer-link",
    target: "_blank",
    rel: "noreferrer",
    href: "https://trakteer.id/BersinarProject/"
  }, "Donasi")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-content"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "footer-title"
  }, "Kelas"), /*#__PURE__*/_react.default.createElement("ul", {
    className: "py-2"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "footer-link"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    className: "footer-link",
    to: "/our-class"
  }, "Saintek")), /*#__PURE__*/_react.default.createElement("li", {
    className: "footer-link"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    className: "footer-link",
    to: "/our-class"
  }, "Soshum")), /*#__PURE__*/_react.default.createElement("li", {
    className: "footer-link"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    className: "footer-link",
    to: "/our-class"
  }, "TPS")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-content"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "footer-title"
  }, "Media Sosial"), /*#__PURE__*/_react.default.createElement("ul", {
    className: "py-2"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "footer-link"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "footer-link",
    target: "_blank",
    rel: "noreferrer",
    href: "https://instagram.com/bersinarproject"
  }, "Instagram")), /*#__PURE__*/_react.default.createElement("li", {
    className: "footer-link"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "footer-link",
    target: "_blank",
    rel: "noreferrer",
    href: "https://twitter.com/bersinarproject"
  }, "Twitter")), /*#__PURE__*/_react.default.createElement("li", {
    className: "footer-link"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "footer-link",
    target: "_blank",
    rel: "noreferrer",
    href: "https://youtube.com/bersinarproject"
  }, "YouTube")), /*#__PURE__*/_react.default.createElement("li", {
    className: "footer-link"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "footer-link",
    target: "_blank",
    rel: "noreferrer",
    href: "https://www.linkedin.com/company/bersinar"
  }, "LinkedIn")), /*#__PURE__*/_react.default.createElement("li", {
    className: "footer-link"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "footer-link",
    target: "_blank",
    rel: "noreferrer",
    href: "https://tiktok.com/@bersinarproject"
  }, "TikTok")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-content"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "footer-title"
  }, "Tautan"), /*#__PURE__*/_react.default.createElement("ul", {
    className: "py-2"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "footer-link"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "footer-link",
    target: "_blank",
    rel: "noreferrer",
    href: "https://bit.ly/MateriBersinar"
  }, "Materi Bersinar")), /*#__PURE__*/_react.default.createElement("li", {
    className: "footer-link"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "footer-link",
    target: "_blank",
    rel: "noreferrer",
    href: "https://bit.ly/SoalBersinar"
  }, "Soal Bersinar")), /*#__PURE__*/_react.default.createElement("li", {
    className: "footer-link"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    className: "footer-link",
    to: "/our-class"
  }, "Kalender")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "footerLogo"
  }, /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", {
    className: ""
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "footer-logo-img",
    src: _bersinarLogoFull.default,
    alt: "Bersinar Logo"
  })), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-text"
  }, "Made with \u2764\uFE0F while listening", /*#__PURE__*/_react.default.createElement("b", {
    className: "footer-text-bold"
  }, " ", "Favorite Crime")))))))));
};

var _default = Footer;
exports.default = _default;