import React, { useEffect } from "react";
import Hero from "../parts/about-us/Hero";

export default function AboutUs() {
    useEffect(() => {
        document.title = "Bersinar - Tentang Kami";
    }, []);

    return (
        <div className="sm:container">
            <Hero />
        </div>
    );
}
