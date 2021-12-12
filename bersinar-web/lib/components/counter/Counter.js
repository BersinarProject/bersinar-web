"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Counter.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const counter = () => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "counter container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "d-flex flex-column flex-wrap justify-content-center align-items-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "counter-header col-md-7"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "counter-header-title text-center"
  }, "Pencapaian Kami"), /*#__PURE__*/_react.default.createElement("h2", {
    className: "counter-header-subTitle text-center"
  }, "Sejak Desember 2020, Bersinar telah menjangkau ribuan pelajar di seluruh Indonesia melalui kelas-kelas gratis yang telah dilaksanakan!"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "countDetails d-flex flex-wrap align-items-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "countDetail d-flex flex-column"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "countDetail-number"
  }, "200+"), /*#__PURE__*/_react.default.createElement("h3", {
    className: "countDetail-text"
  }, "Total Kelas")), /*#__PURE__*/_react.default.createElement("div", {
    className: "countDetail d-flex flex-column"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "countDetail-number"
  }, "300+"), /*#__PURE__*/_react.default.createElement("h3", {
    className: "countDetail-text"
  }, "Jam Kelas")), /*#__PURE__*/_react.default.createElement("div", {
    className: "countDetail d-flex flex-column"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "countDetail-number"
  }, "15Rb+"), /*#__PURE__*/_react.default.createElement("h3", {
    className: "countDetail-text"
  }, "Total Peserta")), /*#__PURE__*/_react.default.createElement("div", {
    className: "countDetail d-flex flex-column"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "countDetail-number"
  }, "90%"), /*#__PURE__*/_react.default.createElement("h3", {
    className: "countDetail-text"
  }, "Total Kepuasan"))));
};

var _default = counter;
exports.default = _default;