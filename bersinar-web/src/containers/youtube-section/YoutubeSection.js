import React from "react";

import "./YoutubeSection.css";
import youtube from "../../assets/images/youtube.svg";
import playIcon from "../../assets/images/play.svg";

const YoutubeSection = () => {
	return (
		<div className="youtube-section">
			<div className="container d-flex flex-wrap justify-content-around align-items-center">
				<div className="youtube-text col-md-6">
					<h1 className="youtube-title">Available on YouTube!</h1>
					<p className="youtube-description py-2">
						Setelah kelas Zoom selesai, kami akan menayangkannya di
						YouTube agar bisa ditonton kapanpun!
					</p>
					<a href="/#" className="btn-youtube">
						<img
							src={playIcon}
							alt="play icon"
							className="youtube-icon"
						/>
						Youtube
					</a>
				</div>
				<img src={youtube} alt="youtube" className="youtube-image" />
			</div>
		</div>
	);
};

export default YoutubeSection;
