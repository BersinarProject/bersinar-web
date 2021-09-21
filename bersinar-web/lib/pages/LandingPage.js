"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _UpcomingClass = _interopRequireDefault(require("../containers/upcoming-class/UpcomingClass"));

var _Testimonials = _interopRequireDefault(require("../containers/testimonials/Testimonials"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LandingPage = () => /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_UpcomingClass.default, null), /*#__PURE__*/_react.default.createElement(_Testimonials.default, null));

var _default = LandingPage;
exports.default = _default;