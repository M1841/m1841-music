import { useState } from "react";
import { Expand, Open } from "./Icons";
import Link from "./Link";
import DownloadButton from "./DownloadButton";
import "./styles/Releases.css";

const Release = ({
    id,
    title,
    subtitle,
    artist,
    picturePath,
    links,
    type,
    downloadPath,
}) => {
    const fullPicturePath = "./assets/" + picturePath;
    const linkCount = links.length;

    const [isOpen, setIsOpen] = useState(false);

    const handleReleaseCardClick = () => {
        if (linkCount == 1) {
            window.open(links[0].address);
        } else {
            setIsOpen(!isOpen);
        }
    };

    return (
        <div className='releaseCard'>
            <header
                className={
                    "releaseCardHead" + (isOpen ? " fullBottomCorners" : "")
                }
            >
                <div className='pictureDownloadGroup'>
                    <img
                        className='releasePicture'
                        src={fullPicturePath}
                    />
                    <DownloadButton downloadPath={downloadPath} />
                </div>
                <section
                    className='releaseText'
                    onClick={handleReleaseCardClick}
                >
                    <h3 className='releaseTitle'>
                        {title}
                        {subtitle !== undefined ? (
                            <span className='releaseSubtitle'>
                                {" - "}
                                {subtitle}
                            </span>
                        ) : (
                            type === "remix" && (
                                <span className='releaseSubtitle'>
                                    {" - "}
                                    {"M1841 Remix"}
                                </span>
                            )
                        )}
                    </h3>
                    <p className='releaseArtist'>
                        {artist !== undefined ? artist : "M1841"}
                    </p>
                </section>
                <span
                    className={
                        "releaseButton" + (isOpen ? " rotate180deg" : "")
                    }
                    onClick={handleReleaseCardClick}
                >
                    {linkCount > 1 ? (
                        <Expand
                            color='#a3a3a3'
                            size='24px'
                        />
                    ) : (
                        <Open
                            color='#a3a3a3'
                            size='22px'
                        />
                    )}
                </span>
                {isOpen}
            </header>
            {linkCount > 1 && isOpen == true && (
                <ul className='releaseCardBody'>
                    {links.map((link) => {
                        return (
                            <Link
                                {...link}
                                key={id + link.website}
                            />
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default Release;
