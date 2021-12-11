"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

require("./FAQSection.css");

var _FAQIllustration = _interopRequireDefault(require("../../assets/images/FAQIllustration.png"));

var _FAQButtonIcon = _interopRequireDefault(require("../../assets/images/FAQButtonIcon.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const FAQSection = () => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "faq-section container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "faq-section-content d-flex flex-column justify-content-center align-items-center p-0"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "faq-section-content-image"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _FAQIllustration.default,
    alt: "Signal Icon"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "faq-section-content-text d-flex flex-column justify-content-center align-items-center"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "faq-section-content-title text-center"
  }, "Punya pertanyaan?"), /*#__PURE__*/_react.default.createElement("h4", {
    className: "faq-section-content-subTitle text-center"
  }, "Cek jawaban FAQ kami!"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    className: "faq-section-content-button btn d-flex justify-content-center align-items-center",
    to: "/faq"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _FAQButtonIcon.default,
    alt: "Signal Icon"
  }), "FAQ kami"))));
};

var _default = FAQSection;
exports.default = _default;