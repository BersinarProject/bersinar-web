import React from "react";
import { NavLink } from "react-router-dom";

export default function FooterLink({ to, children }) {
    return (
        <NavLink
            to={to}
            className="text-md font-body font-medium hover:font-semibold text-link">
            {children}
        </NavLink>
    );
}
