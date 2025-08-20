import React from "react";

interface ProgressStepperProps {
  steps: string[];
  currentStep: number;
}

const ProgressStepper: React.FC<ProgressStepperProps> = ({ steps, currentStep }) => {
  return (
    <div className="stepper">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`step ${index === currentStep ? "active" : index < currentStep ? "completed" : ""}`}
        >
          {step}
        </div>
      ))}
    </div>
  );
};

export default ProgressStepper;
