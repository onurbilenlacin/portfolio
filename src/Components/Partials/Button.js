import React from "react";

export const Button = ({ children, text, type }) => {
    return (
        <button
            className={`flex gap-1.5 px-4 py-2.5 bg-${type} text-sm whitespace-nowrap ${
                type === "primary" ? "text-white" : "text-blue-900"
            }  rounded-lg`}
        >
            {children} {text}
        </button>
    );
};
