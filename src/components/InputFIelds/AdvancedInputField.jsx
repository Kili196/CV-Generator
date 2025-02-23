const AdvancedInputField = ({
  subheading,
  placeholder,
  data_id,
  handleEventDoubleInput,
  type,
}) => {
  return (
    <div className="input-pair">
      <div className="input-field">
        <label> {subheading}: </label>
        <input
          type="text"
          required
          placeholder={placeholder}
          onChange={(event) =>
            handleEventDoubleInput(data_id, "name", event, type)
          }
        />
      </div>
      <div className="input-field">
        <label> From: </label>
        <input
          type="date"
          required
          onChange={(event) =>
            handleEventDoubleInput(data_id, "from", event, type)
          }
        />
      </div>
      <div className="input-field">
        <label> To: </label>
        <input
          type="date"
          required
          onChange={(event) =>
            handleEventDoubleInput(data_id, "to", event, type)
          }
        />
      </div>
    </div>
  );
};

export default AdvancedInputField;
