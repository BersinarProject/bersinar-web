"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactBootstrap = require("react-bootstrap");

require("./TestimonialCard.css");

var _ArrowIcon = _interopRequireDefault(require("../../assets/images/ArrowIcon.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const card = _ref => {
  let {
    dataTestimonialCard
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card, {
    key: dataTestimonialCard.id,
    className: "testimonial-card swiper-slide"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card.Body, {
    className: "p-0"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "testimonial-card-profile d-flex"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _ArrowIcon.default,
    className: "testimonial-card-profile-img",
    alt: "Testimonial Avatar"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "testimonial-card-profile-bio d-flex flex-column"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "testimonial-card-profile-bio-name"
  }, dataTestimonialCard.name), /*#__PURE__*/_react.default.createElement("span", {
    className: "testimonial-card-profile-bio-edu"
  }, dataTestimonialCard.edu))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card.Text, {
    className: "testimonial-card-profile-quote"
  }, dataTestimonialCard.quote)));
};

var _default = card;
exports.default = _default;