"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactBootstrap = require("react-bootstrap");

require("./LiveClassCard.css");

var _donate = _interopRequireDefault(require("../../assets/images/donate.svg"));

var _SignalIcon = _interopRequireDefault(require("../../assets/images/SignalIcon.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LiveClassCard = _ref => {
  let {
    dataCard
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card, {
    key: dataCard.id,
    className: "live-class-card swiper-slide border-0 mb-5",
    id: "our-class"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card.Img, {
    variant: "top",
    src: _donate.default,
    className: "live-class-card-image"
  }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card.Body, {
    className: "w-100 p-0"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card.Text, {
    className: "live-class-card-course-code mb-0"
  }, dataCard.courseCode), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card.Text, {
    className: "live-class-card-subject-description"
  }, "Additional Message"), /*#__PURE__*/_react.default.createElement("div", {
    className: "live-class-card-countdown d-flex justify-content-between align-items-center"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "live-class-card-countdown-text"
  }, "Kelas sudah dimulai"), /*#__PURE__*/_react.default.createElement("span", {
    className: "live-class-card-countdown-timer"
  }, "19.30")), /*#__PURE__*/_react.default.createElement("a", {
    href: "https://telkomsel.zoom.us/j/2478385437?pwd=UWdhakYxWUpZdHlrV08wWGc1bG9Hdz09#success",
    className: "live-class-card-button w-100 d-flex justify-content-center align-items-center btn text-white fw-bold",
    role: "button"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _SignalIcon.default,
    alt: "Signal Icon",
    className: "live-class-card-button-icon"
  }), "Join Live")));
};

var _default = LiveClassCard;
exports.default = _default;