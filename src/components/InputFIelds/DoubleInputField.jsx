const DoubleInputField = ({ subheading }) => {
  return (
    <div className="input-pair">
      <div>
        <label> {subheading}: </label>
        <input type="text" />
      </div>
      <div>
        <label> From: </label>
        <input type="date" />
      </div>
      <div>
        <label> To: </label>
        <input type="date" />
      </div>
    </div>
  );
};

export default DoubleInputField;
