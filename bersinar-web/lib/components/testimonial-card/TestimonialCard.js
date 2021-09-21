"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactBootstrap = require("react-bootstrap");

require("./TestimonialCard.css");

var _starwars = _interopRequireDefault(require("../../assets/images/starwars.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const card = props => /*#__PURE__*/_react.default.createElement("div", {
  className: "testimonials-card d-flex flex-wrap justify-content-evenly align-items-center"
}, props.dataTestimonialCard.map(testimonialCard => /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card, {
  key: testimonialCard.id,
  className: "testimonial-card border-0 shadow mb-5",
  style: {
    width: "520px"
  }
}, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card.Body, {
  style: {
    padding: "0px"
  }
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "d-flex align-items-center"
}, /*#__PURE__*/_react.default.createElement("img", {
  src: _starwars.default,
  className: "testimonial-card-img me-2",
  alt: "Testimonial Avatar"
}), /*#__PURE__*/_react.default.createElement("div", {
  className: "testimonial-card-bio"
}, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card.Text, {
  className: "testimonial-quote"
}, testimonialCard.quote), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card.Text, {
  className: "testimonial-name mb-0 fw-bold"
}, testimonialCard.name), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card.Text, {
  className: "testimonial-edu"
}, testimonialCard.edu)))))));

var _default = card;
exports.default = _default;