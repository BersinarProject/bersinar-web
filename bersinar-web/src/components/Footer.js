import React from "react";
import FooterLink from "./FooterLink";
import bersinarLogoIconText from "../assets/icons/bersinar-logo/bersinarLogoIconText.svg";

export default function Footer() {
    return (
        <div className="pt-14 sm:pt-24 pb-2.5 sm:pb-24 bg-footer rounded-t-2xl">
            <div className="container">
                <div className="px-10 sm:px-0 grid grid-cols-1 xl:grid-cols-4 lg:gap-x-10">
                    <div className="grid grid-cols-4 grid-rows-3 sm:grid-rows-2 lg:grid-rows-1 row-start-2 xl:row-start-auto col-span-3 gap-y-10 lg:gap-y-0">
                        <div className="flex flex-col justify-start items-start col-span-2 sm:col-auto">
                            <h1 className="mb-4 font-heading text-2xl font-extrabold text-link">
                                Navigasi
                            </h1>
                            <ul className="w-max flex flex-col gap-y-4">
                                <li>
                                    <FooterLink to="/">Beranda</FooterLink>
                                </li>
                                <li>
                                    <FooterLink to="/our-class">
                                        Jadwal Kelas
                                    </FooterLink>
                                </li>
                                <li>
                                    <FooterLink to="/about-us">
                                        Tentang Kami
                                    </FooterLink>
                                </li>
                                <li>
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://trakteer.id/BersinarProject/"
                                        className="text-md font-body font-medium hover:font-semibold text-link">
                                        Donasi
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col justify-start items-center lg:items-start col-span-2 sm:col-auto">
                            <h1 className="mb-4 font-heading text-2xl font-extrabold text-link">
                                Kelas
                            </h1>
                            <ul className="w-max flex flex-col gap-y-4">
                                <li>
                                    <FooterLink to="/our-class">
                                        Saintek
                                    </FooterLink>
                                </li>
                                <li>
                                    <FooterLink to="/our-class">
                                        Soshum
                                    </FooterLink>
                                </li>
                                <li>
                                    <FooterLink to="/our-class">TPS</FooterLink>
                                </li>
                            </ul>
                        </div>
                        <div className="-mt-5 sm:mt-0 mx-0 sm:mx-auto lg:mx-0 flex flex-col justify-start items-start col-span-4 sm:col-span-2 lg:col-auto">
                            <h1 className="mb-4 font-heading text-2xl font-extrabold text-link">
                                Media Sosial
                            </h1>
                            <ul className="w-max flex flex-col gap-y-4">
                                <li>
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://instagram.com/bersinarproject"
                                        className="text-md font-body font-medium hover:font-semibold text-link">
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://twitter.com/bersinarproject"
                                        className="text-md font-body font-medium hover:font-semibold text-link">
                                        Twitter
                                    </a>
                                </li>
                                <li>
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://youtube.com/bersinarproject"
                                        className="text-md font-body font-medium hover:font-semibold text-link">
                                        YouTube
                                    </a>
                                </li>
                                <li>
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://www.linkedin.com/company/bersinar"
                                        className="text-md font-body font-medium hover:font-semibold text-link">
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://tiktok.com/@bersinarproject"
                                        className="text-md font-body font-medium hover:font-semibold text-link">
                                        TikTok
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col justify-start items-start col-span-4 sm:col-span-2 lg:col-auto">
                            <h1 className="mb-4 font-heading text-2xl font-extrabold text-link">
                                Tautan Penting
                            </h1>
                            <ul className="w-max flex flex-col gap-y-4">
                                <li>
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://bit.ly/MateriBersinar"
                                        className="text-md font-body font-medium hover:font-semibold text-link">
                                        Materi
                                    </a>
                                </li>
                                <li>
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://bit.ly/SoalBersinar"
                                        className="text-md font-body font-medium hover:font-semibold text-link">
                                        Soal
                                    </a>
                                </li>
                                <li>
                                    <FooterLink to="/our-class">
                                        Kalender
                                    </FooterLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mb-10 xl:mb-0 flex flex-col justify-start items-start order-1">
                        <ul>
                            <li className="mb-3">
                                <img
                                    className="w-[220px] sm:w-[240px]"
                                    src={bersinarLogoIconText}
                                    alt="Bersinar Logo"
                                />
                            </li>
                            <li className="w-[85%] font-body text-xs text font-normal text-link">
                                Made with ❤️ while listening{" "}
                                <span className="font-bold">
                                    Favorite Crime
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
