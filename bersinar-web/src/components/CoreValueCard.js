import React from "react";

export default function CoreValueCard({ className, img, children }) {
    return (
        <div
            className={`${
                className ? className : ""
            } w-max flex flex-wrap bg-[#FEFEFE] shadow-coreValueCard rounded-xl`}>
            <div className="px-2 py-4 sm:p-4 w-[100px] sm:w-[228px] lg:w-[300px] h-auto flex flex-col sm:flex-row justify-center items-center">
                <img
                    src={img}
                    alt={children}
                    className="w-10 sm:w-14 lg:w-20 mb-3 sm:mb-0 sm:mr-7"
                />
                <h3 className="font-body text-sm sm:text-md lg:text-lg font-semibold text-title text-center sm:text-left">
                    {children}
                </h3>
            </div>
        </div>
    );
}
