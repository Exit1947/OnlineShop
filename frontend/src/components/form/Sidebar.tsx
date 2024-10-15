import React from 'react';

const Sidebar = ({ activeStep, handleStepClick }) => {
    const steps = ['User Profile', 'Residential Address', 'Bank Information', 'Finish'];

    return (
        <div className="sidebar">
            <h2>Create account</h2>
            <ul>
                {steps.map((step, index) => (
                    <li key={index} 
                        className={activeStep === index + 1 ? 'active' : ''} 
                        onClick={() => handleStepClick(index + 1)}>
                        {step}
                        {activeStep === index + 1 && <div className="highlight"></div>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
