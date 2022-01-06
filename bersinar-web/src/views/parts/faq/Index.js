import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import FAQIllustration from "../../../assets/images/FAQIllustration.webp";

export default function Index() {
    return (
        <div className="mb-24 sm:mb-32 md:mb-44 flex flex-col justify-center items-center">
            <div className="pt-36 pb-10 flex flex-col justify-center items-center text-center">
                <img
                    src={FAQIllustration}
                    alt="FAQ Illustration"
                    className="mb-10 w-[252px] h-[264px] sm:w-[288px] sm:h-[300px] lg:w-[320px] lg:h-[332px]"
                />
                <h1 className="mb-4 font-heading text-3xl sm:text-4xl tracking-tight font-black text-title">
                    Pelajari FAQ Kami
                </h1>
                <h2 className="w-1/2 font-body text-md sm:text-xl font-medium text-subTitle">
                    Pelajari Bersinar lebih lanjut melalui beberapa pertanyaan
                    berikut
                </h2>
            </div>
            <div className="pt-10 px-10 sm:px-4 mb-10 w-full">
                <div className="w-full max-w-[800px] mx-auto bg-white ring-1 ring-FAQAccordionStroke rounded-lg">
                    <Disclosure>
                        {({ open }) => (
                            <div className="border-b-[1.5px] border-FAQAccordionStroke">
                                <Disclosure.Button className="px-5 py-3 w-full flex justify-between font-body text-sm sm:text-base font-semibold text-left text-link">
                                    <span>Apa itu Bersinar?</span>
                                    <ChevronUpIcon
                                        className={`${
                                            open
                                                ? "transform rotate-180 transition duration-300"
                                                : ""
                                        } w-5 h-5 text-link`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-5 pb-4 font-body text-xs sm:text-sm font-medium text-FAQAccordion">
                                    Bersinar adalah sebuah platform edukasi yang
                                    menyediakan kelas-kelas gratis khusus
                                    persiapan UTBK dan ujian mandiri masuk
                                    perguruan tinggi.
                                </Disclosure.Panel>
                            </div>
                        )}
                    </Disclosure>
                    <Disclosure>
                        {({ open }) => (
                            <div className="border-b-[1.5px] border-FAQAccordionStroke">
                                <Disclosure.Button className="px-5 py-3 w-full flex justify-between font-body text-sm sm:text-base font-semibold text-left text-link">
                                    <span>
                                        Siapa saja Min yang boleh ikut kelas
                                        Bersinar?
                                    </span>
                                    <ChevronUpIcon
                                        className={`${
                                            open
                                                ? "transform rotate-180 transition duration-300"
                                                : ""
                                        } w-5 h-5 text-link`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-5 pb-4 font-body text-xs sm:text-sm font-medium text-FAQAccordion">
                                    Angkatan berapapun asalkan memiliki niat dan
                                    semangat belajar!
                                </Disclosure.Panel>
                            </div>
                        )}
                    </Disclosure>
                    <Disclosure>
                        {({ open }) => (
                            <div className="border-b-[1.5px] border-FAQAccordionStroke">
                                <Disclosure.Button className="px-5 py-3 w-full flex justify-between font-body text-sm sm:text-base font-semibold text-left text-link">
                                    <span>
                                        Bagaimana cara ikut kelas Bersinar?
                                    </span>
                                    <ChevronUpIcon
                                        className={`${
                                            open
                                                ? "transform rotate-180 transition duration-300"
                                                : ""
                                        } w-5 h-5 text-link`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-5 pb-4 font-body text-xs sm:text-sm font-medium text-FAQAccordion">
                                    Kamu hanya perlu mantengin jadwal kelas
                                    (termasuk dengan link Zoom Cloud Meeting)
                                    yang disediakan oleh kami, Sob! Kamu dapat
                                    mengaksesnya lewat website atau media sosial
                                    kami, jadi jangan sampai terlewat, ya!
                                </Disclosure.Panel>
                            </div>
                        )}
                    </Disclosure>
                    <Disclosure>
                        {({ open }) => (
                            <div className="border-b-[1.5px] border-FAQAccordionStroke">
                                <Disclosure.Button className="px-5 py-3 w-full flex justify-between font-body text-sm sm:text-base font-semibold text-left text-link">
                                    <span>
                                        Apa saja yang harus dipersiapkan untuk
                                        ikut kelas Bersinar?
                                    </span>
                                    <ChevronUpIcon
                                        className={`${
                                            open
                                                ? "transform rotate-180 transition duration-300"
                                                : ""
                                        } w-5 h-5 text-link`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-5 pb-4 font-body text-xs sm:text-sm font-medium text-FAQAccordion">
                                    Pastikan kamu memiliki perangkat penunjang
                                    untuk join video conference (hp, laptop,
                                    tablet, dll) dan yang pastinya wifi/kuota!
                                </Disclosure.Panel>
                            </div>
                        )}
                    </Disclosure>
                    <Disclosure>
                        {({ open }) => (
                            <div className="border-b-[1.5px] border-FAQAccordionStroke text">
                                <Disclosure.Button className="px-5 py-3 w-full flex justify-between font-body text-sm sm:text-base font-semibold text-left text-link">
                                    <span>
                                        Minshine, aku telat akses kelas Bersinar
                                        nih, apakah aku masih bisa mengakses
                                        rekaman ulangnya?
                                    </span>
                                    <ChevronUpIcon
                                        className={`${
                                            open
                                                ? "transform rotate-180 transition duration-300"
                                                : ""
                                        } w-5 h-5 text-link`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-5 pb-4 font-body text-xs sm:text-sm font-medium text-FAQAccordion">
                                    Jangan khawatir, Sober! Kamu masih bisa
                                    menonton rekaman ulangnya di Youtube
                                    Bersinar, jadi jangan lupa di-subscribe biar
                                    ga ketinggalan video terbaru Bersinar!
                                </Disclosure.Panel>
                            </div>
                        )}
                    </Disclosure>
                    <Disclosure>
                        {({ open }) => (
                            <div>
                                <Disclosure.Button className="px-5 py-3 w-full flex justify-between font-body text-sm sm:text-base font-semibold text-left text-link">
                                    <span>
                                        Apa saja sih, Minshine, peraturan ikut
                                        kelas Bersinar?
                                    </span>
                                    <ChevronUpIcon
                                        className={`${
                                            open
                                                ? "transform rotate-180 transition duration-300"
                                                : ""
                                        } w-5 h-5 text-link`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-5 pb-4 font-body text-xs sm:text-sm font-medium text-FAQAccordion">
                                    Kamu hanya perlu off-mic saat tidak bertanya
                                    agar kondisi kelas tetap kondusif, kamu juga
                                    boleh sambil makan dan minum loh, Sob!
                                    Asalkan kamu tetap memperhatikan tutornya
                                    dengan baik, ya!
                                </Disclosure.Panel>
                            </div>
                        )}
                    </Disclosure>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
                <h1 className="px-10 sm:px-0 mb-4 font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-title">
                    Masih punya pertanyaan?
                </h1>
                <h2 className="w-[80%] md:w-[84%] lg:w-2/3 xl:w-[56%] font-body text-sm sm:text-base md:text-lg font-medium text-subTitle">
                    Jika Kamu tidak menemukan jawaban atas pertanyaan Kamu. Kamu
                    bisa menghubungi Kami melalui kontak yang tersedia bagian
                    paling bawah di halaman website ini.
                </h2>
            </div>
        </div>
    );
}
