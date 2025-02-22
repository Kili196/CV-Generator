const FormHeadline = ({
  headline,
  doubleInputs,
  setDoubleInputs,
  subheading,
  dataId,
  setDataId,
  placeholder,
  addExperience,
  type,
  handleEventDoubleInput,
}) => {
  function addInput(event) {
    event.preventDefault();
    setDataId((prev) => prev + 1);
    setDoubleInputs([
      ...doubleInputs,
      {
        subheading: subheading,
        placeholder: placeholder,
        data_id: dataId,
        handleEventDoubleInput: handleEventDoubleInput,
        type: type,
      },
    ]);
    addExperience(dataId, type);
  }

  return (
    <div className="form-headline">
      <div className="heading">
        <h1 className="heading-style"> {headline}</h1>
        <button onClick={addInput}> ADD </button>
      </div>
      <div className="headline-seperator"> </div>
    </div>
  );
};

export default FormHeadline;
