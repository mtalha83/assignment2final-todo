import React from "react";

interface ConfirmationProps {
  formData: any;
  onSubmit: () => void;
  onBack: () => void;
}

const Confirmation: React.FC<ConfirmationProps> = ({ formData, onSubmit, onBack }) => {
  return (
    <div className="form-step">
      <h2>Confirmation</h2>
      <ul>
        <li><strong>First Name:</strong> {formData.firstName}</li>
        <li><strong>Last Name:</strong> {formData.lastName}</li>
        <li><strong>Email:</strong> {formData.email}</li>
        <li><strong>Phone:</strong> {formData.phone}</li>
        <li><strong>Preference:</strong> {formData.preference}</li>
        <li><strong>Newsletter:</strong> {formData.newsletter ? "Yes" : "No"}</li>
      </ul>
      <div className="form-buttons">
        <button onClick={onBack}>Previous</button>
        <button onClick={onSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Confirmation;
