import React from "react";

export default function TestimonialCard({ dataTestimonial }) {
    return (
        <div className="w-[300px] flex-shrink-0 h-full transition-transform">
            <div className="p-4 overflow-hidden bg-white hover:bg-[#FFFBF9] shadow-testimonialCard hover:shadow-testimonialCardHover transition duration-300 rounded-xl">
                <header className="pb-4 flex items-start">
                    <img
                        src={dataTestimonial.img}
                        alt="Ziyah"
                        className="mr-4 w-12 h-12 rounded-lg"
                    />
                    <div className="flex flex-col">
                        <span className="font-heading text-md sm:text-lg font-extrabold text-testimonial">
                            {dataTestimonial.name}
                        </span>
                        <span className="font-body text-xxs sm:text-xs font-normal text-[#7D6B50]">
                            {dataTestimonial.edu}
                        </span>
                    </div>
                </header>
                <section className="font-body text-xxs sm:text-xs font-normal text-[#7D6B50]">
                    {dataTestimonial.quote}
                </section>
            </div>
        </div>
    );
}
