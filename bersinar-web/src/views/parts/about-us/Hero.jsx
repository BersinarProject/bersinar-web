import React from "react";
import aboutUsHero from "../../../assets/images/about-us/aboutUsHero.webp";
import bersinarLogoIconOnly from "../../../assets/icons/bersinar-logo/bersinarLogoIconOnly.webp";

export default function Hero() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="-ml-8 pt-14 lg:pt-5 xl:pt-0">
                <img
                    src={aboutUsHero}
                    alt="About Us"
                    className="w-[500px] lg:w-[600px] xl:w-[700px] bg-body"
                />
            </div>
            <div className="py-10 md:py-[60px] flex justify-around items-center">
                <div className="px-10 sm:px-0 md:w-[60%] lg:w-[40%] flex flex-col justify-start items-start">
                    <h1 className="mb-2 sm:mb-4 font-heading text-3xl sm:text-4xl font-black text-title">
                        Apa itu Bersinar?
                    </h1>
                    <h2 className="font-body text-sm sm:text-lg font-medium text-justify text-subTitle">
                        Bersinar adalah sebuah platform edukasi yang menyediakan
                        kelas-kelas gratis khusus persiapan UTBK dan ujian
                        mandiri masuk perguruan tinggi.
                    </h2>
                </div>
                <div>
                    <img
                        src={bersinarLogoIconOnly}
                        alt="Bersinar Project"
                        className="hidden md:block w-[200px] lg:w-[240px] xl:w-[280px]"
                    />
                </div>
            </div>
        </div>
    );
}
