"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Introduce.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const introduce = () => /*#__PURE__*/_react.default.createElement("div", {
  className: "container"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "intro row"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "col-lg-6"
}), /*#__PURE__*/_react.default.createElement("div", {
  className: "col-lg-6"
})));

var _default = introduce;
exports.default = _default;