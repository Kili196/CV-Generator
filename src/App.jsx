import "./styles/App.css";
import "./styles/Form.css";
import "./styles/Seperator.css";

import FormView from "./components/FormView";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    address: "",
    aboutme: "",
    schools: [],
    works: [],
  });

  return (
    <div className="container">
      <FormView user={user} setUser={setUser} />
      <div className="cv-view">
        {" "}
        dsasd {user.firstname} {user.lastname} {user.email} {user.aboutme}{" "}
      </div>
    </div>
  );
}

export default App;
