"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

require("./faqBox.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const faqBox = () => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "faqBox d-flex justify-content-between align-items-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "faq-box-Detail"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "faqBox-title"
  }, "Have a Question?"), /*#__PURE__*/_react.default.createElement("h4", {
    className: "faqBox-subtitle"
  }, "Let\u2019s check our FAQ!")), /*#__PURE__*/_react.default.createElement("div", {
    className: "faq-box-Detail"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    className: "btn btn-faq btn-shadow px-3",
    to: "/"
  }, "FAQ"))));
};

var _default = faqBox;
exports.default = _default;