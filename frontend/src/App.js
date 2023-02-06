import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Componants/Home";

//Validations


import Navbar from "./Componants/Navbar";
import { Provider } from 'react-redux';
import SelectDepartment from "./Componants/SelectDepartment";
import MICUDepartment from "./Componants/MICUDepartment";
import MICUBed1 from "./Componants/MICUBed1";
import SelectHospital from "./Componants/SelectHospital";
import { useSelector } from "react-redux";
import { useLoadingWithRefresh } from "./hooks/useLoadingWithRefresh";
import "./App.css";
function App() {
  return(
  <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SelectDepartment" element={<SelectDepartment />} />
          <Route path="/MICUDepartment" element={<MICUDepartment />} />
          <Route path="/MICUBed1" element={<MICUBed1 />} />
          <Route path="/SelectHospital" element={<SelectHospital />} />
          
          <Route path="*" element={<h1>Error 404 pages not found!!</h1>} />
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
