import { useState } from "react";
import { renderPlatformIcon } from "./Icons";
import socials from "../data/socials.json";
import "./styles/Header.css";

const Header = () => {
    return (
        <header className='header'>
            <div className='headerWrapper'>
                <section className='headerText'>
                    <h1 className='headerTitle'>M1841</h1>
                    <p className='headerSubtitle'>
                        rhythmically compelling noise
                    </p>
                </section>
                <nav className='headerButtonGroup'>
                    {socials.map((social) => {
                        return (
                            <HeaderButton
                                key={social.platform + "link"}
                                platform={social.platform}
                                address={social.address}
                            />
                        );
                    })}
                </nav>
            </div>
        </header>
    );
};

const HeaderButton = ({ platform, address }) => {
    const [iconColor, setIconColor] = useState("#a3a3a3");
    return (
        <button
            className='headerButton'
            onClick={() => window.open(address)}
            onMouseEnter={() => setIconColor("#b09bd3")}
            onMouseLeave={() => setIconColor("#a3a3a3")}
        >
            {renderPlatformIcon(platform, iconColor, "22px")}
        </button>
    );
};

export default Header;
