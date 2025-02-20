import { useState } from "react";
import FormHeadline from "./FormHeadline";
import DoubleInputField from "./InputFIelds/DoubleInputField";

const InputBlock = ({
  heading,
  subheading,
  placeholder,
  addExperience,
  type,
}) => {
  const [dataId, setDataId] = useState(1);

  const [doubleInputs, setDoubleInputs] = useState([
    <DoubleInputField
      subheading={subheading}
      placeholder={placeholder}
      data_id={dataId}
    />,
  ]);

  return (
    <div className="advanced-input">
      <FormHeadline
        headline={heading}
        doubleInputs={doubleInputs}
        setDoubleInputs={setDoubleInputs}
        subheading={subheading}
        setDataId={setDataId}
        id={dataId}
        placeholder={placeholder}
        addExperience={addExperience}
        type={type}
      />
      <div className="scrollable padding-right-1em remove-list-style">
        {doubleInputs.map((input) => (
          <li> {input} </li>
        ))}
      </div>
    </div>
  );
};

export default InputBlock;
