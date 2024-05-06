import React from "react";
import { Title } from "../Partials/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export const OurTeam = () => {
    return (
        <div className="bg-white pt-[70px]">
            <Title text={"Our Medical Specialist"} />

            <Swiper
                slidesPerView={4}
                spaceBetween={15}
                pagination={{
                    clickable: true
                }}
                modules={[Pagination]}
                className="team-swiper"
            >
                {Array(5)
                    .fill()
                    .map((_, i) => (
                        <SwiperSlide>
                            <div className="max-w-[305px] max-h-[410px] team-member">
                                <div className="image-wrapper">
                                    <img
                                        src={
                                            process.env.PUBLIC_URL +
                                            "/assets/images/team-doctor-" +
                                            ++i +
                                            ".png"
                                        }
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="team-member-info flex flex-col items-center justify-center">
                                <h3 className="text-blue-400 font-semibold text-2xl">
                                    Dr. John Doe
                                </h3>
                                <p className="text-primary font-medium text-base">
                                    Cardiologist
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
};
