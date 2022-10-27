import React from 'react';
import './App.css';
import { BrowserRouter,Navigate ,Route, Routes } from "react-router-dom";
import Home from './Componants/pages/Home';
import Admin from './Componants/pages/Admin';
import Navbar from "./Componants/pages/Navbar";
import Post from "./Componants/pages/Post";
import Dashboarsd from "./Componants/pages/Dashboarsd";
import DatabaseNurse from "./Componants/pages/DatabaseNurse";
import Nurse from "./Componants/pages/Nurse";
import SelectHospital from "./Componants/pages/SelectHospital";
import SelectDepartment from "./Componants/pages/SelectDepartment";
import MICUDepartment from "./Componants/pages/MICUDepartment";
import MICUBed1 from "./Componants/pages/MICUBed1";
import Vitalsigns from "./Componants/pages/Vitalsigns";
import Rhythm from "./Componants/pages/Rhythm";
import Oxygensupport from "./Componants/pages/Oxygensupport";
import Ventilatorsupport from "./Componants/pages/Ventilatorsupport";
import Ventilatormode from "./Componants/pages/Ventilatormode";
import InvansiveLines from "./Componants/pages/InvansiveLines";
import Drains from "./Componants/pages/Drains";
import Emergencymedication from "./Componants/pages/Emergencymedication";
import Bloodproductstransfusion from "./Componants/pages/Bloodproductstransfusion";
import Infusionpump from "./Componants/pages/Infusionpump";
import Investigations from "./Componants/pages/Investigations";
import Scales from "./Componants/pages/Scales";
import Nursingcareplanfile from "./Componants/pages/Nursingcareplanfile";
import Handover from "./Componants/pages/Handover";




function App() {
  let isLogged =true
  let data={
      'st':'user not logged   in'
  }

  return (
    <>
    <BrowserRouter>
        <Navbar />
            <Routes>
                
                    <Route path="/" element={<Home />}   />
                    <Route path="/Admin" element={<Admin/>}   />
                    <Route path="/Post" element={<Post/>}   />
                    <Route path="*" element={<h1>Error 404 pages not found!!</h1>}  />
                    <Route path="/dashboard" element={isLogged ?<Dashboarsd /> :<Navigate  to="/loginpage" replace state={data}/>}   />
                    <Route path="/Nurse" element={<Nurse />}   />
                    <Route path="/DatabaseNurse" element={<DatabaseNurse />}   />
                    <Route path="/SelectHospital" element={<SelectHospital />}   />
                    <Route path="/SelectDepartment" element={<SelectDepartment />}   />
                    <Route path="/MICUDepartment" element={<MICUDepartment />}   />
                    <Route path="/MICUBed1" element={<MICUBed1 />}   />
                    <Route path="/Vitalsigns" element={<Vitalsigns />}   />
                    <Route path="/Rhythm" element={<Rhythm />}   />
                    <Route path="/Oxygensupport" element={<Oxygensupport />}   />
                    <Route path="/Ventilatormode" element={<Ventilatormode />}   />
                    <Route path="/Ventilatorsupport" element={<Ventilatorsupport />}   />
                    <Route path="/InvansiveLines" element={<InvansiveLines />}   />
                    <Route path="/Drains" element={<Drains />}   />
                    <Route path="/Emergencymedication" element={<Emergencymedication />}   />
                    <Route path="/Bloodproductstransfusion" element={<Bloodproductstransfusion />}   />
                    <Route path="/Infusionpump" element={<Infusionpump />}   />
                    <Route path="/Investigations" element={<Investigations />}   />
                    <Route path="/Scales" element={<Scales />}   />
                    <Route path="/Nursingcareplanfile" element={<Nursingcareplanfile />}   />
                    <Route path="/Handover" element={<Handover />}   />

                                    
             </Routes>
             </BrowserRouter>
       </>
  );
}

export default App