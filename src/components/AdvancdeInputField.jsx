import FormHeadline from "./FormHeadline";
import DoubleInputField from "./InputFIelds/DoubleInputField";

const AdvancedInputField = ({ heading }) => {
  return (
    <div>
      <FormHeadline headline={heading} />
      <div className="journey-input">
        <DoubleInputField />
        <DoubleInputField />
      </div>
    </div>
  );
};

export default AdvancedInputField;
