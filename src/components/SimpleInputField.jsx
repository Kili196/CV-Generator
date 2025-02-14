const SimpleInputField = ({ text, value, setValue }) => {
  return (
    <>
      <div className="input-container">
        <label> {text}: </label>
        <input required type="text" />
      </div>
    </>
  );
};

export default SimpleInputField;
