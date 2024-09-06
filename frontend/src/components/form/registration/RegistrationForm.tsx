import {StepsProvider, Steps} from 'react-step-builder';
import StepUno from './StepUno.tsx';
import StepDos from './StepDos.tsx';
import StepTres from './StepTres.tsx';
import StepCuatro from './StepCuatro.tsx';

const RegistrationForm = () => {
    return (
        <StepsProvider>
                <Steps>
                    <StepUno/>
                    <StepDos/>
                    <StepTres/>
                    <StepCuatro/>
                </Steps>
        </StepsProvider>
    )
}

export default RegistrationForm;