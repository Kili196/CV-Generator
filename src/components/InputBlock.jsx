import { useState } from "react";
import FormHeadline from "./FormHeadline";
import DoubleInputField from "./InputFIelds/DoubleInputField";

const InputBlock = ({ heading, subheading, placeholder }) => {
  const [doubleInputs, setDoubleInputs] = useState([]);

  const data_id = 0;

  return (
    <div className="advanced-input">
      <FormHeadline
        headline={heading}
        doubleInputs={doubleInputs}
        setDoubleInputs={setDoubleInputs}
        subheading={subheading}
      />
      <div className="scrollable padding-right-1em">
        <DoubleInputField
          subheading={subheading}
          placeholder={placeholder}
          data_id={data_id}
        />
        {doubleInputs}
      </div>
    </div>
  );
};

export default InputBlock;
