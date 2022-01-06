import React, { useEffect } from "react";
import Index from "../parts/our-class/Index";

export default function OurClass() {
    useEffect(() => {
        document.title = "Bersinar - Jadwal Kelas";
    }, []);

    return (
        <div className="sm:container">
            <Index />
        </div>
    );
}
