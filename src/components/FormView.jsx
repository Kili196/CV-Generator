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
      <form>
        <div className="form-row">
          <SimpleInputField text={"Firstname"} />
          <SimpleInputField text={"Firstname"} />
        </div>
        <div className="form-row">
          <SimpleInputField text={"Firstname"} />
          <SimpleInputField text={"Firstname"} />
        </div>
      </form>
    </div>
  );
};

export default FormView;
