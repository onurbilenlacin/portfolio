import React from "react";
import { SuperHeader, Header } from "../Components";

const Home = () => {
    return (
        <div>
            <SuperHeader />
            <div className="hero-bg">
                <Header />
                {/* <Hero /> */}
            </div>
        </div>
    );
};

export default Home;