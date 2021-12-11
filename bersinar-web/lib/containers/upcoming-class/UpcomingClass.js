"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _axios = _interopRequireDefault(require("axios"));

var _LiveClassCard = _interopRequireDefault(require("../../components/live-class-card/LiveClassCard"));

var _gaadaKelas = _interopRequireDefault(require("../../assets/images/landing-page/gaadaKelas.svg"));

require("./UpcomingClass.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { Link } from "react-router-dom";
// import UpcomingClassCard from "../../components/upcoming-class-card/UpcomingClassCard";
class upcomingClass extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCards: []
    };
  }

  componentDidMount() {
    /* global Swiper */
    this.swiper = new Swiper(".upcoming-class-swiper", {
      slidesPerView: "auto",
      // loop: true,
      cssMode: true
    });
    const apiUrl = "https://mocki.io/v1/ad2ddd3e-f443-48ae-838d-6231b62c4428";

    _axios.default.get(apiUrl).then(response => {
      this.setState({
        dataCards: response.data.classes
      });
    }).catch(error => {
      return error;
    });
  }

  renderItems() {
    const {
      dataCards
    } = this.state;
    return dataCards.map(dataCard => {
      return /*#__PURE__*/_react.default.createElement(_LiveClassCard.default, {
        key: dataCard.id,
        dataCard: dataCard
      });
    });
  }

  render() {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "upcoming-class"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "container upcoming-class-header d-flex flex-column justify-content-center align-items-center"
    }, /*#__PURE__*/_react.default.createElement("h1", {
      className: "upcoming-class-header-title text-center"
    }, "Telusuri Kelas-kelas Kami"), /*#__PURE__*/_react.default.createElement("h2", {
      className: "upcoming-class-header-subTitle col-md-8"
    }, "Maaf, Sob! Kelas yang kamu cari tidak tersedia. Saat ini belum ada jadwal kelas yang akan diadakan, harap tunggu ya!")), /*#__PURE__*/_react.default.createElement("div", {
      className: "upcoming-class-cards container d-flex justify-content-center align-items-center"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: _gaadaKelas.default,
      alt: "Kelas tidak tersedia",
      className: "upcoming-class-gaada-kelas"
    })));
  }

}

var _default = upcomingClass;
exports.default = _default;