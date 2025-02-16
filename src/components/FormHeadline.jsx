import DoubleInputField from "./InputFIelds/DoubleInputField";

const FormHeadline = ({
  headline,
  doubleInputs,
  setDoubleInputs,
  subheading,
}) => {
  function addInput(event) {
    event.preventDefault();
    setDoubleInputs([
      ...doubleInputs,
      <DoubleInputField subheading={subheading} />,
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
