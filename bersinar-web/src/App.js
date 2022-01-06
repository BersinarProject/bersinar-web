import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Router from "./router";

export default function App() {
    return (
        <div className="antialiased">
            <Navbar />
            <Router />
            <Footer />
        </div>
    );
}
