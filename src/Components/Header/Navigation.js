import React from "react";

export const Navigation = () => {
    return (
        <nav className="flex gap-x-10 text-sm text-blue-900">
            <a href="/find-doctors">Find Doctors</a>
            <a href="/hospitals">Hospitals</a>
            <a href="/medicines">Medicines</a>
            <a href="/surgeries">Surgeries</a>
            <a href="/software">Software for Provider</a>
            <a href="/facilities">Facilities</a>
        </nav>
    );
};
