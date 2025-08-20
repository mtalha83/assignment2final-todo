import React, { useState } from "react";

interface StepTwoProps {
  formData: any;
  setFormData: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}

const StepTwo: React.FC<StepTwoProps> = ({ formData, setFormData, onNext, onBack }) => {
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!formData.email || !formData.phone) {
      setError("Please enter your email and phone.");
      return;
    }
    setError("");
    onNext();
  };

  return (
    <div className="form-step">
      <h2>Step 2: Contact Details</h2>
      <input
        type="email"
        placeholder="Email"
        value={formData.email || ""}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="tel"
        placeholder="Phone"
        value={formData.phone || ""}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />
      {error && <p className="error">{error}</p>}
      <div className="form-buttons">
        <button onClick={onBack}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default StepTwo;
