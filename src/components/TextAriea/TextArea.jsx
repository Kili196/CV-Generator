const TextArea = ({ placeholder, handleChange, objectChange }) => {
  return (
    <>
      <label className="heading-style"> {placeholder}</label>
      <textarea
        placeholder={placeholder}
        onChange={(event) => handleChange(event, objectChange)}
      />
    </>
  );
};

export default TextArea;
