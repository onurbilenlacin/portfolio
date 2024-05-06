import React from "react";

export const HealthCareCard = ({ image, title }) => {
    return (
        <div className="flex flex-col justify-center group items-center w-[270px] h-[180px] bg-white rounded-lg border border-white hover:border-primary hover:bg-blue-100 cursor-pointer">
            <img src={image} alt="" />
            <p className="text-grey-300 text-lg mt-4 group-hover:text-primary group-hover:font-semibold">
                {title}
            </p>
        </div>
    );
};
