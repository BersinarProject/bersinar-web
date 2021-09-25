"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Hero.css");

var _reactRouterDom = require("react-router-dom");

var _Hero2 = _interopRequireDefault(require("../../assets/images/Hero.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const hero = () => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "hero column"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "hero-section container d-flex justify-content-between align-items-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "hero-left-section"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "hero-title col-xl-9"
  }, "Mantepin UTBK Kamu dari Sekarang!"), /*#__PURE__*/_react.default.createElement("p", {
    className: "hero-subTitle col-xl-7"
  }, "Platform kolaborasi pelajar Indonesia untuk meraih mimpi dan #BersinarBersama"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    className: "btn btn-start btn-shadow px-3",
    to: "/"
  }, "Mulai Belajar")), /*#__PURE__*/_react.default.createElement("div", {
    className: ""
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "heroImg",
    src: _Hero2.default,
    alt: ""
  }))));
};

var _default = hero;
exports.default = _default;