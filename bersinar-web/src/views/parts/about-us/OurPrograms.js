import React from "react";
import bersinarMengajar from "../../../assets/images/about-us/programs/program3.webp";
import OurProgramCard from "../../../components/OurProgramCard";
import bersinarFWB from "../../../assets/images/about-us/programs/program1.webp";
import bersinarNgabers from "../../../assets/images/about-us/programs/program2.webp";

export default function OurPrograms() {
    return (
        <div className="py-10 sm:py-[60px] flex flex-col justify-center items-center">
            <div className="mb-12 md:mb-20 sm:px-0 w-2/3 sm:w-9/12 md:w-9/12 lg:w-2/3 flex flex-col justify-center items-center text-center">
                <h1 className="mb-2 sm:mb-4 font-heading text-2xl sm:text-4xl font-extrabold text-title">
                    Program Kami
                </h1>
                <h2 className="font-body text-sm sm:text-lg font-medium text-subTitle">
                    Kami menyediakan berbagai program pendidikan yang dapat
                    diakses oleh seluruh pelajar Indonesia.
                </h2>
            </div>
            <div className="px-8 sm:px-0 mx-auto z-10 w-full relative overflow-hidden touch-pan-y">
                <div className="h-[452px] sm:h-[630px] flex justify-start items-start gap-x-14 sm:gap-x-24 snap-mandatory snap-x overflow-auto sm:no-scrollbar">
                    <OurProgramCard
                        src={bersinarMengajar}
                        alt="Bersinar Mengajar"
                        title="#BersinarMengajar - Kelas Gratis Harian">
                        Kelas harian yang membahas beragam pelajaran untuk
                        mempersiapkan UTBK dan ujian mandiri lainnya. Kelas ini
                        difasilitasi dengan tutor-tutor Bersinar yang seru,
                        asyik, dan berkualitas.
                    </OurProgramCard>
                    <OurProgramCard
                        src={bersinarFWB}
                        alt="FWB"
                        title="FWB - Making Friends with Bersinar">
                        Kelompok belajar dan mentoring yang dibimbing oleh para
                        mentor Bersinar. Tempat ini jadi ajang Sobat Bersinar
                        untuk mencari teman, belajar bersama, dan saling berbagi
                        cerita.
                    </OurProgramCard>
                    <OurProgramCard
                        src={bersinarNgabers}
                        alt="Ngabers"
                        title="#NGABERS - Ngambis Bareng Bersinar">
                        Program intensif ujian mandiri 4 bulan dengan
                        menempatkan peserta bersama dengan tutor-tutor Bersinar
                        di dalam satu wadah. Program ini dikhususkan untuk UTUL
                        UGM dan SIMAK UI dan diadakan secara gratis.
                    </OurProgramCard>
                </div>
            </div>
        </div>
    );
}
