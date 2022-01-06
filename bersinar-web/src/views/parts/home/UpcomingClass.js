import React from "react";
import gaadaKelas from "../../../assets/images/landing-page/gaadaKelas.svg";

export default function UpcomingClass() {
    return (
        <div className="py-10 sm:py-[60px] flex flex-col justify-center items-center">
            <div className="mb-10 flex flex-col justify-center items-center text-center">
                <h1 className="mb-3 sm:mb-4 font-heading text-2xl sm:text-4xl font-extrabold text-title">
                    Telusuri Kelas-kelas Kami
                </h1>
                <img
                    src={gaadaKelas}
                    alt="Upcoming Class"
                    className="mb-2.5 w-[160px] h-[250px] sm:w-[200px] sm:h-[290px] lg:w-[240px] lg:h-[330px]"
                />
                <h2 className="px-5 sm:px-0 w-[85%] sm:w-[70%] lg:w-2/3 font-body text-sm sm:text-lg font-medium text-subTitle">
                    Maaf, Sob! Kelas yang kamu cari tidak tersedia. Saat ini
                    belum ada jadwal kelas yang akan diadakan, harap tunggu ya!
                </h2>
            </div>
        </div>
    );
}
