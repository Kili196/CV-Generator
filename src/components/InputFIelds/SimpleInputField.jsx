const SimpleInputField = ({
  text,
  handleChange,
  placeholder,
  type,
  objectChange,
}) => {
  return (
    <>
      <div className="simple-input-field ">
        <label> {text}: </label>
        <input
          required
          type={type}
          placeholder={placeholder}
          onChange={(event) => handleChange(event, objectChange)}
        />
      </div>
    </>
  );
};

export default SimpleInputField;
