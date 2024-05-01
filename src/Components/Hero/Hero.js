import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Button } from "../Partials/Button";

export const Hero = () => {
    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className="justify-center">
                    <div className="mt-10">
                        <h2 className="text-3xl text-blue-900">
                            Skip the travel! Take Online
                        </h2>
                        <h1 className="text-black font-bold text-56">
                            Doctor{" "}
                            <span className="text-primary">Consultation</span>
                        </h1>
                        <p className="mb-8 max-w-570 text-xl text-secondary">
                            Connect instantly with a 24x7 specialist or choose
                            to video visit a particular doctor.
                        </p>
                        <Button text="Consult Now" type="primary" />
                    </div>
                    <div className="relative">
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                "assets/images/doctor-1.png"
                            }
                            alt=""
                        />
                        <div className="absolute max-w-44 bottom-[120px] right-2">
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "assets/images/Titik-titik.png"
                                }
                                alt=""
                            />

                            <div className="absolute top-[70px] left-[40px]">
                                <Button
                                    text="Regular Checkup"
                                    type="white"
                                    children={
                                        <img
                                            src={
                                                process.env.PUBLIC_URL +
                                                "assets/icons/check.svg"
                                            }
                                            alt=""
                                        />
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="justify-center">
                    <div className="mt-10">
                        <h2 className="text-3xl text-blue-900">
                            Skip the travel! Take Online
                        </h2>
                        <h1 className="text-black font-bold text-56">
                            Doctor{" "}
                            <span className="text-primary">Consultation</span>
                        </h1>
                        <p className="mb-8 max-w-570 text-xl text-secondary">
                            Connect instantly with a 24x7 specialist or choose
                            to video visit a particular doctor.
                        </p>
                        <Button text="Consult Now" type="primary" />
                    </div>
                    <div className="relative">
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                "assets/images/doctor-1.png"
                            }
                            alt=""
                        />
                        <div className="absolute max-w-44 bottom-[120px] right-2">
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "assets/images/Titik-titik.png"
                                }
                                alt=""
                            />

                            <div className="absolute top-[70px] left-[40px]">
                                <Button
                                    text="Regular Checkup"
                                    type="white"
                                    children={
                                        <img
                                            src={
                                                process.env.PUBLIC_URL +
                                                "assets/icons/check.svg"
                                            }
                                            alt=""
                                        />
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>{" "}
                <SwiperSlide className="justify-center">
                    <div className="mt-10">
                        <h2 className="text-3xl text-blue-900">
                            Skip the travel! Take Online
                        </h2>
                        <h1 className="text-black font-bold text-56">
                            Doctor{" "}
                            <span className="text-primary">Consultation</span>
                        </h1>
                        <p className="mb-8 max-w-570 text-xl text-secondary">
                            Connect instantly with a 24x7 specialist or choose
                            to video visit a particular doctor.
                        </p>
                        <Button text="Consult Now" type="primary" />
                    </div>
                    <div className="relative">
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                "assets/images/doctor-1.png"
                            }
                            alt=""
                        />
                        <div className="absolute max-w-44 bottom-[120px] right-2">
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "assets/images/Titik-titik.png"
                                }
                                alt=""
                            />

                            <div className="absolute top-[70px] left-[40px]">
                                <Button
                                    text="Regular Checkup"
                                    type="white"
                                    children={
                                        <img
                                            src={
                                                process.env.PUBLIC_URL +
                                                "assets/icons/check.svg"
                                            }
                                            alt=""
                                        />
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};
