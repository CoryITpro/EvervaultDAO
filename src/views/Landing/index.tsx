import "./landing.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import InfoBar from "./components/InfoBar";

function Landing() {
    return (
        <div className="landing">
            <div className="landing-hero">
                <Header />
                <Main />
            </div>
            <InfoBar />
        </div>
    );
}

export default Landing;
