import React from "react";
import { NavLink } from "react-router-dom";
import FAQIllustration from "../../../assets/images/FAQIllustration.webp";
import FAQIcon from "../../../assets/icons/button-icons/FAQIcon.svg";

export default function FAQ() {
    return (
        <div className="pt-[40px] pb-10 sm:pb-[60px] mb-24 sm:mb-32 md:mb-44 flex flex-col justify-center items-center">
            <div className="mb-10">
                <img
                    src={FAQIllustration}
                    alt="FAQ"
                    className="w-[180px] h-[188px] sm:w-[216px] sm:h-[224px] lg:w-[248px] lg:h-[256px]"
                />
            </div>
            <div className="mb-10 flex flex-col justify-center items-center text-center">
                <h1 className="mb-2 sm:mb-4 font-heading text-3xl sm:text-4xl font-extrabold text-title">
                    Punya pertanyaan?
                </h1>
                <h2 className="px-5 sm:px-0 mb-4 font-body text-md sm:text-lg xl:text-xl font-medium text-subTitle">
                    Cek jawaban FAQ kami!
                </h2>
                <NavLink
                    className="w-[152px] px-3 py-2.5 flex justify-center items-center gap-x-2.5 bg-faq hover:bg-[#479CBC] transition duration-300 rounded-lg text-md font-heading font-bold text-button"
                    to="/faq">
                    <img src={FAQIcon} alt="FAQ" className="w-4" />
                    FAQ kami
                </NavLink>
            </div>
        </div>
    );
}
