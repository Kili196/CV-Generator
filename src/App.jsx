import "./styles/App.css"
import SimpleInputField from "./components/SimpleInputField"


function App() {

  


  return (
    
    <div className="container">
      <div className="form-section">
        <header>  
          <h1> Create your own <span className="highlight"> <em> RESUME! </em> </span> </h1>
          </header>  

        <div className="input-resume">
          <SimpleInputField />
          <SimpleInputField />

        </div>
      </div>
      <div className="cv-view"> dsasd </div>
    </div>
  
  )
}

export default App
