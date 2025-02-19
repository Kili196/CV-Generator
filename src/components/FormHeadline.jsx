import DoubleInputField from "./InputFIelds/DoubleInputField";

const FormHeadline = ({
  headline,
  doubleInputs,
  setDoubleInputs,
  subheading,
  id,
  setDataId,
  placeholder,
}) => {
  function addInput(event) {
    event.preventDefault();

    setDataId((prev) => prev + 1);

    setDoubleInputs([
      ...doubleInputs,
      <DoubleInputField
        subheading={subheading}
        data_id={id}
        placeholder={placeholder}
      />,
    ]);
  }

  return (
    <div className="form-headline">
      <div className="heading">
        <h1> {headline}</h1>
        <button onClick={addInput}> ADD </button>
      </div>
      <div className="headline-seperator"> </div>
    </div>
  );
};

export default FormHeadline;
