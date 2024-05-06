import React from "react";

export const HealthCareInput = ({ icon, placeholder, max }) => {
    console.log(`w-[${max}px]`);
    return (
        <div
            className={`flex gap-3 bg-grey-100 h-[50px] py-3 px-4 border rounded-lg border-grey-200 w-[${max}px]`}
        >
            <img
                src={process.env.PUBLIC_URL + "/assets/icons/" + icon + ".svg"}
                alt=""
            />
            <input
                placeholder={placeholder}
                className="outline-none bg-transparent text-sm"
                type="text"
            />
        </div>
    );
};
