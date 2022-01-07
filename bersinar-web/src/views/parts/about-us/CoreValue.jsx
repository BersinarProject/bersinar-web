import React from "react";
import CoreValueCard from "../../../components/CoreValueCard";
import smartWork from "../../../assets/icons/core-values/smartWork.svg";
import hospitality from "../../../assets/icons/core-values/hospitality.svg";
import purposeDriven from "../../../assets/icons/core-values/purposeDriven.webp";
import daretoShare from "../../../assets/icons/core-values/daretoShare.svg";
import socialInfluence from "../../../assets/icons/core-values/socialInfluence.svg";

export default function CoreValue() {
    return (
        <div className="py-10 sm:py-[60px] flex flex-col justify-center items-center">
            <div className="mb-10 flex flex-col justify-center items-center text-center">
                <h1 className="mb-2 sm:mb-4 font-heading text-2xl sm:text-4xl font-extrabold text-title">
                    Our Core Values
                </h1>
                <h2 className="px-5 sm:px-0 w-[88%] lg:w-[70%] xl:w-[60%] font-body text-sm sm:text-lg font-medium text-subTitle">
                    Sebagai salah satu platform penyedia akses pendidikan yang
                    bisa dijangkau siapapun, kami memiliki nilai-nilai (etos
                    kerja/inti) yang kami junjung.
                </h2>
            </div>
            <div className="px-10 sm:px-0 grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 grid-rows-3 lg:grid-rows-3 xl:grid-rows-2 gap-6">
                <CoreValueCard img={smartWork} className="lg:col-span-2">
                    Smart Work
                </CoreValueCard>
                <CoreValueCard img={hospitality} className="lg:col-span-2">
                    Hospitality
                </CoreValueCard>
                <CoreValueCard img={purposeDriven} className="lg:col-span-2">
                    Purpose Driven
                </CoreValueCard>
                <CoreValueCard
                    img={daretoShare}
                    className="lg:ml-auto lg:col-span-2 xl:col-span-3">
                    Dare to Share
                </CoreValueCard>
                <CoreValueCard
                    img={socialInfluence}
                    className="mx-auto xl:mx-0 col-span-2 lg:col-span-4 xl:col-span-3">
                    Sustainable Social Influence
                </CoreValueCard>
            </div>
        </div>
    );
}
