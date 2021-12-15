import "./style.scss";
import { SvgIcon, Link } from "@material-ui/core";
import { ReactComponent as Logo } from "../../../../assets/icons/evervault-nav-header.svg";
import { ReactComponent as Medium } from "../../../../assets/icons/evervault-social-medium.svg";
import { ReactComponent as Discord } from "../../../../assets/icons/evervault-social-discord.svg";
import { ReactComponent as Twitter } from "../../../../assets/icons/evervault-social-twitter.svg";

const Footer = () => (
    <div className="landing-footer">
        <div className="landing-footer-main"></div>
        <div className="landing-footer-social">
            <Link className="landing-footer-item" href="https://twitter.com/EverVaultDAO" target="_blank">
                <Logo />
            </Link>
            <Link className="landing-footer-item" href="https://twitter.com/EverVaultDAO" target="_blank">
                <Medium />
            </Link>
            <Link className="landing-footer-item" href="https://twitter.com/EverVaultDAO" target="_blank">
                <Discord />
            </Link>
            <Link className="landing-footer-item" href="https://twitter.com/EverVaultDAO" target="_blank">
                <Twitter />
            </Link>
        </div>
    </div>
);

export default Footer;
