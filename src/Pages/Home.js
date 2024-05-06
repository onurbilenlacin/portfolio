import React, { useState } from "react";
import {
    SuperHeader,
    DesktopHeader,
    MobileMenu,
    Hero,
    HealthCareFinder,
    Logo,
    Brand,
    HealthAdds,
    HealthCareTypes,
    OurTeam,
    PatientCaring,
    LatestNews
} from "../Components";

const Home = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <div>
            <SuperHeader />
            <div className="hero-bg">
                <div className="flex lg:hidden justify-between p-4">
                    <div className=" flex self-center gap-1 shrink-0">
                        <Logo />
                        <Brand />
                    </div>

                    {isMobileMenuOpen ? (
                        <button
                            className="lg:hidden"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <img
                                className="w-6 close cursor-pointer"
                                src={
                                    process.env.PUBLIC_URL +
                                    "/assets/icons/Close.svg"
                                }
                                alt=""
                            />
                        </button>
                    ) : (
                        <button
                            className="lg:hidden"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <img
                                className="w-6 hamburger cursor-pointer"
                                src={
                                    process.env.PUBLIC_URL +
                                    "/assets/icons/Hamburger-menu.svg"
                                }
                                alt=""
                            />
                        </button>
                    )}
                </div>
                <DesktopHeader />
                {isMobileMenuOpen && <MobileMenu />}
                <Hero />
                <HealthCareFinder />
                <HealthAdds />
                <HealthCareTypes />
                <OurTeam />
                <PatientCaring />
                <LatestNews />
            </div>
        </div>
    );
};

export default Home;
