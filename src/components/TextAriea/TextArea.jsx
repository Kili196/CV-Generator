const TextArea = ({ placeholder, handleChange, objectChange }) => {
  return (
    <>
      <label className="heading-style"> {placeholder}</label>
      <textarea
        placeholder={placeholder}
        className="full-width full-height"
        onChange={(event) => handleChange(event, objectChange)}
      />
    </>
  );
};

export default TextArea;
