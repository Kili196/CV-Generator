import Header from "./Header";
import SimpleInputField from "./SimpleInputField";
import AdvancedInputField from "./AdvancdeInputField";
import { useState } from "react";

const FormView = ({ user, setUser }) => {
  const [userTemp, setUserTemp] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
  });

  const handleChange = (event, detail) => {
    const value = event.target.value;
    setUserTemp({ ...userTemp, [detail]: value });
  };

  const handleEvent = (event) => {
    event.preventDefault();
    setUser(userTemp);
  };

  return (
    <div className="form-section">
      <Header />
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

        <button type="submit" onClick={handleEvent}>
          Generate RESUME
        </button>
      </form>
    </div>
  );
};

export default FormView;
