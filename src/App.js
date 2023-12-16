import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterScreen from "./components/RegisterScreen.js";
import LoginScreen from './components/LoginScreen.js';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<RegisterScreen/>}/>
            <Route path='/login' element={<LoginScreen/>}/>
            
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
