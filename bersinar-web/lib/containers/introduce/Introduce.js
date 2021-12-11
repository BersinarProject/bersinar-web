"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Reveal = _interopRequireDefault(require("react-reveal/Reveal"));

require("animate.css");

require("./Introduce.css");

var _infoImg = _interopRequireDefault(require("../../assets/images/infoImg.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const introduce = () => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "intro column"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "intro-section container d-flex justify-content-between align-items-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-5"
  }, /*#__PURE__*/_react.default.createElement(_Reveal.default, {
    effect: "fadeInUp",
    duration: 6000
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "introImg",
    src: _infoImg.default,
    alt: "Info"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "intro-right-section"
  }, /*#__PURE__*/_react.default.createElement(_Reveal.default, {
    effect: "fadeInUp",
    duration: 6000
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "intro-title"
  }, "Bersinar hadir dengan menyediakan kelas persiapan UTBK dan ujian mandiri gratis."), /*#__PURE__*/_react.default.createElement("p", {
    className: "intro-subTitle"
  }, "Sejak Desember 2020, Bersinar telah membantu lebih dari 10.000 calon mahasiswa dari seluruh kelas yang telah dilaksanakan.")))));
};

var _default = introduce;
exports.default = _default;