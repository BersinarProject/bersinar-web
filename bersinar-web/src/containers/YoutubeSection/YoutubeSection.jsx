import React from "react";
import youtube from "../../assets/images/youtubeIllustration.svg";
import playIcon from "../../assets/icons/buttons/play.svg";
import "./YoutubeSection.css";

export default function YoutubeSection() {
	return (
		<div className="youtube-section container">
			<div className="youtube-section-content d-flex flex-wrap align-items-center">
				<div className="youtube-text col-md-6">
					<h1 className="youtube-text-title">
						Tersedia juga di Youtube
					</h1>
					<p className="youtube-text-description">
						Kamu ketinggalan kelas Zoom Bersinar? Jangan khawatir,
						Sober! Kami akan menayangkannya di Youtube agar bisa
						ditonton kapanpun, jangan lupa subscribe channel kami,
						ya!
					</p>
					<a
						href="https://www.youtube.com/c/BersinarProject/videos"
						className="btn-youtube d-flex align-item-center text-decoration-none"
					>
						<img
							src={playIcon}
							alt="play icon"
							className="btn-youtube-icon"
						/>
						<span className="btn-youtube-text">Youtube</span>
					</a>
				</div>
				<img src={youtube} alt="youtube" className="youtube-image" />
			</div>
		</div>
	);
}
