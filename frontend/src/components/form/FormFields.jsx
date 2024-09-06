import React from 'react';

const FormFields = ({ activeStep, handleNextClick, handleBackClick }) => {
    return (
        <div className="form-fields">
            {activeStep === 1 && (
                <>
                    <label className="form-label">Full name</label>
                    <input type="text" className="form-input" />
                    <label className="form-label">Email</label>
                    <input type="email" className="form-input" />
                    <label className="form-label">Phone Number</label>
                    <input type="text" className="form-input" />
                    <label className="form-label">Date of Birth</label>
                    <div className="date-of-birth">
                        <select className="form-input small-input select-input">
                            <option value="">Day</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                        <select className="form-input small-input select-input">
                            <option value="">Month</option>
                            <option value="1">January</option>
                            <option value="2">February</option>
                        </select>
                        <select className="form-input small-input select-input">
                            <option value="">Year</option>
                            <option value="2000">2000</option>
                            <option value="2001">2001</option>
                        </select>
                    </div>
                    <div className="buttons-container">
                        <button className="next-button" onClick={handleNextClick}>Next</button>
                    </div>
                </>
            )}
            {activeStep === 2 && (
                <>
                    <label className="form-label">Country</label>
                    <select className="form-input select-input">
                        <option value="">Country</option>
                        <option value="US">United States</option>
                        <option value="UK">United Kingdom</option>
                        <option value="UA">Ukraine</option>
                    </select>
                    <label className="form-label">Region</label>
                    <input type="text" className="form-input" />
                    <label className="form-label">Settlement</label>
                    <input type="text" className="form-input" />
                    <div className="buttons-container">
                        <button className="back-button" onClick={handleBackClick}>Back</button>
                        <button className="next-button" onClick={handleNextClick}>Next</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default FormFields;
