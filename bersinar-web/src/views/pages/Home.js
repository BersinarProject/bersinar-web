import React from "react";
import Hero from "../parts/home/Hero";
import Counter from "../parts/home/Counter";
import UpcomingClass from "../parts/home/UpcomingClass";
import Youtube from "../parts/home/Youtube";
import Donate from "../parts/home/Donate";
import Testimonials from "../parts/home/Testimonials";
import FAQ from "../parts/home/FAQ";

export default function Home() {
    return (
        <div className="sm:container">
            <Hero />
            <Counter />
            <UpcomingClass />
            <Youtube />
            <Donate />
            <Testimonials />
            <FAQ />
        </div>
    );
}
