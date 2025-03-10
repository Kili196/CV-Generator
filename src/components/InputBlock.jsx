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
  experiences,
  setUser,
}) => {
  function addInput(event) {
    event.preventDefault();
    setUser((previous) => {
      console.log(previous);
      const prevArray = previous[type];

      const result = [
        ...prevArray,
        {
          id:
            prevArray[prevArray.length - 1] !== undefined
              ? prevArray[prevArray.length - 1].id + 1
              : 1,
          name: "",
          from: "",
          to: "",
        },
      ];

      return { ...previous, [type]: result };
    });
  }

  return (
    <div className="advanced-input">
      <FormHeadline headline={heading} addInput={addInput} />
      <div className="scrollable padding-right-1em remove-list-style">
        {experiences.map((element) => (
          <InputFieldWithDateRange
            subheading={subheading}
            placeholder={placeholder}
            data_id={element.id}
            handleEventDoubleInput={handleEventDoubleInput}
            type={type}
            key={element.id}
            deleteExperience={deleteExperience}
          />
        ))}
      </div>
    </div>
  );
};

export default InputBlock;
