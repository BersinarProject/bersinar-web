"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./YoutubeSection.css");

var _youtubeIllustrstion = _interopRequireDefault(require("../../assets/images/landing-page/youtubeIllustrstion.svg"));

var _youtubePlayIcon = _interopRequireDefault(require("../../assets/images/landing-page/youtubePlayIcon.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const YoutubeSection = () => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "youtube-section container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "youtube-section-content d-flex flex-wrap align-items-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "youtube-text col-md-6"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "youtube-text-title"
  }, "Tersedia juga di Youtube"), /*#__PURE__*/_react.default.createElement("p", {
    className: "youtube-text-description"
  }, "Kamu ketinggalan kelas Zoom Bersinar? Jangan khawatir, Sober! Kami akan menayangkannya di Youtube agar bisa ditonton kapanpun, jangan lupa subscribe channel kami, ya!"), /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.youtube.com/c/BersinarProject/videos",
    className: "btn-youtube d-flex align-item-center text-decoration-none"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _youtubePlayIcon.default,
    alt: "play icon",
    className: "btn-youtube-icon"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "btn-youtube-text"
  }, "Youtube"))), /*#__PURE__*/_react.default.createElement("img", {
    src: _youtubeIllustrstion.default,
    alt: "youtube",
    className: "youtube-image"
  })));
};

var _default = YoutubeSection;
exports.default = _default;