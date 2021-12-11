"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Faq;

var _react = _interopRequireDefault(require("react"));

require("./Faq.css");

var _Navbar = _interopRequireDefault(require("../../components/navbar/Navbar"));

var _Footer = _interopRequireDefault(require("../../components/footer/Footer"));

var _faqAccordion = _interopRequireDefault(require("../../components/faq-accordion/faqAccordion"));

var _FAQIllustration = _interopRequireDefault(require("../../assets/images/FAQIllustration.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Faq() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "faq-page"
  }, /*#__PURE__*/_react.default.createElement(_Navbar.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "faq-header container d-flex flex-column justify-content-center align-items-center"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _FAQIllustration.default,
    alt: "FAQ Illustration",
    className: "faq-header-image"
  }), /*#__PURE__*/_react.default.createElement("h1", {
    className: "faq-header-title"
  }, "Pelajari FAQ Kami"), /*#__PURE__*/_react.default.createElement("h2", {
    className: "faq-header-subTitle text-center col-md-4"
  }, "Pelajari Bersinar lebih lanjut melalui beberapa pertanyaan berikut")), /*#__PURE__*/_react.default.createElement(_faqAccordion.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "faq-footer container d-flex flex-column justify-content-center align-items-center"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "faq-footer-title text-center"
  }, "Masih punya pertanyaan?"), /*#__PURE__*/_react.default.createElement("h2", {
    className: "faq-footer-subTitle text-center"
  }, "Jika Kamu tidak menemukan jawaban atas pertanyaan Kamu. Kamu bisa menghubungi Kami melalui kontak yang tersedia bagian paling bawah di halaman website ini.")), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
}