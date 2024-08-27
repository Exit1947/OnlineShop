import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './form.css';
import profileImage  from './../../img/Questions-rafiki 1.png';
import addressImage  from './../../img/House searching-rafiki 1.png';
import {backendUrl} from "../../environments";
import axios from "axios";
import toast from "react-hot-toast";

type FormValues = {
    email: string,
    password: string,
    name: string
}

const Form = () => {
    const [loginError, setLoginError] = useState<boolean>(false);
    const [activeStep, setActiveStep] = useState(1);
    const [progress, setProgress] = useState(0);
    const navigate = useNavigate();

    function onSubmit(data: FormValues) {
        const url = `http://localhost:8080/api/auth/registration`;
        const body = {
            email: data.email,
            password: data.password
        };

        axios.post(url, body)
            .then(({ data }) => {
                //setToken(data.token, data.expiresIn)
                navigate('/');
            })
            .catch(({ response }) => {
                if (response.status === 401) {
                    setLoginError(true);
                } else {
                    toast.error('Something went wrong!');
                }
            });
    }

    const updateProgress = (step) => {
        const newProgress = (step - 1) * 33;
        setProgress(Math.min(newProgress, 100)); // Максимум 100%
    };

    const handleStepClick = (step) => {
        setActiveStep(step);
        updateProgress(step);
    };

    const handleNextClick = () => {
        if (activeStep < 4) {
            const nextStep = activeStep + 1;
            setActiveStep(nextStep);
            updateProgress(nextStep);
        }
    };

    const handleBackClick = () => {
        if (activeStep > 1) {
            const prevStep = activeStep - 1;
            setActiveStep(prevStep);
            updateProgress(prevStep);
        }
    };

    return (
        <div className="form-container">
            <div className="sidebar">
                <h2>Create account</h2>
                <div className="divider"></div>
                <ul>
                    <li onClick={() => handleStepClick(1)} className={activeStep === 1 ? 'active' : ''}>User Profile
                    </li>
                    <li onClick={() => handleStepClick(2)} className={activeStep === 2 ? 'active' : ''}>Residential
                        Address
                    </li>
                    <li onClick={() => handleStepClick(3)} className={activeStep === 3 ? 'active' : ''}>Bank
                        Information
                    </li>
                    <li onClick={() => handleStepClick(4)} className={activeStep === 4 ? 'active' : ''}>Finish</li>
                </ul>
                <div className="highlight" style={{top: `${(activeStep - 1) * 50}px`}}></div>
            </div>
            <div className="profile-image-container">
                {activeStep === 1 && <img src={profileImage} alt="Profile"/>}
                {activeStep === 2 && <img src={addressImage} alt="Address"/>}
            </div>
            <div className="content">
                <div className="progress-bar-container">
                    <h3 className="user-profile-header">User Profile</h3>
                    <div className="progress-bar">
                        <div className="progress" style={{width: `${progress}%`}}></div>
                    </div>
                    <span className="progress-percentage">{Math.round(progress)}%</span>
                </div>
                {activeStep === 1 && (
                    <div className="form-fields">
                        <label className="form-label">Full name</label>
                        <input
                            type="text"
                            className="form-input"
                            onFocus={(e) => e.target.classList.add('focused')}
                            onBlur={(e) => e.target.classList.remove('focused')}
                        />
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-input"
                            onFocus={(e) => e.target.classList.add('focused')}
                            onBlur={(e) => e.target.classList.remove('focused')}
                        />
                        <label className="form-label">Phone Number</label>
                        <input
                            type="text"
                            className="form-input"
                            onFocus={(e) => e.target.classList.add('focused')}
                            onBlur={(e) => e.target.classList.remove('focused')}
                        />
                        <label className="form-label">Date of Birth</label>
                        <div className="date-of-birth" onFocus={(e) => e.currentTarget.classList.add('focused')}
                             onBlur={(e) => e.currentTarget.classList.remove('focused')}>
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
                    </div>
                )}
                {activeStep === 2 && (
                    <div className="form-fields">
                        <label className="form-label">Country</label>
                        <select className="form-input select-input">
                            <option value="">Country</option>
                            <option value="US">United States</option>
                            <option value="UK">United Kingdom</option>
                            <option value="UA">Ukraine</option>
                        </select>
                        <label className="form-label">Region</label>
                        <input
                            type="text"
                            className="form-input"
                        />
                        <label className="form-label">Settlement</label>
                        <input
                            type="text"
                            className="form-input"
                        />
                        <label className="form-label">Address</label>
                        <div className="address" onFocus={(e) => e.currentTarget.classList.add('focused')}
                             onBlur={(e) => e.currentTarget.classList.remove('focused')}>
                            <select className="form-input small-input select-input">
                                <option value="">Street</option>
                                <option value="Main St">Main St</option>
                                <option value="2nd St">2nd St</option>
                            </select>
                            <select className="form-input small-input select-input">
                                <option value="">Number</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                            <select className="form-input small-input select-input">
                                <option value="">Index</option>
                                <option value="1000">1000</option>
                                <option value="2000">2000</option>
                            </select>
                        </div>
                        <div className="buttons-container">
                            <button className="back-button" onClick={handleBackClick}>Back</button>
                            <button className="next-button" onClick={handleNextClick}>Next</button>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Form;