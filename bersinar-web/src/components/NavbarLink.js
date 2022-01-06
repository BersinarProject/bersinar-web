import React from "react";
import { NavLink } from "react-router-dom";

export default function NavbarLink({ to, className, children }) {
    return (
        <NavLink
            to={to}
            className={`${
                className == "active" ? "font-semibold" : "font-medium"
            } text-md font-body hover:font-semibold text-link`}>
            {children}
        </NavLink>
    );
}
