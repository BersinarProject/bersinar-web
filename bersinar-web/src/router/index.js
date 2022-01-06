import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../views/pages/Home";
import OurClass from "../views/pages/OurClass";
import AboutUs from "../views/pages/AboutUs";
import FAQ from "../views/pages/FAQ";

export default function Router() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/our-class" element={<OurClass />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/faq" element={<FAQ />} />
        </Routes>
    );
}
