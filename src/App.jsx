import "./styles/App.css";
import "./styles/Form.css";
import FormView from "./components/FormView";
import { useState } from "react";

function App() {
  const [userDetails, setUserDetails] = useState({
    firstname: "",
    lastanem: "",
    email: "",
    phonenumber: "",
  });

  return (
    <div className="container">
      <FormView />
      <div className="cv-view"> dsasd </div>
    </div>
  );
}

export default App;
