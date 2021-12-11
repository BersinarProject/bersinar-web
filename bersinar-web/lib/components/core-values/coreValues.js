"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./coreValues.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const coreValues = () => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "counter container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "d-flex flex-column flex-wrap justify-content-center align-items-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "counter-header col-md-7"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "counter-header-title text-center"
  }, "Our Core Values"), /*#__PURE__*/_react.default.createElement("h2", {
    className: "counter-header-subTitle text-center"
  }, "Kultur Bersinar Project sangat penting untuk berjalannya program Bersinar. Bersinar Project berdiri dengan lima pilar utama untuk sukses."))), /*#__PURE__*/_react.default.createElement("div", {
    className: "countDetails d-flex flex-wrap align-items-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "countDetail d-flex flex-column"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "countDetail-number"
  }, "100"), /*#__PURE__*/_react.default.createElement("h4", {
    className: "countDetail-text"
  }, "Total Kelas")), /*#__PURE__*/_react.default.createElement("div", {
    className: "countDetail d-flex flex-column"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "countDetail-number"
  }, "100+"), /*#__PURE__*/_react.default.createElement("h4", {
    className: "countDetail-text"
  }, "Jam Materi")), /*#__PURE__*/_react.default.createElement("div", {
    className: "countDetail d-flex flex-column"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "countDetail-number"
  }, "10K"), /*#__PURE__*/_react.default.createElement("h4", {
    className: "countDetail-text"
  }, "Total Peserta")), /*#__PURE__*/_react.default.createElement("div", {
    className: "countDetail d-flex flex-column"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "countDetail-number"
  }, "90%"), /*#__PURE__*/_react.default.createElement("h4", {
    className: "countDetail-text"
  }, "Total Kepuasan"))));
};

var _default = coreValues;
exports.default = _default;