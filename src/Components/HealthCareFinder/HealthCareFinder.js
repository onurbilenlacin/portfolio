import React from "react";
import { ButtonPrimary, HealthCareInput } from "../index";
import { healthCareWays } from "../../Constants/Constants";
import { HealthWayCard } from "./HealthWayCard";

export const HealthCareFinder = () => {
    return (
        <div className="flex flex-col mx-4 md:mx-10 lg:mx-35 bg-white rounded-[15px] px-9 py-14 relative -top-24 z-10 health-care-finder">
            <div className="flex justify-center gap-3">
                <HealthCareInput
                    icon="Search"
                    placeholder={"Ex. Doctor, Hospital"}
                    max={285}
                />
                <HealthCareInput
                    icon="Search"
                    placeholder={"Ex. Surgeon,Cardiologist"}
                    max={285}
                />
                <HealthCareInput
                    icon="Location-marker"
                    placeholder={"Set your location"}
                    max={374}
                />
                <ButtonPrimary
                    type="primary"
                    text="Search"
                    children={
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                "/assets/icons/Search-White.svg"
                            }
                            alt=""
                        />
                    }
                />
            </div>
            <div className="flex justify-center mt-[63px] mb-[25px]">
                <h2 className="text-blue-900 font-medium text-xl">
                    You may be looking for
                </h2>
            </div>
            <div className="flex justify-center gap-5">
                {healthCareWays.map((healthCareWay, index) => (
                    <HealthWayCard
                        image={healthCareWay.image}
                        title={healthCareWay.name}
                    />
                ))}
            </div>
        </div>
    );
};
