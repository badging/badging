import React, { useState } from 'react';
import PageOne from './PageOne';
// import FormTest from './FormTest';
import PageTwo from './PageTwo';
import PageThree from './PageThree';
import PageFour from './PageFour';
import PageFive from './PageFive';
import PageSix from './PageSix';
// import { useForm } from 'react-hook-form';
// import UseFormContext from '../../hooks/useFormContext';
import { useForm, FormProvider } from 'react-hook-form';
// import { Button, Step, StepLabel, Stepper } from '@mui/material';

import '../formcontainer.scss';

const FormContainer = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const methods = useForm();
  const onSubmit = (data) => console.log(data);

  const stepArray = [PageOne, PageTwo, PageThree, PageFour, PageFive, PageSix];
  const stepLength = stepArray.length;

  // const stepL = () => {
  //   setMaxStep(maxStep + 0);
  // };
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
    console.log(currentStep);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PageOne />;
      case 2:
        return <PageTwo />;
      case 3:
        return <PageThree />;
      case 4:
        return <PageFour />;
      case 5:
        return <PageFive />;
      case 6:
        return <PageSix />;
      default:
        return <div>404: Not Found</div>;
    }
  };

  return (
    <div className="form-container">
      <FormProvider {...methods}>
        <form className="form-wrap" onSubmit={methods.handleSubmit(onSubmit)}>
          <h1> In-Person Event</h1>
          <p>
            Please only use this form if you are applying for a CHAOSS DEI Event
            Badge for physical events. You can apply for virtual events{' '}
            <a className="ev-link" href="/virtual">
              here
            </a>
            .
          </p>
          {renderStep()}

          <div className="sub">
            {currentStep > 1 && (
              <button className="sub-button" type="button" onClick={prevStep}>
                Previous
              </button>
            )}
            {currentStep < 6 ? (
              <button
                className="sub-button"
                type="button"
                onClick={nextStep}
                style={{
                  background: methods.formState.isValid ? '#222D33' : '#F3F5F6',
                  color: methods.formState.isValid ? '#FFFFFF' : '#5B656B',
                }}
              >
                Next ({currentStep + '/' + stepLength})
              </button>
            ) : (
              <button
                className="sub-button"
                type="submit"
                disabled={!methods.formState.isValid}
                style={{
                  background: methods.formState.isValid ? '#222D33' : '#F3F5F6',
                  color: methods.formState.isValid ? '#FFFFFF' : '#5B656B',
                }}
              >
                Submit ({currentStep + '/' + stepLength})
              </button>
            )}
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default FormContainer;
