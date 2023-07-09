import { Open, renderPlatformIcon } from "./Icons";
import "./styles/Link.css";

const Link = ({ platform, website, address }) => {
    const handleLinkClick = () => {
        window.open(address);
    };

    return (
        <li
            className='releaseLink'
            onClick={handleLinkClick}
        >
            <span className='platformIcon'>
                {renderPlatformIcon(platform, "#fafafa", "22px")}
            </span>
            <span className='platformName'>{website}</span>
            <span className='linkIcon'>
                <Open
                    color='#fafafa'
                    size='22px'
                />
            </span>
        </li>
    );
};

export default Link;
