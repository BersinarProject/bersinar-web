"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TestimonialCard = _interopRequireDefault(require("../../components/testimonial-card/TestimonialCard"));

require("./Testimonials.css");

var _StarIcon = _interopRequireDefault(require("../../assets/images/StarIcon.svg"));

var _pratiwi = _interopRequireDefault(require("../../assets/images/landing-page/pratiwi.png"));

var _ziyah = _interopRequireDefault(require("../../assets/images/landing-page/ziyah.png"));

var _angel = _interopRequireDefault(require("../../assets/images/landing-page/angel.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Testimonials extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataTestimonialCards: [{
        id: 1,
        quote: '"Ada satu ucapan tutor Bersinar yang menurutku bener-bener jadi pegangan, yaitu "Quality over quantity", bener-bener berefek untuk aku sampai sekarang"',
        name: "Ziyah",
        edu: "Psikologi Undip",
        img: _ziyah.default
      }, {
        id: 2,
        quote: '"Di Bersinar aku nggak cuma sekadar diajarin, tapi juga diajak diskusi seru soal materi UTBK. Berkat Bersinar juga, skorku bahkan bisa tembus 700++ pada UTBK kemarin."',
        name: "Pratiwi",
        edu: "Ilmu Politik UGM",
        img: _pratiwi.default
      }, {
        id: 3,
        quote: '"Penyampaian tutor yang mudah dicerna dan lingkungan yang produktif tapi tetap asik membantu saya memperoleh skor UTBK yang cukup memuaskan dan bisa mencapai mimpi saya lewat jalur SBMPTN kemarin”',
        name: "Angel",
        edu: "Kedokteran Undip",
        img: _angel.default
      }]
    };
  }

  componentDidMount() {
    /* global Swiper */
    this.swiper = new Swiper(".testimonials-swiper", {
      slidesPerView: "auto",
      // loop: true,
      cssMode: true
    });
  }

  renderItems() {
    const {
      dataTestimonialCards
    } = this.state;
    return dataTestimonialCards.map(dataTestimonialCard => {
      return /*#__PURE__*/_react.default.createElement(_TestimonialCard.default, {
        key: dataTestimonialCard.id,
        dataTestimonialCard: dataTestimonialCard
      });
    });
  }

  render() {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "testimonials container"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "testimonials-header d-flex flex-column justify-content-center align-items-center"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "testimonial-header-icons"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: _StarIcon.default,
      alt: "Signal Icon",
      className: "testimonial-header-icon"
    }), /*#__PURE__*/_react.default.createElement("img", {
      src: _StarIcon.default,
      alt: "Signal Icon",
      className: "testimonial-header-icon"
    }), /*#__PURE__*/_react.default.createElement("img", {
      src: _StarIcon.default,
      alt: "Signal Icon",
      className: "testimonial-header-icon"
    }), /*#__PURE__*/_react.default.createElement("img", {
      src: _StarIcon.default,
      alt: "Signal Icon",
      className: "testimonial-header-icon"
    }), /*#__PURE__*/_react.default.createElement("img", {
      src: _StarIcon.default,
      alt: "Signal Icon",
      className: "testimonial-header-icon"
    }), /*#__PURE__*/_react.default.createElement("img", {
      src: _StarIcon.default,
      alt: "Signal Icon",
      className: "testimonial-header-icon"
    })), /*#__PURE__*/_react.default.createElement("h1", {
      className: "testimonial-header-title mb-3"
    }, "Apa kata mereka?"), /*#__PURE__*/_react.default.createElement("h2", {
      className: "testimonial-header-subTitle col-md-6"
    }, "Masih ragu untuk ikut kelas Bersinar? Yuk, baca kesan & pesan dari Sobat Bersinar!")), /*#__PURE__*/_react.default.createElement("div", {
      className: "testimonial-cards container d-flex justify-content-center align-items-center"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "swiper testimonials-swiper"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "swiper-wrapper"
    }, this.renderItems()))));
  }

}

var _default = Testimonials;
exports.default = _default;