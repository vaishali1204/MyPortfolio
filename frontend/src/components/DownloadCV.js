import React from 'react';

const DownloadCV = () => {
    return (
        <div className="cv-section">
            <h2>Download My CV</h2>
            {/* Updated download CV link using process.env.PUBLIC_URL */}
            <a
                href={`${process.env.PUBLIC_URL}/VaishaliResume.pdf`}
                download="VaishaliVermaResume.pdf"
                target="_blank"  // Opens in a new tab just in case
                rel="noopener noreferrer"
            >
                <button>Download CV</button>
            </a>
        </div>
    );
};

export default DownloadCV;
