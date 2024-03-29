// import logo from './logo.svg';
import React,{ useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Textform from "./components/textform"
import Alert from "./components/alert"


function App() {
  
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const [mode, setMode] = useState('light');
  const toggleMode=()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
      <Navbar title="TextCounter" aboutText="About TextCounter" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
          <Textform heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />
        </div>
    </>
  );
}

export default App;
