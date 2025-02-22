import { useState } from "react";
import FormHeadline from "./FormHeadline";
import DoubleInputField from "./InputFIelds/DoubleInputField";

const InputBlock = ({
  heading,
  subheading,
  placeholder,
  addExperience,
  type,
  handleEventDoubleInput,
}) => {
  const [dataId, setDataId] = useState(1);

  const [doubleInputs, setDoubleInputs] = useState([
    {
      subheading: subheading,
      placeholder: placeholder,
      data_id: dataId,
      handleEventDoubleInput: handleEventDoubleInput,
      type: type,
    },
  ]);

  return (
    <div className="advanced-input">
      <FormHeadline
        headline={heading}
        doubleInputs={doubleInputs}
        setDoubleInputs={setDoubleInputs}
        subheading={subheading}
        setDataId={setDataId}
        dataId={dataId}
        placeholder={placeholder}
        addExperience={addExperience}
        type={type}
        handleEventDoubleInput={handleEventDoubleInput}
      />
      <div className="scrollable padding-right-1em remove-list-style">
        {doubleInputs.map((element) => (
          <DoubleInputField
            subheading={element.subheading}
            placeholder={element.placeholder}
            data_id={element.data_id}
            handleEventDoubleInput={handleEventDoubleInput}
            type={type}
          />
        ))}
      </div>
    </div>
  );
};

export default InputBlock;
