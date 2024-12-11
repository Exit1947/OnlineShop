import {StepsProvider, Steps} from 'react-step-builder';
import React from 'react';
import StepUno from './StepUno.tsx';
import StepDos from './StepDos.tsx';
import StepTres from './StepTres.tsx';
import StepCuatro from './StepCuatro.tsx';

import Footer from   "../../footer/Footer.tsx";
import Header from "../../header/Header.tsx";
import Dropdown from './../../dropmenu/Dropdown.tsx';
import Aftermenu from './../../aftermenu/Aftermenu.tsx';
import LanguageDropdown from './../../languagedrop/LanguageDropdown.tsx';
import CurrencyDropdown from './../../currencydropdown/CurrencyDropdown.tsx';

const RegistrationForm = () => {


    return (
       <>
        <Header />  
            
            <Aftermenu/>
            <Dropdown/>
            <LanguageDropdown/>
            <CurrencyDropdown/>
        
        <StepsProvider>                     
                <Steps>               
                    <StepUno/>
                    <StepDos/>
                    <StepTres/>
                    <StepCuatro/>
                 </Steps>             
        </StepsProvider>
        <Footer/>
        </>     
    )
}

export default RegistrationForm;