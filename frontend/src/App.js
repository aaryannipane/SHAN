import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./Componants/pages/Home";
import SelectHospital from "./Componants/SelectHospital";
import Protected from "./Componants/Protected";
import SelectDepartment from "./Componants/SelectDepartment";
import ICU from "./Componants/ICU";
import Hamburger from "hamburger-react";
import { useState } from "react";

//import  Provider from "react-redux";
import Identification from "./Componants/ICU/Identification";
import Nurse from "./Componants/pages/Nurse";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "./store/UserSlice";
import { LoginProtected } from "./Componants/LoginProtected";

//  MICUDepartment  MICUBed1
export const App = () => {
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    let isCancelled = false;
    const getUser = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/refresh`,
          {
            withCredentials: true,
          }
        );

        dispatch(setUser(data.user));
      } catch (err) {
        console.log(err);
      }
    };

    getUser();

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <div style={{ position: "fixed", right: "20px" }}>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        {isOpen && <Nurse />}
        <Routes>
          <Route path="/" element={<LoginProtected Component={Home}/>} />
          <Route
            path="/mgmcet/icu/new"
            element={<Protected Component={Identification} />}
          />
          <Route
            path="/hospitals"
            element={<Protected Component={SelectHospital} />}
          />
          <Route
            path="/mgmcet/departments"
            element={<Protected Component={SelectDepartment} />}
          />
          <Route path="/mgmcet/icu" element={<Protected Component={ICU} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
