import React from "react";

export const ButtonPrimary = ({ children, text, type }) => {
    return (
        <button
            className={`flex items-center gap-1.5 px-4 py-2.5 bg-primary text-sm whitespace-nowrap ${
                type === "primary" ? "text-white" : "text-blue-900"
            }  rounded-lg`}
        >
            {children} {text}
        </button>
    );
};
