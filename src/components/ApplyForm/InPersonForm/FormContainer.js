import React, { useState } from "react";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import PageFour from "./PageFour";
import PageFive from "./PageFive";
import PageSix from "./PageSix";
import PageSeven from "./PageSeven";
import PageEight from "./PageEight";
import PageNine from "./PageNine";
import { useForm, FormProvider } from "react-hook-form";

import "../formcontainer.scss";
import { submitEventForm } from "../../../pages/API/submitEvent";

const FormContainer = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const methods = useForm();
  const onSubmit = async (data) => {
    const response = await submitEventForm(data, "In-Person");

    // navigate to url from response
    const { authorizationLink } = response;
    window.open(authorizationLink, "_blank");
  };

  const stepArray = [
    PageOne,
    PageTwo,
    PageThree,
    PageFour,
    PageFive,
    PageSix,
    PageSeven,
    PageEight,
    PageNine,
  ];
  const stepLength = stepArray.length;

  // const stepL = () => {
  //   setMaxStep(maxStep + 0);
  // };
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
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
      case 7:
        return <PageSeven />;
      case 8:
        return <PageEight />;
      case 9:
        return <PageNine />;
      default:
        return <div>404: Not Found</div>;
    }
  };

  return (
    <div className="form-container container">
      <FormProvider {...methods}>
        <form className="form-wrap" onSubmit={methods.handleSubmit(onSubmit)}>
          <h1> In-Person Event</h1>
          <p>
            Please only use this form if you are applying for a CHAOSS DEI Event
            Badge for physical events. You can apply for virtual events{" "}
            <a className="ev-link" href="/virtual">
              here
            </a>
            .
          </p>
          {renderStep()}
          {currentStep === 9 && (
            <div className="submit-info">
              <p>
                {" "}
                Once you click{" "}
                <strong style={{ color: "#000" }}>&quot;Submit&quot;</strong>,
                your application will be processed. If this is your first time
                submitting an event application, you will be prompted to
                authorize your GitHub account. After authorization, a GitHub
                issue will be automatically created for you on the Event
                Diversity and Inclusion repository.
              </p>
            </div>
          )}
          <div className="sub">
            {currentStep > 1 && (
              <button className="sub-button" type="button" onClick={prevStep}>
                Previous
              </button>
            )}
            {currentStep >= 1 && currentStep <= 8 && (
              <button
                className="sub-button"
                type="button"
                onClick={nextStep}
                style={{
                  background: methods.formState.isValid ? "#222D33" : "#F3F5F6",
                  color: methods.formState.isValid ? "#FFFFFF" : "#5B656B",
                }}
              >
                Next ({currentStep + "/" + stepLength})
              </button>
            )}

            {currentStep === 9 && (
              <button
                className="sub-button"
                type="submit"
                style={{
                  background: "#222D33",
                  color: "#FFFFFF",
                }}
              >
                Submit ({currentStep + "/" + stepLength})
              </button>
            )}
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default FormContainer;
