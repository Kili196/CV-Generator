const DoubleInputField = ({ subheading, placeholder }) => {
  return (
    <div className="input-pair">
      <div>
        <label> {subheading}: </label>
        <input type="text" required placeholder={placeholder} />
      </div>
      <div>
        <label> From: </label>
        <input type="date" required />
      </div>
      <div>
        <label> To: </label>
        <input type="date" required />
      </div>
    </div>
  );
};

export default DoubleInputField;
