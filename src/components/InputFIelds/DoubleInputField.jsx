const DoubleInputField = ({
  subheading,
  placeholder,
  data_id,
  handleEventDoubleInput,
  type,
}) => {
  return (
    <div className="input-pair">
      <div>
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
      <div>
        <label> From: </label>
        <input
          type="date"
          required
          onChange={(event) =>
            handleEventDoubleInput(data_id, "from", event, type)
          }
        />
      </div>
      <div>
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

export default DoubleInputField;
