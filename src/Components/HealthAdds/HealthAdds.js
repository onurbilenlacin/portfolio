import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export const HealthAdds = () => {
    return (
        <div className="bg-white px-[108px]  pt-[163px] -top-[12rem] relative">
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true
                }}
                modules={[Pagination]}
                className="health-adds"
            >
                {Array(4)
                    .fill()
                    .map((_, i) => (
                        <SwiperSlide>
                            <img
                                className="w-full h-full object-cover"
                                src={
                                    process.env.PUBLIC_URL +
                                    "/assets/images/doctor-patient-" +
                                    ++i +
                                    ".jpg"
                                }
                                alt=""
                            />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
};
