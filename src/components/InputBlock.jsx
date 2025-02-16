import { useState } from "react";
import FormHeadline from "./FormHeadline";
import DoubleInputField from "./InputFIelds/DoubleInputField";

const InputBlock = ({ heading, subheading }) => {
  const [doubleInputs, setDoubleInputs] = useState([]);

  return (
    <div className="advanced-input">
      <FormHeadline
        headline={heading}
        doubleInputs={doubleInputs}
        setDoubleInputs={setDoubleInputs}
        subheading={subheading}
      />
      <div className="scrollable padding-right-1em">
        <DoubleInputField subheading={subheading} />
        {doubleInputs}
      </div>
    </div>
  );
};

export default InputBlock;
