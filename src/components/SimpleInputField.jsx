const SimpleInputField = ({ text, value, setValue, placeholder, type }) => {
  return (
    <>
      <div className="input-container">
        <label> {text}: </label>

        <input required type={type} placeholder={placeholder} />
      </div>
    </>
  );
};

export default SimpleInputField;
