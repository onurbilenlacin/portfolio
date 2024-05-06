import React from "react";

export const PatientCaring = () => {
    return (
        <div className="flex">
            <div className="flex flex-1 flex-col pt-[53px] pb-[59px] pl-[143px]">
                <div className="flex items-center justify-center flex-row-reverse">
                    <article className="relative right-[15px]">
                        <img
                            className="w-full h-gull"
                            src={
                                process.env.PUBLIC_URL +
                                "assets/images/caring-image-2.png"
                            }
                            alt=""
                        />
                    </article>
                    <div className="bg-white rounded-lg py-3 px-4 relative left-[35px]">
                        <article className="flex items-center">
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "assets/icons/phone.svg"
                                }
                                alt=""
                            />
                            <span className="text-blue-400 text-base">
                                Free Consultant
                            </span>
                        </article>
                        <span className="ml-2 text-grey-400 text-[15px]">
                            Consultation with the best
                        </span>
                    </div>
                </div>
                <article className="flex justify-center relative -top-[65px]">
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "assets/images/caring-image-1.png"
                        }
                        alt=""
                    />
                </article>
            </div>
            <div className="flex flex-1 flex-col pt-[120px] pb-[103px] pr-[153px]">
                <h3 className="text-base text-primary font-semibold">
                    HELPING PATIENTS FROM AROUND THE GLOBE!!
                </h3>
                <h1 className="text-5xl text-blue-400 font-semibold mb-5 mt-2">
                    Patient <span className="text-primary">Caring</span>
                </h1>
                <p className="text-[17px] text-grey-400 mb-[38px]">
                    Our goal is to deliver quality of care in a courteous,
                    respectful, and compassionate manner. We hope you will allow
                    us to care for you and strive to be the first and best
                    choice for healthcare.
                </p>
                <ul>
                    <li className="flex text-blue-400 gap-2.5 mb-[27px]">
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                `assets/icons/check.svg`
                            }
                            alt=""
                        />{" "}
                        Stay Updated About Your Health
                    </li>
                    <li className="flex text-blue-400 gap-2.5 mb-[27px]">
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                `assets/icons/check.svg`
                            }
                            alt=""
                        />{" "}
                        Check Your Results Online
                    </li>
                    <li className="flex text-blue-400 gap-2.5">
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                `assets/icons/check.svg`
                            }
                            alt=""
                        />
                        Manage Your Appointments
                    </li>
                </ul>
            </div>
        </div>
    );
};
