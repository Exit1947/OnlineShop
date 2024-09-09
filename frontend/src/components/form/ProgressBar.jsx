import React from 'react';

const ProgressBar = ({ progress, activeStep }) => {
    const headers = ["User Profile", "Residential Address", "Bank Information", "Finish"];
    
    return (
        <div className="progress-bar-container">
            <h3 className="user-profile-header">{headers[activeStep - 1]}</h3>
            <div className="progress-bar">
                <div className="progress" style={{ width: `${progress}%` }}></div>
            </div>
            <span className="progress-percentage">{Math.round(progress)}%</span>
        </div>
    );
};

export default ProgressBar;