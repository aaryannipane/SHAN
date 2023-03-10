import React from "react";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import { Home } from "./Componants/pages/Home";
import SelectHospital from "./Componants/SelectHospital";
import Protected from "./Componants/Protected";
import SelectDepartment from "./Componants/SelectDepartment";
import ICU from "./Componants/ICU";

//import  Provider from "react-redux";
import Identification from "./Componants/ICU/Identification";
import Sitution from "./Componants/ICU/Sitution";
import Assesment from "./Componants/ICU/Assesment";
import Recommendation from "./Componants/ICU/Recommendation";
import Background from "./Componants/ICU/Background";

//  MICUDepartment  MICUBed1
export const App = () => {
  return(
<>
<BrowserRouter>
<Routes>
  <Route  path="/" element={<Protected Component={Home}/>}/>
  <Route  path="/Identification" element={<Identification/>}/>
  <Route  path="/Sitution" element={<Sitution/>}/>
  <Route  path="/Background" element={<Background/>}/>
  <Route  path="/Assesment" element={<Assesment/>}/>
  <Route  path="/Recommendation" element={<Recommendation/>}/>
  <Route  path="/SelectHospital" element={<Protected Component={SelectHospital}/>}/>
  <Route  path="/SelectDepartment" element={<Protected Component={SelectDepartment}/>}/>
  <Route  path="/ICU" element={<Protected Component={ICU}/>}/>

  
</Routes>
</BrowserRouter>
</>

  )
};
