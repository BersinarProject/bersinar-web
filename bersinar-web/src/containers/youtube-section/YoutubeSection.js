import React from "react";
import "./YoutubeSection.css";
import starwars from "../../assets/images/starwars.jpg";

const YoutubeSection = () => {
	return (
		<div className="container youtube-section d-flex flex-wrap justify-content-around align-items-center">
			<div className="youtube-left-section">
				<h1 className="youtube-title">Available on YouTube!</h1>
				<p className="youtube-description">
					Setelah kelas Zoom selesai, kami akan menayangkannya di
					YouTube agar bisa ditonton kapanpun!
				</p>
				<button type="button" className="btn-youtube">
					<a
						href="https://www.youtube.com/c/BersinarProject"
						className="text-decoration-none text-white"
					>
						Youtube
					</a>
				</button>
			</div>
			<img
				src={starwars}
				alt="starwars"
				className="youtube-section-img"
			/>
		</div>
	);
};

export default YoutubeSection;
