"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Navbar = _interopRequireDefault(require("../components/navbar/Navbar"));

var _Hero = _interopRequireDefault(require("../containers/hero/Hero"));

var _Counter = _interopRequireDefault(require("../components/counter/Counter"));

var _Introduce = _interopRequireDefault(require("../containers/introduce/Introduce"));

var _UpcomingClass = _interopRequireDefault(require("../containers/upcoming-class/UpcomingClass"));

var _Testimonials = _interopRequireDefault(require("../containers/testimonials/Testimonials"));

var _YoutubeSection = _interopRequireDefault(require("../containers/youtube-section/YoutubeSection"));

var _DonateSection = _interopRequireDefault(require("../containers/donate-section/DonateSection"));

var _faqBox = _interopRequireDefault(require("../components/faq-box/faqBox"));

var _footer = _interopRequireDefault(require("../components/footer/footer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LandingPage = () => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "landing-page"
  }, /*#__PURE__*/_react.default.createElement(_Navbar.default, null), /*#__PURE__*/_react.default.createElement(_Hero.default, null), /*#__PURE__*/_react.default.createElement(_Counter.default, null), /*#__PURE__*/_react.default.createElement(_Introduce.default, null), /*#__PURE__*/_react.default.createElement(_UpcomingClass.default, null), /*#__PURE__*/_react.default.createElement(_Testimonials.default, null), /*#__PURE__*/_react.default.createElement(_YoutubeSection.default, null), /*#__PURE__*/_react.default.createElement(_DonateSection.default, null), /*#__PURE__*/_react.default.createElement(_faqBox.default, null), /*#__PURE__*/_react.default.createElement(_footer.default, null));
};

var _default = LandingPage;
exports.default = _default;