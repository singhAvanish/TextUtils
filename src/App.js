import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {Route,Routes} from "react-router-dom"
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
      
    })
    setTimeout(()=>{
      setalert(null);

    },2000)
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode('dark');
      document.body.style.backgroundColor = '#36454F';
      showAlert("dark mode is enabled", "success");
    } else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode is enabled", "success");
    }
  }
  const [theme,settheme]=useState(mode)
  const themeToggle =(color)=>{
    if (theme===mode){
      
      setmode('dark')
      document.body.style.backgroundColor=color;
      settheme(color)
      

    }else{
      setmode('light')
      showAlert("light mode is enabled","success")
      
      
    }
  }

  return (
    <>
    
    
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} themeToggle={themeToggle} />
      <Alert alert={alert} />
      <Routes>
     
      
      <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode} />}></Route>
        
        <Route exact path="/About" element={<About />}></Route>
     

      
      </Routes>

      
      
    </>
  );
}

export default App;
