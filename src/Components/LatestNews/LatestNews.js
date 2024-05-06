import React from "react";
import { Title } from "../Partials/Title";
export const LatestNews = () => {
    return (
        <div
            className="bg-white pt-[53px] 
            pb-[62px] px-[156px] relative
        ]"
        >
            <h2 className="text-base font-semibold text-primary text-center">
                Blog & News
            </h2>
            <div className="-mb-[20px]">
                <Title text={"Read Our Latest News"} />
            </div>
            <div className="news-article relative">
                <div className="absolute -top-12 -right-3">
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "assets/icons/detox-primary-icon.svg"
                        }
                        alt=""
                    />
                </div>
                <article className="border rounded-lg">
                    <img
                        src={
                            process.env.PUBLIC_URL + "/assets/images/detox.png"
                        }
                        alt=""
                    />

                    <div className="grid gap-2 p-4">
                        <p className="text-grey-400 font-medium text-[17px]">
                            Medical | <span>March 31, 2022</span>
                        </p>
                        <h3 className="text-blue-400 font-medium text-lg">
                            6 Tips To Protect Your Mental Health When You’re
                            Sick
                        </h3>
                        <div className="flex items-center gap-3">
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/assets/images/doctor-profile.png"
                                }
                                alt=""
                            />
                            <p className="text-blue-400 font-medium text-[17px]">
                                Rebecca Lee
                            </p>
                        </div>
                    </div>
                </article>
                <article className="border rounded-lg">
                    <img
                        src={
                            process.env.PUBLIC_URL + "/assets/images/detox.png"
                        }
                        alt=""
                    />

                    <div className="grid gap-2 p-4">
                        <p className="text-grey-400 font-medium text-[17px]">
                            Medical | <span>March 31, 2022</span>
                        </p>
                        <h3 className="text-blue-400 font-medium text-lg">
                            6 Tips To Protect Your Mental Health When You’re
                            Sick
                        </h3>
                        <div className="flex items-center gap-3">
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/assets/images/doctor-profile.png"
                                }
                                alt=""
                            />
                            <p className="text-blue-400 font-medium text-[17px]">
                                Rebecca Lee
                            </p>
                        </div>
                    </div>
                </article>
                <article className="border rounded-lg">
                    <img
                        src={
                            process.env.PUBLIC_URL + "/assets/images/detox.png"
                        }
                        alt=""
                    />

                    <div className="grid gap-2 p-4">
                        <p className="text-grey-400 font-medium text-[17px]">
                            Medical | <span>March 31, 2022</span>
                        </p>
                        <h3 className="text-blue-400 font-medium text-lg">
                            6 Tips To Protect Your Mental Health When You’re
                            Sick
                        </h3>
                        <div className="flex items-center gap-3">
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/assets/images/doctor-profile.png"
                                }
                                alt=""
                            />
                            <p className="text-blue-400 font-medium text-[17px]">
                                Rebecca Lee
                            </p>
                        </div>
                    </div>
                </article>
            </div>

            <div className="absolute left-0 bottom-4">
                <img
                    src={
                        process.env.PUBLIC_URL +
                        "assets/icons/detox-secondary-icon.svg"
                    }
                    alt=""
                />
            </div>
        </div>
    );
};
