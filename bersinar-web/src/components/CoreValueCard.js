import React from "react";

export default function CoreValueCard({ className, img, children }) {
    return (
        <div
            className={`${
                className ? className : ""
            } w-max flex flex-wrap bg-[#FEFEFE] shadow-coreValueCard rounded-xl`}>
            <div className="px-7 py-4 sm:p-4 w-[228px] lg:w-[300px] h-auto flex justify-center items-center">
                <img
                    src={img}
                    alt={children}
                    className="w-10 sm:w-14 lg:w-20 mr-5 sm:mr-7"
                />
                <h3 className="font-body text-sm sm:text-md lg:text-lg font-semibold text-title">
                    {children}
                </h3>
            </div>
        </div>
    );
}
