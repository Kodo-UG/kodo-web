import React, { useState } from 'react';

import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepperFour from './StepperFour';
import StepSix from './StepSix';
import Final from './Final';

const Stepper = () => {
    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password1: ''
    });

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        });
    };

    const renderStepContent = () => {
        switch (step) {
            case 1:
                return (
                    <StepOne nextStep={nextStep} prevStep={prevStep} formData={formData} setFormData={setFormData} />
                );
            case 2:
                return (
                    <StepTwo nextStep={nextStep} prevStep={prevStep} formData={formData} setFormData={setFormData} />
                );
            case 3:
                return (
                    <StepThree nextStep={nextStep} prevStep={prevStep} formData={formData} setFormData={setFormData} />
                );
            case 4:
                return (
                    <StepperFour nextStep={nextStep} prevStep={prevStep} formData={formData} setFormData={setFormData} />
                );
            case 5:
                return (
                    <StepSix nextStep={nextStep} prevStep={prevStep} formData={formData} setFormData={setFormData} />
                );
            default:
                return null;
        }
    };


    return (
        <div className='m-5'>
            {renderStepContent()}
        </div>
    )
}

export default Stepper