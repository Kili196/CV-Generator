import "./styles/App.css";
import "./styles/Form.css";
import "./styles/Seperator.css";
import "./styles/Header.css";
import FormView from "./components/FormView";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
  });

  return (
    <div className="container">
      <FormView user={user} setUser={setUser} />
      <div className="cv-view">
        {" "}
        dsasd {user.firstname} {user.lastname} {user.email} {user.phonenumber}{" "}
      </div>
    </div>
  );
}

export default App;
