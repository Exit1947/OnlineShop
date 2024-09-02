import {StepsProvider, Steps} from 'react-step-builder';
import StepUno from './StepUno';
import StepDos from './StepDos';
import StepTres from './StepTres';
import StepCuatro from './StepCuatro';

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