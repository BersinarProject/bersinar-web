import React from "react";
import starIcon from "../../../assets/icons/starIcon.svg";
import imgZiyah from "../../../assets/images/landing-page/ziyah.webp";
import imgPratiwi from "../../../assets/images/landing-page/pratiwi.webp";
import imgAngel from "../../../assets/images/landing-page/angel.webp";
import TestimonialCard from "../../../components/TestimonialCard";

export default function Testimonials() {
    const printStars = () => {
        const stars = [];
        for (var i = 0; i < 5; i++) {
            stars.push(<img src={starIcon} alt="Star" key={i} />);
        }
        return stars;
    };

    const dataTestimonials = [
        {
            id: 1,
            quote: '"Ada satu ucapan tutor Bersinar yang menurutku bener-bener jadi pegangan, yaitu "Quality over quantity", bener-bener berefek untuk aku sampai sekarang"',
            name: "Ziyah",
            edu: "Psikologi Undip",
            img: imgZiyah
        },
        {
            id: 2,
            quote: '"Di Bersinar aku nggak cuma sekadar diajarin, tapi juga diajak diskusi seru soal materi UTBK. Berkat Bersinar juga, skorku bahkan bisa tembus nilai 700++."',
            name: "Pratiwi",
            edu: "Ilmu Politik UGM",
            img: imgPratiwi
        },
        {
            id: 3,
            quote: '"Penyampaian tutor yang mudah dicerna dan lingkungan yang produktif tapi tetap asik membantu saya memperoleh skor UTBK yang cukup memuaskan.”',
            name: "Angel",
            edu: "Kedokteran Undip",
            img: imgAngel
        }
    ];

    return (
        <div className="px-2 py-10 sm:py-[60px] flex flex-col justify-center items-center">
            <div className="mb-5 flex gap-x-2.5">{printStars()}</div>
            <div className="mb-10 flex flex-col justify-center items-center text-center">
                <h1 className="mb-2 sm:mb-4 font-heading text-2xl sm:text-4xl font-extrabold text-title">
                    Apa kata mereka?
                </h1>
                <h2 className="px-5 sm:px-0 w-[85%] sm:w-[70%] lg:w-2/3 font-body text-sm sm:text-lg font-medium text-subTitle">
                    Masih ragu untuk ikut kelas Bersinar? Yuk, baca kesan &
                    pesan dari Sobat Bersinar!
                </h2>
            </div>
            <div className="px-8 sm:px-0 mx-auto z-10 w-full sm:w-[512px] md:w-[640px] lg:w-[832px] xl:w-full relative overflow-hidden touch-pan-y">
                <div className=" px-4 h-[200px] flex justify-start items-center xl:justify-center xl:items-center gap-x-6 lg:gap-x-12 snap-mandatory snap-x overflow-auto ">
                    {dataTestimonials.map((dataTestimonial) => {
                        return (
                            <TestimonialCard
                                dataTestimonial={dataTestimonial}
                                key={dataTestimonial.id}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
