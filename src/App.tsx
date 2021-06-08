import {useState} from 'react';
import {Routes,Route} from "react-router-dom";
import './App.css';
import {ThemeProvider} from "@material-ui/core";
import {Primarytheme,Secondarytheme} from "./theme"
import Home from "./Components/Home/Home";
import {QuizProvider} from "./provider/QuizProvider";
import Play from "./Components/Play/Play";
import Navigation from "./Components/Navigation/Navigation";
function App() {
  const [mode,setmode]=useState<string>("light");
  return (
    <ThemeProvider theme={mode==="light" ? Primarytheme:Secondarytheme}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home/>}  />   
        <QuizProvider>
          <Routes>
          <Route path="/play" element={<Play/>}/>
          </Routes>    
          </QuizProvider> 
      </Routes>   
    </ThemeProvider>
    
  );
}

export default App;
