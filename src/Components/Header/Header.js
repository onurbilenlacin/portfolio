import React from "react";
import { Brand, Navigation, Logo, Button } from "../index";

export const Header = () => {
    return (
        <div className="flex justify-center items-baseline  gap-10 py-6 mb-11">
            <div className="flex self-center gap-1">
                <Logo />
                <Brand />
            </div>
            <Navigation />
            <Button text={"Login/Signup"} type="primary" />
        </div>
    );
};
