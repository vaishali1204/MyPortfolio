import React from 'react';

const DownloadCV = () => {
    return (
        <div className="cv-section">
            <h2>Download My CV</h2>
            <a href="/VaishaliResume2025.pdf" download="Vaishali_Verma_CV.pdf">
                <button>Download CV</button>
            </a>
        </div>
    );
};

export default DownloadCV;
