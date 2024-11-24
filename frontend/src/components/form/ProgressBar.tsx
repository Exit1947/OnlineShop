import React from 'react';

const ProgressBar = ({ progress }) => {
    
    const roundedProgress = Math.floor(progress);

    return (
        <div className="progress-bar-container">
            <h3 className="user-profile-header">
                {progress === 0 ? 'User Profile' : progress === 33 ? 'Residential Address' : progress === 66 ? 'Bank Information' : 'Finish'}
            </h3>
            <div className="progress-bar">
                <div className="progress" style={{ width: `${progress}%` }}></div>
                {}
                <span className="progress-percentage" style={{ left: progress === 100 ? 'calc(100% - 30px)' : `${progress}%` }}>
                    {roundedProgress}%
                </span>
                <div className={`milestone milestone-0 ${progress >= 0 ? 'filled' : ''}`}></div>
                <div className={`milestone milestone-33 ${progress >= 33 ? 'filled' : ''}`}></div>
                <div className={`milestone milestone-66 ${progress >= 66 ? 'filled' : ''}`}></div>
                <div className={`milestone milestone-100 ${progress === 100 ? 'filled' : ''}`}></div>
            </div>
        </div>
    );
};

export default ProgressBar;