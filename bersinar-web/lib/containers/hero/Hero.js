"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

require("./Hero.css");

var _landingPageHero = _interopRequireDefault(require("../../assets/images/landing-page/landingPageHero.png"));

var _startIcon = _interopRequireDefault(require("../../assets/images/startIcon.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const hero = () => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "hero"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "hero-section container d-flex justify-content-center align-items-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "hero-left-section"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "hero-title"
  }, "Mantepin UTBK-Mu dari Sekarang!"), /*#__PURE__*/_react.default.createElement("p", {
    className: "hero-subTitle"
  }, "Platform kolaborasi pelajar Indonesia untuk meraih mimpi dan", " ", /*#__PURE__*/_react.default.createElement("span", {
    className: "hero-subTitle-tag"
  }, "#BersinarBersama")), /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    className: "mulai-belajar-button btn",
    to: "/our-class"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "mulai-belajar-button-icon",
    src: _startIcon.default,
    alt: "Mulai Belajar"
  }), "Mulai Belajar")), /*#__PURE__*/_react.default.createElement("div", {
    className: "hero-right-section"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "hero-image",
    src: _landingPageHero.default,
    alt: "Hero"
  }))));
};

var _default = hero;
exports.default = _default;