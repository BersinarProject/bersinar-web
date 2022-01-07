import React from "react";
import donateIllustration from "../../../assets/images/landing-page/donateIllustration.svg";

export default function Donate() {
    return (
        <div className="px-1.5 py-10 sm:py-[60px] flex flex-col lg:flex-row justify-center lg:justify-between items-center">
            <img
                src={donateIllustration}
                alt="Upcoming Class"
                className="mb-5 lg:mb-0 w-[275px] h-[290px] sm:w-[400px] sm:h-[320px] lg:w-[420px] lg:h-[340px] xl:w-[460px] xl:h-[380px]"
            />
            <div className="mb-10 sm:px-0 w-[85%] sm:w-[70%] lg:w-[45%] flex flex-col justify-center lg:justify-start items-center lg:items-start text-center lg:text-left">
                <h1 className="mb-2 sm:mb-4 font-heading text-2xl sm:text-4xl font-extrabold text-title">
                    Donasi untuk Bersinar
                </h1>
                <h2 className="mb-5 font-body text-sm sm:text-lg font-medium text-subTitle">
                    Dukung Bersinar agar dapat terus berkembang dan menjangkau
                    lebih banyak pelajar lainnya dengan berdonasi!
                </h2>
                <a
                    href="https://trakteer.id/BersinarProject/"
                    target="_blank"
                    rel="noreferrer"
                    className="px-8 py-2.5 flex justify-center items-center gap-x-2.5 ring-2 hover:bg-[#D7E1DC] ring-donate hover:ring-[#47A56D] rounded-lg text-md font-heading font-bold text-donate hover:text-[#47A56D]">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 fill-donate hover:fill-[#D66868]">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.95 2C5.61848 2 5.30054 2.1317 5.06612 2.36612C4.8317 2.60054 4.7 2.91848 4.7 3.25C4.7 3.58152 4.8317 3.89946 5.06612 4.13388C5.30054 4.3683 5.61848 4.5 5.95 4.5H8.64195C8.5428 4.25396 8.42287 3.99162 8.28003 3.73192C7.71982 2.71334 6.9689 2 5.95 2ZM9 6.5V9H2V6.5H9ZM2.95 4.5C2.78652 4.10765 2.7 3.68329 2.7 3.25C2.7 2.38805 3.04241 1.5614 3.6519 0.951903C4.2614 0.34241 5.08805 0 5.95 0C8.04751 0 9.31481 1.48861 10 2.70964C10.6852 1.48861 11.9525 0 14.05 0C14.912 0 15.7386 0.34241 16.3481 0.951903C16.9576 1.5614 17.3 2.38805 17.3 3.25C17.3 3.68329 17.2135 4.10765 17.05 4.5H19C19.5523 4.5 20 4.94772 20 5.5V10C20 10.5523 19.5523 11 19 11H18.2V19C18.2 19.5523 17.7523 20 17.2 20H2.8C2.24772 20 1.8 19.5523 1.8 19V11H1C0.447715 11 0 10.5523 0 10V5.5C0 4.94772 0.447715 4.5 1 4.5H2.95ZM3.8 11V18H9V11H3.8ZM11 11V18H16.2V11H11ZM18 9H11V6.5H18V9ZM14.05 4.5C14.3815 4.5 14.6995 4.3683 14.9339 4.13388C15.1683 3.89946 15.3 3.58152 15.3 3.25C15.3 2.91848 15.1683 2.60054 14.9339 2.36612C14.6995 2.1317 14.3815 2 14.05 2C13.0311 2 12.2802 2.71334 11.72 3.73192C11.5771 3.99162 11.4572 4.25396 11.3581 4.5H14.05Z"
                            fill="currentColor"
                        />
                    </svg>
                    Donasi di sini
                </a>
            </div>
        </div>
    );
}