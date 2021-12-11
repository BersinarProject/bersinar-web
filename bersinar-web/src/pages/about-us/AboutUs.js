import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";

import "./AboutUs.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

import aboutUsHero from "../../assets/images/about-us/aboutUsHero.svg";
import bersinarLogoIcon from "../../assets/images/bersinar-logo/bersinarLogoIcon.svg";
import presidenBersinar from "../../assets/images/about-us/PresidenBersinar.png";
import misi1 from "../../assets/images/about-us/misi/misi-1.svg";
import misi2 from "../../assets/images/about-us/misi/misi-2.svg";
import misi3 from "../../assets/images/about-us/misi/misi-3.svg";
import misi4 from "../../assets/images/about-us/misi/misi-4.svg";
import achievement from "../../assets/images/about-us/achievement.svg";
import FAQIllustration from "../../assets/images/FAQIllustration.png";
import FAQButtonIcon from "../../assets/images/FAQButtonIcon.svg";
// import coreIcon from "../../assets/images/coreIcon.svg";
import aboutUsTribute from "../../assets/images/about-us/tribute.svg";
import vicePresidentPertama from "../../assets/images/about-us/vicePresidentPertama.png";

export default function AboutUs() {
	return (
		<div className="about-us">
			<Navbar />
			<div className="d-flex justify-content-center">
				<img
					src={aboutUsHero}
					alt="About Us Hero"
					className="about-us-hero"
				/>
			</div>
			<Container>
				<div className="what-is-bersinar d-flex justify-content-center align-items-center">
					<div className="what-is-bersinar-contents d-flex flex-column flex-wrap">
						<h1 className="what-is-bersinar-title">
							Apa itu Bersinar Project?
						</h1>
						<h2 className="what-is-bersinar-subTitle">
							Bersinar Project adalah sebuah platform edukasi yang
							menyediakan kelas-kelas gratis khusus persiapan UTBK
							dan ujian mandiri masuk perguruan tinggi.
						</h2>
					</div>
					<img src={bersinarLogoIcon} alt="Logo Bersinar" />
				</div>
				<div className="president-speech">
					<div className="president-speech-contents d-flex">
						<div className="president-speech-image">
							<img
								src={presidenBersinar}
								alt="Presiden Bersinar Project"
							/>
						</div>
						<div className="president-speech-text">
							<h1 className="president-speech-title">
								Sambutan Presiden Bersinar
							</h1>
							<h2>Ahnaf Fairuzuhdy Aslam</h2>
							<h3>
								&quot;Masih banyak orang yang memandang Bersinar
								sebatas organisasi yang membantu anak-anak SMA
								dan gapyear untuk mencapai kampus impiannya.
								Bukan berarti pandangan ini salah, bahkan kerap
								kali kami memang memperkenalkan diri seperti
								itu. Namun, bagi saya, Bersinar jauh lebih
								daripada itu. Bersinar adalah sebuah komunitas
								di mana banyak orang berkumpul dan berkembang
								bersama-sama. Jika bisa dianalogikan, Bersinar
								layaknya sebuah universitas di mana guru,
								pelajar, dan orang-orang yang menjaga roda
								kehidupan di dalamnya tetap berputar (re: staf)
								dipertemukan.&quot;
								<br />
								<br />
								&quot;Bersinar sendiri adalah wadah yang
								memiliki banyak ruang untuk dikembangkan, wadah
								yang dapat menampung inovasi dan aspirasi dari
								para anggotanya. Saya merasa beruntung bisa
								berada di sini. Berkembang bersama Bersinar
								menyadarkan saya bahwa ada begitu banyak hal
								yang dapat dijelajahi di dunia ini. Di sini,
								saya dipertemukan dengan pemuda-pemuda yang
								sangat bersemangat, bertalenta, dan berniat
								mulia untuk memajukan pendidikan di Indonesia.
								Saya berharap Bersinar bisa terus mengembangkan
								pengaruhnya ke masyarakat luas dengan
								menyediakan wadah pembelajaran yang gratis dan
								mudah diakses oleh siapa pun.&quot;
							</h3>
						</div>
					</div>
				</div>
				{/* <div className="core-values">
					<div className="core-text">
						<h1 className="core-title">Our Core Values</h1>
						<h3 className="core-subTitle py-1">
							Kultur Bersinar Project sangat penting untuk
							berjalannya program Bersinar.
						</h3>
						<h3 className="core-subTitle">
							Bersinar Project berdiri dengan lima pilar utama
							untuk sukses.
						</h3>
					</div>
					<div className="core-values-card">
						<div className="row row-cols-3 d-flex justify-content-center">
							<div className="values col-md-4">
								<div className="values-card col-12">
									<div className="col-4">
										<img src={coreIcon} alt="" />
									</div>
									<div className="col-8 align-items-center">
										<h3>Dare to Share</h3>
									</div>
								</div>
							</div>
							<div className="values col-md-4">
								<div className="values-card col-12">
									<div className="col-4">
										<img src={coreIcon} alt="" />
									</div>
									<div className="col-8 align-items-center">
										<h3>Sustainable Social Influence</h3>
									</div>
								</div>
							</div>
							<div className="values col-md-4">
								<div className="values-card col-12">
									<div className="col-4">
										<img src={coreIcon} alt="" />
									</div>
									<div className="col-8 align-items-center">
										<h3>Smart Work</h3>
									</div>
								</div>
							</div>
							<div className="values col-md-4">
								<div className="values-card col-12">
									<div className="col-4">
										<img src={coreIcon} alt="" />
									</div>
									<div className="col-8 align-items-center">
										<h3>Hospitality</h3>
									</div>
								</div>
							</div>
							<div className="values col-md-4">
								<div className="values-card col-lg-12">
									<div className="col-lg-4">
										<img src={coreIcon} alt="" />
									</div>
									<div className="col-lg-8 align-items-center">
										<h3>Purpose-driven</h3>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div> */}
				<div className="visi-bersinar d-flex flex-column justify-content-center align-items-center">
					<h1 className="visi-bersinar-title">Visi Bersinar</h1>
					<p className="col-md-9">
						Mewujudkan demokratisasi persiapan masuk perguruan
						tinggi di Indonesia melalui peningkatan akses terhadap
						pembelajaran berkualitas.
					</p>
				</div>
				<div className="misi-bersinar d-flex flex-column justify-content-center align-items-center">
					<h1 className="misi-bersinar-title">Misi Bersinar</h1>
					<div className="misi-bersinar-contents d-flex flex-column justify-content-center">
						<div className="misi-bersinar-content d-flex justify-content-center align-items-start">
							<img src={misi1} alt="Misi 1" />
							<p className="col-md-8">
								Menyediakan wadah pengembangan
								akademik/nonakademik yang mendukung pengembangan
								pola pikir terbuka dan kreatif bagi audiens dan
								pengurus Bersinar.
							</p>
						</div>
						<div className="misi-bersinar-content d-flex justify-content-center align-items-start">
							<img src={misi2} alt="Misi 2" />
							<p className="col-md-8">
								Mempertemukan para pengajar berkualitas dengan
								para pelajar berdedikasi dalam wadah yang ramah
								dan tidak penuh tekanan.
							</p>
						</div>
						<div className="misi-bersinar-content d-flex justify-content-center align-items-start">
							<img src={misi3} alt="Misi 3" />
							<p className="col-md-8">
								Memberikan kesadaran akan pentingnya long-life
								learning melalui program dan kebijakan Bersinar.
							</p>
						</div>
						<div className="misi-bersinar-content d-flex justify-content-center align-items-start">
							<img src={misi4} alt="Misi 4" />
							<p className="col-md-8">
								Mendukung pelayanan edukasi berkelanjutan sesuai
								dengan SDG ke-4 dan membantu persiapan para
								pelajar untuk menghadapi dunia kerja sesuai
								dengan SDG ke-8.
							</p>
						</div>
					</div>
				</div>
				<div className="bersinar-achievement">
					<div className="bersinar-achievement-contents d-flex justify-content-center align-items-center">
						<img
							src={achievement}
							alt="Achievement"
							className="bersinar-achievement-image"
						/>
						<div className="bersinar-achievement-text col-md-7">
							<h1 className="bersinar-achievement-title">
								Pencapaian Kami
							</h1>
							<p>
								Termasuk ke dalam 10 dari 162 tim yang terpilih
								untuk mengikuti Startup Academy di COMPFEST.
							</p>
						</div>
					</div>
				</div>
				<div className="about-us-tribute">
					<div className="about-us-tribute-header d-flex flex-column justify-content-center align-items-center">
						<img src={aboutUsTribute} alt="Tribute" />
						<h1 className="about-us-tribute-header-title text-center">
							Tribute
						</h1>
					</div>
					<div className="about-us-tribute-founder d-flex">
						<img
							src={vicePresidentPertama}
							alt="Muhammad Rai Adli"
						/>
						<div className="about-us-tribute-founder-text">
							<h2>Founder Bersinar</h2>
							<h3>Muhammad Rai Adli</h3>
							<p>
								Muhammad Rai Adli memegang peran sebagai Founder
								Bersinar. Menginisiasi sebuah project bersama
								teman-temannya, Rai menjadi penggerak awal untuk
								mengajak dan mengumpulkan teman-temannya yang
								kemudian menjadi co-founders Bersinar.
								<br />
								<br />
								Ide Rai untuk mendirikan Bersinar berupa caranya
								untuk melihat peluang sebanyak-banyaknya
								meskipun dalam pandemi. Di saat orang-orang
								mengeluh dan bermimpi untuk kembali belajar
								luring, Rai melihat potensi untuk mewadahi
								orang-orang yang mau mengajar dan belajar
								melalui Bersinar secara daring.
							</p>
						</div>
					</div>
					<div className="about-us-tribute-vice-president d-flex">
						<div className="about-us-tribute-vice-president-text">
							<h2>Vice President Pertama</h2>
							<h3>Faiha Mazaya</h3>
							<p>
								Faiha Mazaya adalah vice president Bersinar
								pertama sekaligus salah satu co-founder
								Bersinar. Melebihi jabatan yang melekat padanya,
								Mazaya, atau biasa dipanggil Mazzy, adalah
								sahabat, mentor, dan inspirasi bagi seluruh
								orang yang mengenalnya. Ia berhasil menciptakan
								rasa nyaman dan rasa kebersamaan bagi seluruh
								pengurus Bersinar. Ia juga salah satu sosok
								penting bagi Bersinar dalam penanganan konflik
								dan permasalahan yang terjadi di Bersinar. Mazzy
								meninggal karena penyakit meningitis pada Senin,
								13 September 2021.
								<br /> <br />
								<span>
									You&apos;ll be forever missed and loved,
									Faiha Mazaya.
								</span>
							</p>
						</div>
						<img src={vicePresidentPertama} alt="Faiha Mazaya" />
					</div>
				</div>
				<div className="about-us-faq">
					<div className="about-us-faq-content d-flex flex-column justify-content-center align-items-center p-0">
						<div className="about-us-faq-content-image">
							<img src={FAQIllustration} alt="Signal Icon" />
						</div>
						<div className="about-us-faq-content-text d-flex flex-column justify-content-center align-items-center">
							<h2 className="about-us-faq-content-title text-center">
								Punya pertanyaan?
							</h2>
							<h4 className="about-us-faq-content-subTitle text-center">
								Cek jawaban FAQ kami!
							</h4>
							<NavLink
								className="about-us-faq-content-button btn d-flex justify-content-center align-items-center"
								to="/faq"
							>
								<img src={FAQButtonIcon} alt="Signal Icon" />
								FAQ kami
							</NavLink>
						</div>
					</div>
				</div>
			</Container>
			<Footer />
		</div>
	);
}
