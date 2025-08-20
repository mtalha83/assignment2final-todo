import React, { useState } from "react";

interface StepOneProps {
  formData: any;
  setFormData: (data: any) => void;
  onNext: () => void;
}

const StepOne: React.FC<StepOneProps> = ({ formData, setFormData, onNext }) => {
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!formData.firstName || !formData.lastName) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    onNext();
  };

  return (
    <div className="form-step">
      <h2>Step 1: Personal Info</h2>
      <input
        type="text"
        placeholder="First Name"
        value={formData.firstName || ""}
        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={formData.lastName || ""}
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
      />
      {error && <p className="error">{error}</p>}
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default StepOne;
