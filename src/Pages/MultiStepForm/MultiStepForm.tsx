import React, { useState } from "react";
import StepOne from "./Step1";
import StepTwo from "./Step2";
import StepThree from "./Step3";
import Confirmation from "./Summary";
import ProgressStepper from "./Stepper";
import "./MultiStepForm.css";

const MultiStepForm: React.FC = () => {
  const steps = ["Personal Info", "Contact Details", "Preferences", "Confirmation"];
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const handleSubmit = () => {
    console.log("Form Submitted:", formData);
    alert("Form Submitted Successfully!");
  };

  return (
    <div className="multi-step-form">
      <ProgressStepper steps={steps} currentStep={currentStep} />
      {currentStep === 0 && <StepOne formData={formData} setFormData={setFormData} onNext={nextStep} />}
      {currentStep === 1 && <StepTwo formData={formData} setFormData={setFormData} onNext={nextStep} onBack={prevStep} />}
      {currentStep === 2 && <StepThree formData={formData} setFormData={setFormData} onNext={nextStep} onBack={prevStep} />}
      {currentStep === 3 && <Confirmation formData={formData} onSubmit={handleSubmit} onBack={prevStep} />}
    </div>
  );
};

export default MultiStepForm;
