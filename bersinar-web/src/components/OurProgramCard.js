import React from "react";

export default function OurProgramCard({ title, children, ...props }) {
    return (
        <div className="flex flex-col justify-start items-start">
            <img {...props} className="mb-4 sm:mb-6 w-[240px] sm:w-[300px]" />
            <div className="w-[272px] sm:w-96">
                <h1 className="mb-2 font-heading text-xl sm:text-2xl font-extrabold text-title">
                    {title}
                </h1>
                <p className="font-body text-sm sm:text-lg font-medium text-subTitle">
                    {children}
                </p>
            </div>
        </div>
    );
}
