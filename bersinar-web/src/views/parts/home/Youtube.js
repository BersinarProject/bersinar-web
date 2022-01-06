import React from "react";
import youtubeIllustration from "../../../assets/images/landing-page/youtubeIllustration.svg";

export default function Youtube() {
    return (
        <div className="px-1.5 py-10 sm:py-[60px] flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center">
            <div className="mb-10 sm:px-0 w-[80%] sm:w-[85%] lg:w-[45%] flex flex-col justify-center lg:justify-start items-center lg:items-start text-center lg:text-left">
                <h1 className="mb-2 sm:mb-4 font-heading text-2xl sm:text-4xl font-extrabold text-title">
                    Tersedia juga di Youtube
                </h1>
                <h2 className="mb-5 font-body text-sm sm:text-lg font-medium text-subTitle">
                    Kamu ketinggalan kelas Zoom Bersinar? Jangan khawatir,
                    Sober! Kami akan menayangkannya di Youtube agar bisa
                    ditonton kapanpun, jangan lupa subscribe channel kami, ya!
                </h2>
                <a
                    href="https://www.youtube.com/c/BersinarProject/videos"
                    target="_blank"
                    rel="noreferrer"
                    className="px-8 py-2.5 flex justify-center items-center gap-x-2.5 ring-2 hover:bg-[#E8DBDB] ring-youtube hover:ring-[#D66868] rounded-lg text-md font-heading font-bold text-youtube hover:text-[#D66868]">
                    <svg
                        width="11"
                        height="13"
                        viewBox="0 0 11 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3 fill-youtube hover:fill-[#D66868]">
                        <path
                            d="M1.53688 0.478013C0.871153 0.0543698 0 0.532583 0 1.32167V11.6783C0 12.4674 0.87115 12.9456 1.53688 12.522L9.67424 7.34366C10.2917 6.95071 10.2917 6.04929 9.67425 5.65634L1.53688 0.478013Z"
                            fill="currentColor"
                        />
                    </svg>
                    Youtube
                </a>
            </div>
            <img
                src={youtubeIllustration}
                alt="Upcoming Class"
                className="mb-10 lg:mb-0 w-[275px] h-[190px] sm:w-[400px] sm:h-[220px] lg:w-[420px] lg:h-[240px] xl:w-[460px] xl:h-[280px]"
            />
        </div>
    );
}
