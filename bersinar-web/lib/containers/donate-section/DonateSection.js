"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./DonateSection.css");

var _donateIllustration = _interopRequireDefault(require("../../assets/images/landing-page/donateIllustration.svg"));

var _donateIcon = _interopRequireDefault(require("../../assets/images/landing-page/donateIcon.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Donate = () => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "donate-section container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "donate-section-content d-flex flex-wrap align-items-center"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _donateIllustration.default,
    alt: "donate",
    className: "donate-image"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "donate-text col-md-6"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "donate-text-title"
  }, "Donasi untuk Bersinar"), /*#__PURE__*/_react.default.createElement("p", {
    className: "donate-text-description"
  }, "Dukung Bersinar agar dapat terus berkembang dan menjangkau lebih banyak pelajar lainnya dengan berdonasi!"), /*#__PURE__*/_react.default.createElement("a", {
    href: "https://trakteer.id/BersinarProject/",
    className: "btn-donate d-flex align-item-center text-decoration-none"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _donateIcon.default,
    alt: "donate icon",
    className: "btn-donate-icon"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "btn-donate-text"
  }, "Donasi di sini")))));
};

var _default = Donate;
exports.default = _default;