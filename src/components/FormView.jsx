import Header from "./Header";
import SimpleInputField from "./InputFIelds/SimpleInputField";
import InputBlock from "./InputBlock";
import { useState } from "react";

const FormView = ({ user, setUser }) => {
  const [userTemp, setUserTemp] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    schools: [{ id: 0, name: "", from: "", to: "" }],
    works: [{ id: 0, name: "", from: "", to: "" }],
  });

  const handleChange = (event, detail) => {
    const value = event.target.value;
    setUserTemp({ ...userTemp, [detail]: value });
  };

  const handleEvent = (event) => {
    event.preventDefault();
    event.checkValidity();
    setUser(userTemp);
  };

  const addExperience = (id, type) => {
    setUserTemp((prev) => ({
      ...userTemp,
      [type]: [...prev[type], { id: { id }, name: "", from: "", to: "" }],
    }));

    console.log(userTemp);
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

          <InputBlock
            heading={"School Journey:"}
            subheading={"School"}
            placeholder={"Enter school"}
            addExperience={addExperience}
            type={"schools"}
          />

          <InputBlock
            heading={"Work Journey:"}
            subheading={"Work"}
            placeholder={"Enter work"}
            addExperience={addExperience}
            type={"works"}
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
