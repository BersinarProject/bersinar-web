import React, { useEffect } from "react";
import Index from "../parts/faq/Index";

export default function FAQ() {
    useEffect(() => {
        document.title = "Bersinar - FAQ";
    }, []);

    return (
        <div className="sm:container">
            <Index />
        </div>
    );
}
