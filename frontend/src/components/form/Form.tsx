import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './form.css';
import Sidebar from './Sidebar.jsx';
import ProgressBar from './ProgressBar.jsx';
import FormFields from './FormFields.jsx';
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

    const [activeStep, setActiveStep] = useState(1);
    const [progress, setProgress] = useState(0);

    const updateProgress = (step) => {
        const newProgress = (step - 1) * 33;
        setProgress(Math.min(newProgress, 100)); 
    };

    const handleStepClick = (step) => {
        setActiveStep(step);
        updateProgress(step);
    };

    const handleNextClick = () => {
        if (activeStep < 4) {
            setActiveStep(activeStep + 1);
            updateProgress(activeStep + 1);
        }
    };

    const handleBackClick = () => {
        if (activeStep > 1) {
            setActiveStep(activeStep - 1);
            updateProgress(activeStep - 1);
        }
    };

    return (
        <div className="form-container">
            <Sidebar activeStep={activeStep} handleStepClick={handleStepClick} />
            <ProgressBar progress={progress} activeStep={activeStep} />
            <FormFields activeStep={activeStep} handleNextClick={handleNextClick} handleBackClick={handleBackClick} />
        </div>
    );
};

export default Form;