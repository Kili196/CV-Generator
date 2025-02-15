import SimpleInputField from "./SimpleInputField";

const FormView = ({ user, setUser }) => {
  const handleChange = (event, detail) => {
    const value = event.target.value;
    setUser({ ...user, [detail]: value });
  };

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
        <div className="form-input-container">
          <div className="name-input">
            <SimpleInputField
              text={"Firstname"}
              placeholder={"Enter firstname"}
              type={"text"}
              handleChange={handleChange}
              objectChange="firstname"
            />
            <SimpleInputField
              text={"Lastname"}
              placeholder={"Enter lastname"}
              type={"text"}
              handleChange={handleChange}
              objectChange="lastname"
            />
          </div>
          <SimpleInputField
            text={"Email-Adress"}
            type={"email"}
            placeholder={"Enter email"}
            handleChange={handleChange}
            objectChange="email"
          />
          <SimpleInputField
            text={"Phone-number"}
            type={"tel"}
            placeholder={"Enter phonenumber"}
            handleChange={handleChange}
            objectChange="phonenumber"
          />
        </div>

        <button type="submit"> Generate RESUMe </button>
      </form>
    </div>
  );
};

export default FormView;
