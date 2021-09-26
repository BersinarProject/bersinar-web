"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./YoutubeSection.css");

var _starwars = _interopRequireDefault(require("../../assets/images/starwars.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const YoutubeSection = () => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "youtube-section container d-flex flex-wrap justify-content-around align-items-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "youtube-text col-md-9"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "youtube-title"
  }, "Available on YouTube!"), /*#__PURE__*/_react.default.createElement("p", {
    className: "youtube-description"
  }, "Setelah kelas Zoom selesai, kami akan menayangkannya di YouTube agar bisa ditonton kapanpun!"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "btn btn-youtube px-3"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.youtube.com/c/BersinarProject",
    className: "btn-youtube-link text-decoration-none text-white"
  }, "Youtube"))), /*#__PURE__*/_react.default.createElement("img", {
    src: _starwars.default,
    alt: "starwars",
    className: "youtube-image"
  }));
};

var _default = YoutubeSection;
exports.default = _default;