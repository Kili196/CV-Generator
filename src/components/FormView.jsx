import Header from "./Header";
import SimpleInputField from "./InputFIelds/SimpleInputField";
import InputBlock from "./InputBlock";
import { useState, useEffect } from "react";
import TextArea from "./TextAriea/TextArea";

const FormView = ({ user, setUser }) => {
  const [userTemp, setUserTemp] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    address: "",
    aboutme: "",
    schools: [],
    works: [],
  });

  useEffect(() => {
    console.log("Updated userTemp:", userTemp);
  }, [userTemp]);

  const handleChange = (event, detail) => {
    const value = event.target.value;
    setUserTemp({ ...userTemp, [detail]: value });
  };

  const handleEvent = (event) => {
    event.preventDefault();
    setUser(userTemp);
  };

  const handleEventDoubleInput = (id, detail, event, type) => {
    setUserTemp((prev) => {
      const result = prev[type].find((element) => element.id == id);
      let copiedArray = [];
      if (!result) {
        const newObject = {
          id,
          name: "",
          from: "",
          to: "",
          [detail]: event.target.value,
        };

        copiedArray = [...prev[type], newObject];
      } else {
        copiedArray = prev[type].map((element) =>
          element.id == id
            ? { ...element, [detail]: event.target.value }
            : element
        );
      }

      return { ...prev, [type]: copiedArray };
    });
  };

  return (
    <div className="flex-column">
      <Header />
      <form>
        <div className="flex-column padding-bottom-1em flex-grow-1">
          <div className="grid-2-rows gap">
            <SimpleInputField
              text={"Firstname"}
              placeholder={"Enter firstname..."}
              type={"text"}
              handleChange={handleChange}
              objectChange="firstname"
            />
            <SimpleInputField
              text={"Lastname"}
              placeholder={"Enter lastname..."}
              type={"text"}
              handleChange={handleChange}
              objectChange="lastname"
            />
          </div>
          <SimpleInputField
            text={"Email-Adress"}
            type={"email"}
            placeholder={"Enter email..."}
            handleChange={handleChange}
            objectChange="email"
          />
          <SimpleInputField
            text={"Phone-number"}
            type={"tel"}
            placeholder={"Enter phonenumber..."}
            handleChange={handleChange}
            objectChange="phonenumber"
          />
          <SimpleInputField
            text={"Adress"}
            type={"text"}
            placeholder={"Enter adress..."}
            handleChange={handleChange}
            objectChange="adress"
          />

          <InputBlock
            heading={"School Journey:"}
            subheading={"School"}
            placeholder={"Enter school"}
            type={"schools"}
            handleEventDoubleInput={handleEventDoubleInput}
          />

          <InputBlock
            heading={"Work Journey:"}
            subheading={"Work"}
            placeholder={"Enter work"}
            type={"works"}
            handleEventDoubleInput={handleEventDoubleInput}
          />

          <TextArea
            placeholder={"About you"}
            handleChange={handleChange}
            objectChange="aboutme"
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
