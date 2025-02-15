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
        <div className="name-input">
          <SimpleInputField
            text={"Firstname"}
            placeholder={"Enter firstname"}
            type={"text"}
          />
          <SimpleInputField
            text={"Lastname"}
            placeholder={"Enter lastname"}
            type={"text"}
          />
        </div>
        <SimpleInputField
          text={"Email-Adress"}
          type={"email"}
          placeholder={"Enter email"}
        />
        <SimpleInputField
          text={"Phone-number"}
          type={"tel"}
          placeholder={"Enter phonenumber"}
        />

        <button type="submit"> Generate RESUMe </button>
      </form>
    </div>
  );
};

export default FormView;
