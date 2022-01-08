import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import NavbarLink from "./NavbarLink";
import ResponsiveNavbar from "./ResponsiveNavbar";
import bersinarLogoIconText from "../assets/icons/bersinar-logo/bersinarLogoIconText.webp";
import donateIcon from "../assets/icons/button-icons/donateIcon.svg";

export default function Navbar() {
    const location = useLocation();

    return (
        <div className="bg-body shadow-navbar fixed right-0 left-0 z-20">
            <ResponsiveNavbar />
            <div className="hidden lg:block py-3 border-b border-white/5">
                <div className="container">
                    <nav className="flex justify-between items-center">
                        <div className="w-full gap-x-2 flex justify-between items-center">
                            <NavLink
                                to="/"
                                className="py-2 mr-6 text-lg font-semibold text-white uppercase">
                                <img
                                    src={bersinarLogoIconText}
                                    alt="Bersinar Project"
                                    className="w-40"
                                />
                            </NavLink>
                            <div className="flex items-center gap-x-10">
                                <NavbarLink
                                    to="/"
                                    className={`${
                                        location.pathname === "/"
                                            ? "active"
                                            : ""
                                    }`}>
                                    Beranda
                                </NavbarLink>
                                <NavbarLink
                                    to="/our-class"
                                    className={`${
                                        location.pathname === "/our-class"
                                            ? "active"
                                            : ""
                                    }`}>
                                    Jadwal Kelas
                                </NavbarLink>
                                <NavbarLink
                                    to="/about-us"
                                    className={`${
                                        location.pathname === "/about-us"
                                            ? "active"
                                            : ""
                                    }`}>
                                    Tentang Kami
                                </NavbarLink>
                                <a
                                    href="https://trakteer.id/BersinarProject/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-6 py-2 flex justify-center items-center gap-x-2.5 bg-donate hover:bg-[#47A56D] transition duration-300 rounded-lg text-md font-heading font-bold text-button">
                                    <img
                                        src={donateIcon}
                                        alt="Donate"
                                        className="w-4 h-4 fill-button"
                                    />
                                    Donasi
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}
