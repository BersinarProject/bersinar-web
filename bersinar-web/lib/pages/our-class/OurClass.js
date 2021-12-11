"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactBootstrap = require("react-bootstrap");

require("./OurClass.css");

var _Navbar = _interopRequireDefault(require("../../components/navbar/Navbar"));

var _Footer = _interopRequireDefault(require("../../components/footer/Footer"));

var _gaadaKelas = _interopRequireDefault(require("../../assets/images/landing-page/gaadaKelas.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const OurClass = () => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "our-class"
  }, /*#__PURE__*/_react.default.createElement(_Navbar.default, null), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Container, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "our-class-contents d-flex flex-column justify-content-center align-items-center"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _gaadaKelas.default,
    alt: "Kelas tidak tersedia",
    className: "our-class-gaada-kelas"
  }), /*#__PURE__*/_react.default.createElement("h2", {
    className: "our-class-info col-md-8"
  }, "Maaf, Sob! Kelas yang kamu cari tidak tersedia. Saat ini belum ada jadwal kelas yang akan diadakan, harap tunggu ya!"))), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
};

var _default = OurClass;
exports.default = _default;