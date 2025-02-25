import { useState } from "react";
import FormHeadline from "./FormHeadline";
import AdvancedInputField from "./InputFIelds/AdvancedInputField";

const InputBlock = ({
  heading,
  subheading,
  placeholder,
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

  function addInput(event) {
    event.preventDefault();
    setDataId((previousCount) => previousCount + 1);
    setDoubleInputs([
      ...doubleInputs,
      {
        subheading: subheading,
        placeholder: placeholder,
        data_id: dataId + 1,
        handleEventDoubleInput: handleEventDoubleInput,
        type: type,
      },
    ]);
  }

  return (
    <div className="advanced-input">
      <FormHeadline
        headline={heading}
        addInput={addInput}
        subheading={subheading}
        setDataId={setDataId}
        dataId={dataId}
        placeholder={placeholder}
        type={type}
        handleEventDoubleInput={handleEventDoubleInput}
      />
      <div className="scrollable padding-right-1em remove-list-style">
        {doubleInputs.map((element) => (
          <AdvancedInputField
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
