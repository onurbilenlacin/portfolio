import React from "react";

export const Logo = () => {
    return (
        <div>
            <img
                src={process.env.PUBLIC_URL + "/assets/icons/Logo.svg"}
                alt=""
            />
        </div>
    );
};
