"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactBootstrap = require("react-bootstrap");

require("./upcomingClassCard.css");

var _donate = _interopRequireDefault(require("../../assets/images/donate.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const UpcomingClasscard = _ref => {
  let {
    dataCard
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card, {
    key: dataCard.id,
    className: "upcoming-class-card border-0 mb-5"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card.Img, {
    variant: "top",
    src: _donate.default,
    className: "upcoming-class-card-image"
  }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card.Body, {
    className: "w-100 p-0"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card.Text, {
    className: "upcoming-class-card-course-code mb-0"
  }, dataCard.courseCode), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card.Text, {
    className: "upcoming-class-card-subject-description"
  }, "Additional Message"), /*#__PURE__*/_react.default.createElement("div", {
    className: "upcoming-class-card-countdown d-flex justify-content-between align-items-center"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "upcoming-class-card-countdown-text"
  }, "Starting in"), /*#__PURE__*/_react.default.createElement("span", {
    className: "upcoming-class-card-countdown-timer"
  }, "08.59")), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/our-class",
    className: "upcoming-class-card-button w-100 d-flex justify-content-center align-items-center btn text-white fw-bold"
  }, "Join Kelas")));
};

var _default = UpcomingClasscard;
exports.default = _default;