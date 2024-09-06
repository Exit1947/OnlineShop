import React from 'react';

const Sidebar = ({ activeStep, handleStepClick }) => {
    return (
        <div className="sidebar">
            <h2>Create account</h2>
            <div className="divider"></div>
            <ul>
                <li onClick={() => handleStepClick(1)} className={activeStep === 1 ? 'active' : ''}>User Profile</li>
                <li onClick={() => handleStepClick(2)} className={activeStep === 2 ? 'active' : ''}>Residential Address</li>
                <li onClick={() => handleStepClick(3)} className={activeStep === 3 ? 'active' : ''}>Bank Information</li>
                <li onClick={() => handleStepClick(4)} className={activeStep === 4 ? 'active' : ''}>Finish</li>
            </ul>
            <div className="highlight" style={{ top: `${(activeStep - 1) * 50}px` }}></div>
        </div>
    );
};

export default Sidebar;
