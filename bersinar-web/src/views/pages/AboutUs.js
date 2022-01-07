import React, { useEffect } from "react";
import CoreValue from "../parts/about-us/CoreValue";
import Hero from "../parts/about-us/Hero";
import PresidentSpeech from "../parts/about-us/PresidentSpeech";

export default function AboutUs() {
    useEffect(() => {
        document.title = "Bersinar - Tentang Kami";
    }, []);

    return (
        <div className="sm:container">
            <Hero />
            <PresidentSpeech />
            <CoreValue />
        </div>
    );
}
