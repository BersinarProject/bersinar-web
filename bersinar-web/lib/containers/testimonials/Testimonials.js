"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

var _TestimonialCard = _interopRequireDefault(require("../../components/testimonial-card/TestimonialCard"));

require("./Testimonials.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Testimonials = () => {
  const [getDataTestimonialCard] = (0, _react.useState)([{
    id: 1,
    quote: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dicta quasi voluptate atque animi doloribus autem expedita amet rerum iste."',
    name: "Ahmad Zakiyudin",
    edu: "Matematika, ITS 2020"
  }, {
    id: 2,
    quote: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dicta quasi voluptate atque animi doloribus autem expedita amet rerum iste."',
    name: "Muhammad Razan Fawwaz",
    edu: "Teknik Informatika, Unsyiah 2020"
  }, {
    id: 3,
    quote: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dicta quasi voluptate atque animi doloribus autem expedita amet rerum iste."',
    name: "Yasmin Hana",
    edu: "Hukum, UI 2020"
  }, {
    id: 4,
    quote: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dicta quasi voluptate atque animi doloribus autem expedita amet rerum iste."',
    name: "Alya Astrid",
    edu: "Ilmu Komputer, UI 2020"
  }]);
  return /*#__PURE__*/_react.React.createElement("div", {
    className: "testimonials"
  }, /*#__PURE__*/_react.React.createElement("div", {
    className: "testimonials-title d-flex flex-column justify-content-center align-items-center"
  }, /*#__PURE__*/_react.React.createElement("h1", {
    className: "testimonial-title mb-3"
  }, "What do They Say About Bersinar"), /*#__PURE__*/_react.React.createElement("h2", {
    className: "testimonial-subTitle"
  }, "Kata Sober dan Minshine Saat Belajar Bareng di Bersinar Project.")), /*#__PURE__*/_react.React.createElement(_TestimonialCard.default, {
    dataTestimonialCard: getDataTestimonialCard
  }));
};

var _default = Testimonials;
exports.default = _default;