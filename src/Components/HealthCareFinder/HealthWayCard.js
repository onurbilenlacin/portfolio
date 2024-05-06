import React from "react";

export const HealthWayCard = ({ image, title }) => {
    return (
        <div className="flex flex-col justify-center group items-center w-[203px] h-[153px] bg-grey-100 rounded-lg border border-grey-100 hover:border-primary hover:bg-blue-100 cursor-pointer">
            <img src={image} alt="" />
            <p className="text-grey-300 text-lg mt-4 group-hover:text-primary group-hover:font-semibold">
                {title}
            </p>
        </div>
    );
};
