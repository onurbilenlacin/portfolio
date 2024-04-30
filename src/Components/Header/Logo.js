import React from "react";

export const Logo = () => {
    return (
        <div className="">
            <img
                className=""
                src={process.env.PUBLIC_URL + "/assets/icons/Logo.svg"}
                alt=""
            />
            <span className="font-bold text-lg text-primary">
                Surya Nursing Home
            </span>
        </div>
    );
};
