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
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "countBox d-flex flex-wrap justify-content-around align-items-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "countDetail d-flex flex-column"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "number"
  }, "100"), /*#__PURE__*/_react.default.createElement("h4", {
    className: "textDetail"
  }, "Kelas")), /*#__PURE__*/_react.default.createElement("div", {
    className: "countDetail d-flex flex-column"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "number"
  }, "1200"), /*#__PURE__*/_react.default.createElement("h4", {
    className: "textDetail"
  }, "Jam")), /*#__PURE__*/_react.default.createElement("div", {
    className: "countDetail d-flex flex-column"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "number"
  }, "10.000++"), /*#__PURE__*/_react.default.createElement("h4", {
    className: "textDetail"
  }, "Peserta")), /*#__PURE__*/_react.default.createElement("div", {
    className: "countDetail d-flex flex-column"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "number"
  }, "100"), /*#__PURE__*/_react.default.createElement("h4", {
    className: "textDetail"
  }, "Bulan"))));
};

var _default = counter;
exports.default = _default;