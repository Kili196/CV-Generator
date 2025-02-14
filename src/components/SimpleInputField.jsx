const SimpleInputField = ({ text, value, setValue }) => {
  return (
    <>
      <div className="simpleinput-container">
        <label> {text}: </label>
        <input required type="text" />
      </div>
    </>
  );
};

export default SimpleInputField;
