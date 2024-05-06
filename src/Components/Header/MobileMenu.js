import React from "react";
import { ButtonPrimary } from "../Partials/ButtonPrimary";
import { Logo } from "./Logo";
import { Brand } from "./Brand";

export const MobileMenu = () => {
    return (
        <div className="mobile p-4 lg:hidden">
            <nav className="flex flex-col text-sm  text-blue-900">
                <a className="p-4" href="/find-doctors">
                    Find Doctors
                </a>
                <a className="p-4" href="/hospitals">
                    Hospitals
                </a>
                <a className="p-4" href="/medicines">
                    Medicines
                </a>
                <a className="p-4" href="/surgeries">
                    Surgeries
                </a>
                <a className="p-4" href="/software">
                    Software for Provider
                </a>
                <a className="p-4" href="/facilities">
                    Facilities
                </a>
                <div className="self-end ">
                    <ButtonPrimary text={"Login/Signup"} type="primary" />
                </div>
            </nav>
        </div>
    );
};
