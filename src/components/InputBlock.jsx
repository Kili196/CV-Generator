import { useState, useEffect } from "react";
import FormHeadline from "./FormHeadline";
import InputFieldWithDateRange from "./InputFIelds/InputFieldWithDateRange";

const InputBlock = ({
  heading,
  subheading,
  placeholder,
  type,
  handleEventDoubleInput,
  deleteExperience,
}) => {
  const [doubleInputs, setDoubleInputs] = useState([
    {
      data_id: 1,
      handleEventDoubleInput: handleEventDoubleInput,
      type: type,
    },
  ]);

  function addInput(event) {
    event.preventDefault();
    setDoubleInputs((previousInputs) => {
      const result = [
        ...previousInputs,
        {
          subheading: subheading,
          placeholder: placeholder,
          data_id: previousInputs[previousInputs.length - 1].data_id + 1,
          handleEventDoubleInput: handleEventDoubleInput,
          type: type,
        },
      ];

      return result;
    });
  }

  return (
    <div className="advanced-input">
      <FormHeadline headline={heading} addInput={addInput} />
      <div className="scrollable padding-right-1em remove-list-style">
        {doubleInputs.map((element) => (
          <InputFieldWithDateRange
            subheading={subheading}
            placeholder={placeholder}
            data_id={element.data_id}
            handleEventDoubleInput={handleEventDoubleInput}
            type={type}
            key={element.data_id}
            deleteExperience={deleteExperience}
          />
        ))}
      </div>
    </div>
  );
};

export default InputBlock;
