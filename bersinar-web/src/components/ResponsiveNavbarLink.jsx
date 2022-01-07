import React from "react";
import { Menu } from "@headlessui/react";

export default function ResponsiveNavbarLink({
    className,
    children,
    ...props
}) {
    return (
        <Menu.Item>
            <a
                {...props}
                className={`${
                    className ? className : ""
                } block font-body text-sm font-medium hover:font-semibold text-link`}>
                {children}
            </a>
        </Menu.Item>
    );
}
