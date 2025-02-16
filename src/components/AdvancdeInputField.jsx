import { useState } from "react";
import FormHeadline from "./FormHeadline";
import DoubleInputField from "./InputFIelds/DoubleInputField";

const AdvancedInputField = ({ heading }) => {
  const [doubleInputs, setDoubleInputs] = useState([]);

  return (
    <div>
      <FormHeadline
        headline={heading}
        doubleInputs={doubleInputs}
        setDoubleInputs={setDoubleInputs}
      />
      <div className="journey-input">
        <DoubleInputField />
        {doubleInputs}
      </div>
    </div>
  );
};

export default AdvancedInputField;
