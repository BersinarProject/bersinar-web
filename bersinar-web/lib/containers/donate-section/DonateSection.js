"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./DonateSection.css");

var _starwars = _interopRequireDefault(require("../../assets/images/starwars.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Donate = () => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "donate-section container d-flex flex-wrap justify-content-around align-items-center mb-5"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _starwars.default,
    alt: "starwars",
    className: "donate-section-img"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "donate-text col-md-9"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "donate-title"
  }, "Donate to Bersinar Project"), /*#__PURE__*/_react.default.createElement("p", {
    className: "donate-description"
  }, "Dukung Bersinar agar dapat terus berkembang dan menjangkau lebih banyak pelajar lainnya!"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "btn btn-donate-section px-3"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.youtube.com/c/BersinarProject",
    className: "btn-donate-link text-decoration-none text-white"
  }, "Donate"))));
};

var _default = Donate;
exports.default = _default;