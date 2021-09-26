"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

var _reactRouterDom = require("react-router-dom");

var _upcomingClassCard = _interopRequireDefault(require("../../components/upcoming-class-card/upcomingClassCard"));

require("./UpcomingClass.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const UpcomingClass = () => {
  const [getDataUpcomingClassCard] = (0, _react.useState)([{
    id: 1,
    category: "Saintek",
    tagLine: "#MenyinariFisika",
    title: "Belajar Fisika Kuantum Bareng Razan",
    tutor: "Razan"
  }, {
    id: 2,
    category: "Soshum",
    tagLine: "#MenyinariEkonomi",
    title: "Belajar Dasar Ekonomi Bareng Yasmin",
    tutor: "Yasmin"
  }, {
    id: 3,
    category: "TPS",
    tagLine: "#MenyinariEnglish",
    title: "Tenses and Conjunction with Ahnaf",
    tutor: "Ahnaf"
  }]);
  return /*#__PURE__*/_react.React.createElement("div", {
    className: "upcoming-class"
  }, /*#__PURE__*/_react.React.createElement("div", {
    className: "upcoming-class-header d-flex flex-column justify-content-center align-items-center"
  }, /*#__PURE__*/_react.React.createElement("h1", {
    className: "upcoming-class-title mb-3"
  }, "Upcoming Classes"), /*#__PURE__*/_react.React.createElement("h2", {
    className: "upcoming-class-subTitle"
  }, "Kelas-kelas Bersinar yang akan diadakan selanjutnya")), /*#__PURE__*/_react.React.createElement(_upcomingClassCard.default, {
    dataUpcomingClassCard: getDataUpcomingClassCard
  }), /*#__PURE__*/_react.React.createElement("div", {
    className: "btn d-flex justify-content-center align-items-center"
  }, /*#__PURE__*/_react.React.createElement(_reactRouterDom.Link, {
    to: "/our-class",
    className: "btn-more btn btn-shadow px-4"
  }, "More Class")));
};

var _default = UpcomingClass;
exports.default = _default;