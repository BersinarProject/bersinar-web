import React from "react";

import "./YoutubeSection.css";
import starwars from "../../assets/images/starwars.jpg";

const YoutubeSection = () => {
	return (
		<div className="youtube-section container d-flex flex-wrap justify-content-around align-items-center">
			<div className="youtube-left-section col-md-6">
				<h1 className="youtube-title">Available on YouTube!</h1>
				<p className="youtube-description">
					Setelah kelas Zoom selesai, kami akan menayangkannya di
					YouTube agar bisa ditonton kapanpun!
				</p>
				<button type="button" className="btn btn-youtube px-3">
					<a
						href="https://www.youtube.com/c/BersinarProject"
						className="btn-youtube-link text-decoration-none text-white"
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
