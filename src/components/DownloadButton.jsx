import { useState } from "react";
import { Download } from "./Icons";
import "./styles/Releases.css";

const DownloadButton = ({ downloadPath }) => {
    const fullDownloadPath = "./music/" + downloadPath;

    return (
        <a
            href={fullDownloadPath}
            download
            className='downloadButton'
            draggable='false'
        >
            <Download
                color='#8a78a8'
                size='28px'
            />
        </a>
    );
};

export default DownloadButton;
