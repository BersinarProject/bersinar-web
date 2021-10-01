"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactBootstrap = require("react-bootstrap");

require("./upcomingClassCard.css");

var _starwars = _interopRequireDefault(require("../../assets/images/starwars.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const card = props => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "cards-class container d-flex flex-wrap justify-content-evenly align-items-center"
  }, props.dataUpcomingClassCard.map(dataCard => {
    return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card, {
      key: dataCard.id,
      className: "card-class border-0 shadow mb-5",
      style: {
        width: "350px"
      }
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card.Img, {
      variant: "top",
      src: _starwars.default,
      className: "card-class-image"
    }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card.Body, {
      style: {
        padding: "28px"
      }
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "card-class-category d-flex justify-content-between"
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card.Text, {
      className: "card-class-category-name"
    }, dataCard.category), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card.Text, {
      className: "card-class-category-tagline"
    }, dataCard.tagLine)), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card.Title, {
      className: "card-class-title fs-6 lh-base fw-bold"
    }, dataCard.title), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card.Text, {
      className: "card-class-text"
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), /*#__PURE__*/_react.default.createElement("div", {
      className: "card-class-tutors d-flex justify-content-between align-items-center"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "card-class-tutor d-flex align-items-center"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: _starwars.default,
      className: "card-class-tutor-image",
      alt: "Tutor"
    }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card.Text, {
      className: "card-class-tutor-name"
    }, dataCard.tutor)), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "/our-class",
      className: "card-class-daftar text-decoration-none"
    }, "Join Kelas"))));
  }));
};

var _default = card;
exports.default = _default;