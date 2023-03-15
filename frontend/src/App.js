import React from "react";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import { Home } from "./Componants/pages/Home";
import SelectHospital from "./Componants/SelectHospital";
import Protected from "./Componants/Protected";
import SelectDepartment from "./Componants/SelectDepartment";
import ICU from "./Componants/ICU";

//import  Provider from "react-redux";
import Identification from "./Componants/ICU/Identification";

//  MICUDepartment  MICUBed1
export const App = () => {
  return(
<>
<BrowserRouter>
<Routes>
  
  <Route  path="/" element={<Protected Component={Home}/>}/>
  <Route  path="/mgmcet/icu/new" element={<Protected Component={Identification}/>}/>
  <Route  path="/hospitals" element={<Protected Component={SelectHospital}/>}/>
  <Route  path="/mgmcet/departments" element={<Protected Component={SelectDepartment}/>}/>
  <Route  path="/mgmcet/icu" element={<Protected Component={ICU}/>}/>

  
</Routes>
</BrowserRouter>
</>

  )
};
