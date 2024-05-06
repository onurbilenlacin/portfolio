import React from "react";
import { Brand, Navigation, Logo, ButtonPrimary } from "../index";

export const DesktopHeader = () => {
    return (
        <div className="hidden lg:flex justify-center items-baseline gap-10 py-6 mb-11">
            <div className="shrink-0 flex self-center gap-1">
                <Logo />
                <Brand />
            </div>
            <Navigation />
            <ButtonPrimary text={"Login/Signup"} type="primary" />
        </div>
    );
};
