import { Link } from "@material-ui/core";
import LogoSvg from "../../../../assets/icons/evervault-nav-header.svg";
import "./main.scss";

function Main() {
    return (
        <div className="landing-main">
            <div className="landing-main-wrapper">
                <div className="landing-main-img-wrap">
                    <img src={LogoSvg} alt="logo svg" />
                    <h1>EverVault</h1>
                    <p>
                        A decentralized reserve currency backed by the formidable poser of <strong>MemeFi</strong>.
                    </p>
                </div>
                <div className="landing-main-btns-wrap">
                    <Link href="/dashboard" target="_blank" rel="noreferrer">
                        <div className="landing-main-btn">
                            <p>Enter App</p>
                        </div>
                    </Link>
                    <Link href="https://wonderland.gitbook.io/wonderland/" target="_blank" rel="noreferrer">
                        <div className="landing-main-btn">
                            <p>Documentation</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Main;
