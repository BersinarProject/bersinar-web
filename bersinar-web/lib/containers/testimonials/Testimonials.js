"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TestimonialCard = _interopRequireDefault(require("../../components/testimonial-card/TestimonialCard"));

require("./Testimonials.css");

var _StarIcon = _interopRequireDefault(require("../../assets/images/StarIcon.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Testimonials extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataTestimonialCards: [{
        id: 1,
        quote: '“Seneng banget bisa ketemu Bersinar, ketemu orang-orang keren yang sangat memotivasi bahwa mimpi itu bisa dijadikan kenyataan. Ada satu ucapan tutor Bersinar yang menurutku bener-bener jadi pegangan buat aku pas lagi belajar yaitu quality over quantity, bener-bener berefek untuk aku yang saat liat `Berapa soal ya yang aku kerjain?`"',
        name: "Ahmad Zakiyudin",
        edu: "ITS 2020"
      }, {
        id: 2,
        quote: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dicta quasi voluptate atque animi doloribus autem expedita amet rerum iste."',
        name: "Razan Fawwaz",
        edu: "Unsyiah 2020"
      }, {
        id: 3,
        quote: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dicta quasi voluptate atque animi doloribus autem expedita amet rerum iste."',
        name: "Yasmin Hana",
        edu: "UI 2020"
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