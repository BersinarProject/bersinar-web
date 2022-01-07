import React from "react";
import presidenBersinar from "../../../assets/images/about-us/PresidenBersinar.webp";

export default function PresidentSpeech() {
    return (
        <div className="py-[60px] flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start">
            <img
                src={presidenBersinar}
                alt="Ahnaf Fairuzuhdy Aslam"
                className="mb-10 lg:mb-0 w-[330px] xl:w-[390px]"
            />
            <div className="w-full lg:w-1/2 flex flex-col justify-center lg:justify-start items-center lg:items-start text-center lg:text-left">
                <h1 className="mb-4 sm:mb-8 font-heading text-2xl sm:text-4xl font-extrabold text-title">
                    Sambutan Presiden Bersinar
                </h1>
                <h2 className="mb-2 sm:mb-4 font-body text-xl sm:text-2xl font-medium text-[#484848]">
                    Ahnaf Fairuzuhdy Aslam
                </h2>
                <h3 className="px-10 sm:px-0 font-body text-sm sm:text-lg font-medium text-subTitle text-justify">
                    &ldquo;Masih banyak orang yang memandang Bersinar sebatas
                    organisasi yang membantu anak-anak SMA dan gapyear untuk
                    mencapai kampus impiannya. Bukan berarti pandangan ini
                    salah, bahkan kerap kali kami memang memperkenalkan diri
                    seperti itu. Namun, bagi saya, Bersinar jauh lebih daripada
                    itu. Bersinar adalah sebuah komunitas di mana banyak orang
                    berkumpul dan berkembang bersama-sama. Jika bisa
                    dianalogikan, Bersinar layaknya sebuah universitas di mana
                    guru, pelajar, dan orang-orang yang menjaga roda kehidupan
                    di dalamnya tetap berputar (re: staf) dipertemukan.&rdquo;
                    <br />
                    <br />
                    &ldquo;Bersinar sendiri adalah wadah yang memiliki banyak
                    ruang untuk dikembangkan, wadah yang dapat menampung inovasi
                    dan aspirasi dari para anggotanya. Saya merasa beruntung
                    bisa berada di sini. Berkembang bersama Bersinar menyadarkan
                    saya bahwa ada begitu banyak hal yang dapat dijelajahi di
                    dunia ini. Di sini, saya dipertemukan dengan pemuda-pemuda
                    yang sangat bersemangat, bertalenta, dan berniat mulia untuk
                    memajukan pendidikan di Indonesia. Saya berharap Bersinar
                    bisa terus mengembangkan pengaruhnya ke masyarakat luas
                    dengan menyediakan wadah pembelajaran yang gratis dan mudah
                    diakses oleh siapa pun.&rdquo;
                </h3>
            </div>
        </div>
    );
}
