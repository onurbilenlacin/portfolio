import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { ButtonPrimary } from "../Partials/ButtonPrimary";
import { ButtonWhite } from "../Partials/ButtonWhite";

export const Hero = () => {
    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true
                }}
                modules={[Pagination]}
                className="hero-swiper"
            >
                {Array(3)
                    .fill()
                    .map((_, i) => (
                        <SwiperSlide className="justify-center">
                            <div className="flex flex-col lg:flex-row justify-center px-4 md:px-10 lg:px-35">
                                <div className="mt-10 md:mt-16">
                                    <h2 className="text-2xl md:text-3xl text-blue-900 mb-4">
                                        Skip the travel! Take Online
                                    </h2>
                                    <h1 className="text-black font-bold text-5xl md:text-56 mb-4">
                                        Doctor{" "}
                                        <span className="text-primary">
                                            Consultation
                                        </span>
                                    </h1>
                                    <p className="mb-8 max-w-570 text-xl text-secondary">
                                        Connect instantly with a 24x7 specialist
                                        or choose to video visit a particular
                                        doctor.
                                    </p>

                                    <div className="flex justify-end lg:justify-start">
                                        <ButtonPrimary
                                            text="Consult Now"
                                            type="primary"
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-center lg:justify-start relative min-w-[380px] h-fit mt-4">
                                    <img
                                        src={
                                            process.env.PUBLIC_URL +
                                            "assets/images/doctor-1.png"
                                        }
                                        alt=""
                                    />
                                    <div
                                        className="absolute bottom-0 right-0
                             md:bottom-16 md:right-16 
                            lg:bottom-28 lg:right-0 max-w-44 max-h-44"
                                    >
                                        <img
                                            src={
                                                process.env.PUBLIC_URL +
                                                "assets/images/Titik-titik.png"
                                            }
                                            alt=""
                                        />
                                    </div>
                                    <div className="absolute bottom-20 right-6 md:bottom-48 md:right-6 lg:bottom-48 lg:-right-8">
                                        <ButtonWhite
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
                    ))}
            </Swiper>
        </>
    );
};
