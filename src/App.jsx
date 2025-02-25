import "./styles/App.css";
import "./styles/Form.css";
import "./styles/Seperator.css";

import FormView from "./components/FormView";
import CvView from "./components/CvView";
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

  const [isSumbitted, setIsSubmitted] = useState(false);

  return (
    <div className="container">
      <FormView
        user={user}
        setUser={setUser}
        isSumbitted={isSumbitted}
        setIsSubmitted={setIsSubmitted}
      />
      <CvView />
      <h1> {isSumbitted && user.firstname} aaa </h1>
    </div>
  );
}

export default App;
