"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AboutUs;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactBootstrap = require("react-bootstrap");

require("./AboutUs.css");

var _Navbar = _interopRequireDefault(require("../../components/navbar/Navbar"));

var _Footer = _interopRequireDefault(require("../../components/footer/Footer"));

var _aboutUsHero = _interopRequireDefault(require("../../assets/images/about-us/aboutUsHero.svg"));

var _bersinarLogoIcon = _interopRequireDefault(require("../../assets/images/bersinar-logo/bersinarLogoIcon.svg"));

var _PresidenBersinar = _interopRequireDefault(require("../../assets/images/about-us/PresidenBersinar.png"));

var _smartWork = _interopRequireDefault(require("../../assets/images/about-us/values/smartWork.svg"));

var _hospitality = _interopRequireDefault(require("../../assets/images/about-us/values/hospitality.svg"));

var _daretoShare = _interopRequireDefault(require("../../assets/images/about-us/values/daretoShare.svg"));

var _socialInfluence = _interopRequireDefault(require("../../assets/images/about-us/values/socialInfluence.svg"));

var _misi = _interopRequireDefault(require("../../assets/images/about-us/misi/misi-1.svg"));

var _misi2 = _interopRequireDefault(require("../../assets/images/about-us/misi/misi-2.svg"));

var _misi3 = _interopRequireDefault(require("../../assets/images/about-us/misi/misi-3.svg"));

var _misi4 = _interopRequireDefault(require("../../assets/images/about-us/misi/misi-4.svg"));

var _program = _interopRequireDefault(require("../../assets/images/about-us/programs/program1.png"));

var _program2 = _interopRequireDefault(require("../../assets/images/about-us/programs/program2.png"));

var _program3 = _interopRequireDefault(require("../../assets/images/about-us/programs/program3.png"));

var _achievement = _interopRequireDefault(require("../../assets/images/about-us/achievement.svg"));

var _FAQIllustration = _interopRequireDefault(require("../../assets/images/FAQIllustration.png"));

var _FAQButtonIcon = _interopRequireDefault(require("../../assets/images/FAQButtonIcon.svg"));

var _coreIcon = _interopRequireDefault(require("../../assets/images/coreIcon.svg"));

var _tribute = _interopRequireDefault(require("../../assets/images/about-us/tribute.svg"));

var _founderBersinar = _interopRequireDefault(require("../../assets/images/about-us/founderBersinar.png"));

