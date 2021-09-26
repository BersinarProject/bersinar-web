"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./footer.css");

var _brandLogo = _interopRequireDefault(require("../../assets/images/brandLogo.png"));

var _logoText = _interopRequireDefault(require("../../assets/images/logoText.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const footer = () => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "footer"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row flex justify-content-between"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-2 d-flex flex-column"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "footer-title"
  }, "Navigation"), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", {
    className: "footer-link"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "footer-link",
    href: "/"
  }, "Home")), /*#__PURE__*/_react.default.createElement("li", {
    className: "footer-link"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "footer-link",
    href: "/"
  }, "About Us")), /*#__PURE__*/_react.default.createElement("li", {
    className: "footer-link"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "footer-link",
    href: "/"
  }, "Our Class")), /*#__PURE__*/_react.default.createElement("li", {
    className: "footer-link"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "footer-link",
    href: "/"
  }, "Donate")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-2 d-flex flex-column"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "footer-title"
  }, "Class"), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", {
    className: "footer-link"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "footer-link",
    href: "/"
  }, "Saintek")), /*#__PURE__*/_react.default.createElement("li", {
    className: "footer-link"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "footer-link",
    href: "/"
  }, "Soshum")), /*#__PURE__*/_react.default.createElement("li", {
    className: "footer-link"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "footer-link",
    href: "/"
  }, "TPS")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-2 d-flex flex-column"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "footer-title"
  }, "Follow Us"), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", {
    className: "footer-link"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "footer-link",
    href: "/"
  }, "Instagram")), /*#__PURE__*/_react.default.createElement("li", {
    className: "footer-link"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "footer-link",
    href: "/"
  }, "Twitter")), /*#__PURE__*/_react.default.createElement("li", {
    className: "footer-link"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "footer-link",
    href: "/"
  }, "YouTube")), /*#__PURE__*/_react.default.createElement("li", {
    className: "footer-link"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "footer-link",
    href: "/"
  }, "LinkedIn")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-2 d-flex flex-column"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "footer-title"
  }, "Useful Link"), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", {
    className: "footer-link"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "footer-link",
    href: "/"
  }, "Materi Bersinar")), /*#__PURE__*/_react.default.createElement("li", {
    className: "footer-link"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "footer-link",
    href: "/"
  }, "Soal Bersinar")), /*#__PURE__*/_react.default.createElement("li", {
    className: "footer-link"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "footer-link",
    href: "/"
  }, "Google Calendar Bersinar")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", {
    className: ""
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "footer-logo",
    src: _brandLogo.default,
    alt: "Bersinar Logo"
  })), /*#__PURE__*/_react.default.createElement("li", {
    className: ""
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "footer-logotext",
    src: _logoText.default,
    alt: "Bersinar Logo"
  })), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-text"
  }, "Made with \u2764\uFE0F while listening", /*#__PURE__*/_react.default.createElement("span", null, " ", /*#__PURE__*/_react.default.createElement("br", null), " Favorite Crime"))))))));
};

var _default = footer;
exports.default = _default;