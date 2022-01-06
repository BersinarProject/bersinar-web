import React, { Fragment } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import ResponsiveNavbarLink from "./ResponsiveNavbarLink";
import bersinarLogoIconOnly from "../assets/icons/bersinar-logo/bersinarLogoIconOnly.svg";
import bersinarLogoTextOnly from "../assets/icons/bersinar-logo/bersinarLogoTextOnly.svg";
import navbarCollapseIcon from "../assets/icons/navbarCollapseIcon.svg";
import donateIcon from "../assets/icons/button-icons/donateIcon.svg";

export default function ResponsiveNavbar() {
    const location = useLocation();

    return (
        <Menu
            as={"div"}
            className="w-full px-6 py-2.5 sm:px-6 flex lg:hidden justify-between items-center">
            <NavLink
                to="/"
                className="block sm:hidden py-1.5 mr-6 text-lg font-semibold text-white uppercase">
                <img
                    src={bersinarLogoIconOnly}
                    alt="Bersinar Project"
                    className="w-8"
                />
            </NavLink>
            <NavLink
                to="/"
                className="hidden sm:block lg:hidden py-1.5 mr-6 text-lg font-semibold text-white uppercase">
                <img
                    src={bersinarLogoTextOnly}
                    alt="Bersinar Project"
                    className="w-24"
                />
            </NavLink>
            <Menu.Button className="focus:outline-none">
                <img src={navbarCollapseIcon} alt="Collapse" />
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0">
                <Menu.Items
                    as={"div"}
                    className="top-0 right-0 w-48 px-4 py-4 mt-5 mr-14 absolute overflow-hidden bg-footer rounded-lg">
                    <ResponsiveNavbarLink
                        href="/"
                        className={`${
                            location.pathname === "/"
                                ? "active pb-2.5"
                                : "pb-2.5"
                        }`}>
                        Beranda
                    </ResponsiveNavbarLink>
                    <ResponsiveNavbarLink
                        href="/our-class"
                        className={`${
                            location.pathname === "/our-class"
                                ? "active py-2.5"
                                : "py-2.5"
                        }`}>
                        Jadwal Kelas
                    </ResponsiveNavbarLink>
                    <ResponsiveNavbarLink
                        href="/about-us"
                        className={`${
                            location.pathname === "/about-us"
                                ? "active pt-2.5 pb-5"
                                : "pt-2.5 pb-5"
                        }`}>
                        Tentang Kami
                    </ResponsiveNavbarLink>
                    <ResponsiveNavbarLink
                        href="https://trakteer.id/BersinarProject/tip/embed/modal"
                        target="_blank"
                        rel="noreferrer"
                        className="w-32 !px-2 py-2 flex justify-center items-center gap-x-2.5 bg-donate hover:bg-[#47A56D] transition duration-300 rounded-lg text-md font-heading font-bold !text-button">
                        <img
                            src={donateIcon}
                            alt="Donate"
                            className="w-4 h-4 fill-button"
                        />
                        Donasi
                    </ResponsiveNavbarLink>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}
