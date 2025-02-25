const FormHeadline = ({
  headline,
  doubleInputs,
  setDoubleInputs,
  subheading,
  dataId,
  setDataId,
  placeholder,
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
        data_id: dataId + 1,
        handleEventDoubleInput: handleEventDoubleInput,
        type: type,
      },
    ]);
  }

  return (
    <div className="">
      <div className="flex-row justify-content-spacebetween padding inputblock-headline">
        <h1 className=""> {headline}</h1>
        <button onClick={addInput}> ADD </button>
      </div>
      <div className="headline-seperator"> </div>
    </div>
  );
};

export default FormHeadline;
