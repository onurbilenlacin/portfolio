import React from "react";
import { Logo, Navigation } from "../index";

export const Header = () => {
    return (
        <div className="flex ">
            <Logo />
            <Navigation />
        </div>
    );
};