var _vicePresidentPertama = _interopRequireDefault(require("../../assets/images/about-us/vicePresidentPertama.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AboutUs() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "about-us"
  }, /*#__PURE__*/_react.default.createElement(_Navbar.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "d-flex justify-content-center"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _aboutUsHero.default,
    alt: "About Us Hero",
    className: "about-us-hero"
  })), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Container, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "what-is-bersinar d-flex justify-content-center align-items-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "what-is-bersinar-contents d-flex flex-column flex-wrap"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "what-is-bersinar-title"
  }, "Apa itu Bersinar?"), /*#__PURE__*/_react.default.createElement("h2", {
    className: "what-is-bersinar-subTitle"
  }, "Bersinar adalah sebuah platform edukasi yang menyediakan kelas-kelas gratis khusus persiapan UTBK dan ujian mandiri masuk perguruan tinggi.")), /*#__PURE__*/_react.default.createElement("img", {
    src: _bersinarLogoIcon.default,
    alt: "Logo Bersinar"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "president-speech"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "president-speech-contents d-flex"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "president-speech-image"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _PresidenBersinar.default,
    alt: "Presiden Bersinar"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "president-speech-text"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "president-speech-title"
  }, "Sambutan Presiden Bersinar"), /*#__PURE__*/_react.default.createElement("h2", null, "Ahnaf Fairuzuhdy Aslam"), /*#__PURE__*/_react.default.createElement("h3", null, "\"Masih banyak orang yang memandang Bersinar sebatas organisasi yang membantu anak-anak SMA dan gapyear untuk mencapai kampus impiannya. Bukan berarti pandangan ini salah, bahkan kerap kali kami memang memperkenalkan diri seperti itu. Namun, bagi saya, Bersinar jauh lebih daripada itu. Bersinar adalah sebuah komunitas di mana banyak orang berkumpul dan berkembang bersama-sama. Jika bisa dianalogikan, Bersinar layaknya sebuah universitas di mana guru, pelajar, dan orang-orang yang menjaga roda kehidupan di dalamnya tetap berputar (re: staf) dipertemukan.\"", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "\"Bersinar sendiri adalah wadah yang memiliki banyak ruang untuk dikembangkan, wadah yang dapat menampung inovasi dan aspirasi dari para anggotanya. Saya merasa beruntung bisa berada di sini. Berkembang bersama Bersinar menyadarkan saya bahwa ada begitu banyak hal yang dapat dijelajahi di dunia ini. Di sini, saya dipertemukan dengan pemuda-pemuda yang sangat bersemangat, bertalenta, dan berniat mulia untuk memajukan pendidikan di Indonesia. Saya berharap Bersinar bisa terus mengembangkan pengaruhnya ke masyarakat luas dengan menyediakan wadah pembelajaran yang gratis dan mudah diakses oleh siapa pun.\"")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "core-values"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "core-text d-flex flex-column justify-content-center align-items-center"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "core-title"
  }, "Our Core Values"), /*#__PURE__*/_react.default.createElement("h3", {
    className: "core-subTitle col-md-8"
  }, "Sebagai salah satu platform penyedia akses pendidikan yang bisa dijangkau siapapun, kami memiliki nilai-nilai (etos kerja/inti) yang kami junjung.")), /*#__PURE__*/_react.default.createElement("div", {
    className: "core-values-card"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "core-values-card-content d-flex flex-wrap"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "values"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "values-card d-flex justify-content-center align-items-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "values-card-image"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _smartWork.default,
    alt: "Smart Work",
    className: "values-card-image1"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-5"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "SmartWork")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "values"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "values-card d-flex justify-content-center align-items-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "values-card-image"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _hospitality.default,
    alt: "Hospitality",
    className: "values-card-image2"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-5"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Hospitality")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "values"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "values-card d-flex justify-content-center align-items-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "values-card-image"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _coreIcon.default,
    alt: "Purpose Driven",
    className: "values-card-image3"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-5"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Purpose-Driven")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "values"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "values-card d-flex justify-content-center align-items-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "values-card-image"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _daretoShare.default,
    alt: "Dare to Share",
    className: "values-card-image4"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-5"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Dare to Share")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "values"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "values-card d-flex justify-content-center align-items-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "values-card-image"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _socialInfluence.default,
    alt: "Influence",
    className: "values-card-image5"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-5"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Sustainable Social Influence"))))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "our-program d-flex flex-column justify-content-center align-items-center"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "our-program-title"
  }, "Program Kami"), /*#__PURE__*/_react.default.createElement("h2", {
    className: "our-program-subTitle col-md-6"
  }, "Kami menyediakan berbagai program pendidikan yang dapat diakses oleh seluruh pelajar Indonesia."), /*#__PURE__*/_react.default.createElement("div", {
    className: "our-program-contents d-flex flex-wrap justify-content-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "our-program-content d-flex flex-column"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _program3.default,
    alt: "FWB",
    className: "our-program-content-image"
  }), /*#__PURE__*/_react.default.createElement("h3", {
    className: "our-program-content-title"
  }, "#BersinarMengajar - Kelas Gratis Harian"), /*#__PURE__*/_react.default.createElement("p", null, "Kelas harian yang membahas beragam pelajaran untuk mempersiapkan UTBK dan ujian mandiri lainnya. Kelas ini difasilitasi dengan tutor-tutor Bersinar yang seru, asyik, dan berkualitas.")), /*#__PURE__*/_react.default.createElement("div", {
    className: "our-program-content d-flex flex-column"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _program2.default,
    alt: "Ngabers",
    className: "our-program-content-image"
  }), /*#__PURE__*/_react.default.createElement("h3", {
    className: "our-program-content-title"
  }, "#NGABERS - Ngambis Bareng Bersinar"), /*#__PURE__*/_react.default.createElement("p", null, "Program intensif ujian mandiri 4 bulan dengan menempatkan peserta bersama dengan tutor-tutor Bersinar di dalam satu wadah. Program ini dikhususkan untuk UTUL UGM dan SIMAK UI dan diadakan secara gratis.")), /*#__PURE__*/_react.default.createElement("div", {
    className: "our-program-content d-flex flex-column"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _program.default,
    alt: "Ngabers",
    className: "our-program-content-image"
  }), /*#__PURE__*/_react.default.createElement("h3", {
    className: "our-program-content-title"
  }, "FWB - Making Friends with Bersinar"), /*#__PURE__*/_react.default.createElement("p", null, "Kelompok belajar dan mentoring yang dibimbing oleh para mentor Bersinar. Tempat ini jadi ajang Sobat Bersinar untuk mencari teman, belajar bersama, dan saling berbagi cerita.")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "visi-bersinar d-flex flex-column justify-content-center align-items-center"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "visi-bersinar-title"
  }, "Visi Bersinar"), /*#__PURE__*/_react.default.createElement("p", {
    className: "col-md-9"
  }, "Mewujudkan demokratisasi persiapan masuk perguruan tinggi di Indonesia melalui peningkatan akses terhadap pembelajaran berkualitas.")), /*#__PURE__*/_react.default.createElement("div", {
    className: "misi-bersinar d-flex flex-column justify-content-center align-items-center"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "misi-bersinar-title"
  }, "Misi Bersinar"), /*#__PURE__*/_react.default.createElement("div", {
    className: "misi-bersinar-contents d-flex flex-column justify-content-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "misi-bersinar-content d-flex justify-content-center align-items-start"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _misi.default,
    alt: "Misi 1"
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: "col-md-8"
  }, "Menyediakan wadah pengembangan akademik/nonakademik yang mendukung pengembangan pola pikir terbuka dan kreatif bagi audiens dan pengurus Bersinar.")), /*#__PURE__*/_react.default.createElement("div", {
    className: "misi-bersinar-content d-flex justify-content-center align-items-start"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _misi2.default,
    alt: "Misi 2"
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: "col-md-8"
  }, "Mempertemukan para pengajar berkualitas dengan para pelajar berdedikasi dalam wadah yang ramah dan tidak penuh tekanan.")), /*#__PURE__*/_react.default.createElement("div", {
    className: "misi-bersinar-content d-flex justify-content-center align-items-start"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _misi3.default,
    alt: "Misi 3"
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: "col-md-8"
  }, "Memberikan kesadaran akan pentingnya long-life learning melalui program dan kebijakan Bersinar.")), /*#__PURE__*/_react.default.createElement("div", {
    className: "misi-bersinar-content d-flex justify-content-center align-items-start"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _misi4.default,
    alt: "Misi 4"
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: "col-md-8"
  }, "Mendukung pelayanan edukasi berkelanjutan sesuai dengan SDG ke-4 dan membantu persiapan para pelajar untuk menghadapi dunia kerja sesuai dengan SDG ke-8.")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "bersinar-achievement"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "bersinar-achievement-contents d-flex justify-content-center align-items-center"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _achievement.default,
    alt: "Achievement",
    className: "bersinar-achievement-image"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "bersinar-achievement-text col-md-7"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "bersinar-achievement-title"
  }, "Pencapaian Kami"), /*#__PURE__*/_react.default.createElement("p", null, "Termasuk ke dalam 10 dari 162 tim yang terpilih untuk mengikuti Startup Academy di COMPFEST.")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "about-us-tribute"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "about-us-tribute-header d-flex flex-column justify-content-center align-items-center"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _tribute.default,
    alt: "Tribute"
  }), /*#__PURE__*/_react.default.createElement("h1", {
    className: "about-us-tribute-header-title text-center"
  }, "Tribute")), /*#__PURE__*/_react.default.createElement("div", {
    className: "about-us-tribute-founder d-flex"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _founderBersinar.default,
    alt: "Muhammad Rai Adli"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "about-us-tribute-founder-text"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Founder Bersinar"), /*#__PURE__*/_react.default.createElement("h3", null, "Muhammad Rai Adli"), /*#__PURE__*/_react.default.createElement("p", null, "Muhammad Rai Adli memegang peran sebagai Founder Bersinar. Menginisiasi sebuah project bersama teman-temannya, Rai menjadi penggerak awal untuk mengajak dan mengumpulkan teman-temannya yang kemudian menjadi co-founders Bersinar.", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "Ide Rai untuk mendirikan Bersinar berupa caranya untuk melihat peluang sebanyak-banyaknya meskipun dalam pandemi. Di saat orang-orang mengeluh dan bermimpi untuk kembali belajar luring, Rai melihat potensi untuk mewadahi orang-orang yang mau mengajar dan belajar melalui Bersinar secara daring."))), /*#__PURE__*/_react.default.createElement("div", {
    className: "about-us-tribute-vice-president d-flex"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "about-us-tribute-vice-president-text"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Vice President Pertama"), /*#__PURE__*/_react.default.createElement("h3", null, "Faiha Mazaya"), /*#__PURE__*/_react.default.createElement("p", null, "Faiha Mazaya adalah vice president Bersinar pertama sekaligus salah satu co-founder Bersinar. Melebihi jabatan yang melekat padanya, Mazaya, atau biasa dipanggil Mazzy, adalah sahabat, mentor, dan inspirasi bagi seluruh orang yang mengenalnya. Ia berhasil menciptakan rasa nyaman dan rasa kebersamaan bagi seluruh pengurus Bersinar. Ia juga salah satu sosok penting bagi Bersinar dalam penanganan konflik dan permasalahan yang terjadi di Bersinar. Mazzy meninggal karena penyakit meningitis pada Senin, 13 September 2021.", /*#__PURE__*/_react.default.createElement("br", null), " ", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("span", null, "You'll be forever missed and loved, Faiha Mazaya."))), /*#__PURE__*/_react.default.createElement("img", {
    src: _vicePresidentPertama.default,
    alt: "Faiha Mazaya"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "about-us-faq"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "about-us-faq-content d-flex flex-column justify-content-center align-items-center p-0"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "about-us-faq-content-image"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _FAQIllustration.default,
    alt: "Signal Icon"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "about-us-faq-content-text d-flex flex-column justify-content-center align-items-center"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "about-us-faq-content-title text-center"
  }, "Punya pertanyaan?"), /*#__PURE__*/_react.default.createElement("h3", {
    className: "about-us-faq-content-subTitle text-center"
  }, "Cek jawaban FAQ kami!"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    className: "about-us-faq-content-button btn d-flex justify-content-center align-items-center",
    to: "/faq"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _FAQButtonIcon.default,
    alt: "Signal Icon"
  }), "FAQ kami"))))), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
}