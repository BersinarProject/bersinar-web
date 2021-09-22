"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Navbar = _interopRequireDefault(require("../components/navbar/Navbar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const OurClass = () => /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Navbar.default, null), /*#__PURE__*/_react.default.createElement("p", null, "Selamat datang di our class"));

var _default = OurClass;
exports.default = _default;