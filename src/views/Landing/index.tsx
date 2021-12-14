import React from "react";
import "./landing.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function Landing() {
    return (
        <div className="landing">
            <div className="landing-hero">
                <Header />
                <Main />
            </div>
            <Footer />
        </div>
    );
}

export default Landing;
