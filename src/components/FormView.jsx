import SimpleInputField from "./SimpleInputField";

const FormView = () => {
  return (
    <div className="form-section">
      <header>
        <h1>
          Create your own
          <span className="highlight">
            <em> RESUME! </em>
          </span>
        </h1>
      </header>

      <SimpleInputField text={"Firstname"} />
      <SimpleInputField text={"Firstname"} />
    </div>
  );
};

export default FormView;
