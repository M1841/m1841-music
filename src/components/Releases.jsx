import releases from "../data/releases.json";
import Release from "./Release";
import "./styles/Releases.css";

const Releases = () => {
    const originals = releases.originals;
    const remixes = releases.remixes;
    const unreleased = releases.unreleased;
    return (
        <div className='releasesWrapper'>
            <h2 className='sectionTitle'>Originals:</h2>
            {originals.map((release) => {
                return (
                    <Release
                        {...release}
                        key={release.id}
                    />
                );
            })}
            <h2 className='sectionTitle'>Remixes:</h2>
            {remixes.map((release) => {
                return (
                    <Release
                        {...release}
                        key={release.id}
                        type='remix'
                    />
                );
            })}
            <h2 className='sectionTitle'>Unreleased:</h2>
            {unreleased.map((release) => {
                return (
                    <Release
                        {...release}
                        key={release.id}
                    />
                );
            })}
        </div>
    );
};

export default Releases;
