import React, { useState } from "react";

interface StepThreeProps {
  formData: any;
  setFormData: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}

const StepThree: React.FC<StepThreeProps> = ({ formData, setFormData, onNext, onBack }) => {
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!formData.preference) {
      setError("Please select a preference.");
      return;
    }
    setError("");
    onNext();
  };

  return (
    <div className="form-step">
      <h2>Step 3: Preferences</h2>
      <select
        value={formData.preference || ""}
        onChange={(e) => setFormData({ ...formData, preference: e.target.value })}
      >
        <option value="">Select preference</option>
        <option value="Daily Updates">Daily Updates</option>
        <option value="Weekly Newsletter">Weekly Newsletter</option>
        <option value="Monthly Reports">Monthly Reports</option>
      </select>
      <label>
        <input
          type="checkbox"
          checked={formData.newsletter || false}
          onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
        />
        Subscribe to newsletter
      </label>
      {error && <p className="error">{error}</p>}
      <div className="form-buttons">
        <button onClick={onBack}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default StepThree;
