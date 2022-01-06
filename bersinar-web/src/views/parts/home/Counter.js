import React from "react";

export default function Counter() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="mb-10 hidden sm:flex flex-col justify-center items-center text-center">
                <h1 className="mb-4 font-heading text-4xl font-extrabold text-title">
                    Pencapaian Kami
                </h1>
                <h2 className="px-5 sm:px-0 sm:w-[70%] lg:w-1/2 font-body text-md font-medium text-subTitle">
                    Sejak Desember 2020, Bersinar telah menjangkau ribuan
                    pelajar di seluruh Indonesia melalui kelas-kelas gratis yang
                    telah dilaksanakan!
                </h2>
            </div>
            <div className="md:w-2/3 lg:w-1/2 xl:w-max pb-[60px] grid grid-rows-2 grid-cols-2 gap-9 xl:flex xl:flex-wrap xl:justify-center xl:items-center xl:gap-x-36">
                <div className="flex flex-col justify-center items-center">
                    <h2 className="mb-2 font-heading text-2xl sm:text-3xl xl:text-5xl font-black text-title">
                        200+
                    </h2>
                    <h3 className="font-body text-md font-semibold text-subTitle">
                        Total Kelas
                    </h3>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h2 className="mb-2 font-heading text-2xl sm:text-3xl xl:text-5xl font-black text-title">
                        300+
                    </h2>
                    <h3 className="font-body text-md font-semibold text-subTitle">
                        Jam Kelas
                    </h3>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h2 className="mb-2 font-heading text-2xl sm:text-3xl xl:text-5xl font-black text-title">
                        15Rb+
                    </h2>
                    <h3 className="font-body text-md font-semibold text-subTitle">
                        Total Peserta
                    </h3>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h2 className="mb-2 font-heading text-2xl sm:text-3xl xl:text-5xl font-black text-title">
                        90%
                    </h2>
                    <h3 className="font-body text-md font-semibold text-subTitle">
                        Total Kepuasan
                    </h3>
                </div>
            </div>
        </div>
    );
}
