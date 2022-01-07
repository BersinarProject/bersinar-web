import React from "react";
import { NavLink } from "react-router-dom";
import landingPageHero from "../../../assets/images/landing-page/landingPageHero.webp";
import startIcon from "../../../assets/icons/button-icons/startIcon.svg";

export default function Hero() {
    return (
        <div className="px-6 sm:px-0 pt-40 pb-20 sm:pb-32 sm:pt-48 lg:pt-40">
            <div className="flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center">
                <div className="flex flex-col items-center lg:items-start w-full lg:w-2/3 xl:w-[45%] text-center lg:text-left">
                    <header className="mb-4 font-heading text-[40px] sm:text-[56px] leading-tight sm:leading-extra-loose tracking-tighter font-black text-title">
                        Mantepin UTBK-Mu dari Sekarang!
                    </header>
                    <p className="mb-8 w-[85%] lg:w-[80%] font-body text-lg leading-7 font-medium text-subTitle">
                        Platform kolaborasi pelajar Indonesia untuk meraih mimpi
                        dan <span className="font-bold">#BersinarBersama</span>
                    </p>
                    <NavLink
                        className="w-44 px-6 py-2.5 flex justify-center items-center gap-x-2.5 bg-start hover:bg-[#E58538] transition duration-300 rounded-lg text-md font-heading font-bold text-button"
                        to="/our-class">
                        <img
                            src={startIcon}
                            alt="Mulai Belajar"
                            className="w-4"
                        />
                        Mulai Belajar
                    </NavLink>
                </div>
                <div>
                    <img
                        src={landingPageHero}
                        alt="Hero"
                        className="w-80 sm:w-landingPage mb-5 lg:-mb-10"
                    />
                </div>
            </div>
        </div>
    );
}
