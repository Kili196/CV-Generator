const TextArea = ({ placeholder, handleChange, objectChange }) => {
  return (
    <div className="flex-column flex-grow-1">
      <label className="heading-style">
        {" "}
        <em> {placeholder} </em>
      </label>
      <textarea
        placeholder={placeholder}
        onChange={(event) => handleChange(event, objectChange)}
      />
    </div>
  );
};

export default TextArea;
