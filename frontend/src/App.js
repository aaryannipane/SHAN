import React from "react";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import { Home } from "./Componants/pages/Home";
import SelectHospital from "./Componants/SelectHospital";
import Protected from "./Componants/Protected";
import SelectDepartment from "./Componants/SelectDepartment";
import MICUDepartment from "./Componants/MICUDepartment";
import MICUBed1 from "./Componants/MICUBed1";


//SelectDepartment  MICUDepartment  MICUBed1
export const App = () => {
  return(
<>
<BrowserRouter>
<Routes>
  <Route  path="/" element={<Protected Component={Home}/>}/>
  <Route  path="/SelectHospital" element={<Protected Component={SelectHospital}/>}/>
  <Route  path="/SelectDepartment" element={<Protected Component={SelectDepartment}/>}/>
  <Route  path="/MICUDepartment" element={<Protected Component={MICUDepartment}/>}/>
  <Route  path="/MICUBed1" element={<Protected Component={MICUBed1}/>}/>
</Routes>
</BrowserRouter>
</>

  )
};
