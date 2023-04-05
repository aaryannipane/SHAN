import axios from 'axios';
import {useState,useEffect} from'react'
import { useForm } from "react-hook-form";
import api, { addPatientIdentification } from "../../http/index.js"
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
import React, { useCallback } from "react";
import {useSelector} from "react-redux";



const Patientdetail = () => {
    const {id, mrNo} = useParams();
    const [patientD, setPatientD] = useState({});
    const [edit, setEdit] = useState(false)
    let navigate= useNavigate()

    useEffect(() => {
      async function getPatient() {
        try {
          const data = await api.get(`/api/patient/${id}/${mrNo}`);
          const patientData = data.data.patient;
          setPatientD(patientData);
        } catch (err) {
          console.log(err.response.data.message);
        }
      }
      getPatient();
    }, []);

    
  return (
   <>
   <h1 style={{ fontFamily: "Bold",background:"pink" }}>Patient Details</h1>

   <label style={{fontSize:"30px"}}>MrNo</label>
   <input type="text" value={patientD.mrNo} style={{color:"white",fontSize:"20px"}} disabled={(edit)? false:true}/>


   <label style={{fontSize:"30px"}}>Name</label>
   <input type="text" value={patientD.identification?.name} style={{color:"white",fontSize:"20px"}} disabled={(edit)? false:true}/>

   <label style={{fontSize:"30px"}}>Age</label>
   <input type="text" value={patientD.identification?.age} style={{color:"white",fontSize:"20px"}} disabled={(edit)? false:true}/>

   <label style={{fontSize:"30px"}}>Date Of Addmision</label>
   <input type="text" value={patientD.updatedAt} style={{color:"white",fontSize:"20px"}} disabled={(edit)? false:true}/>

   <label style={{fontSize:"30px"}}>Department</label>
   <input type="text" value={patientD.department} style={{color:"white",fontSize:"20px"}} disabled={(edit)? false:true}/>

   <label style={{fontSize:"30px"}}>Ipd N</label>
   <input type="text" value={patientD.identification?.ipdNo} style={{color:"white",fontSize:"20px"}} disabled={(edit)? false:true}/>

   <label style={{fontSize:"30px"}}>Bed No</label>
   <input type="text" value={patientD.identification?.bedNo} style={{color:"white",fontSize:"20px"}} disabled={(edit)? false:true}/>

   <label style={{fontSize:"30px"}}>Sex</label>
   <input type="text" value={patientD.identification?.sex} style={{color:"white",fontSize:"20px"}} disabled={(edit)? false:true}/>

   <Button variant="secondary" size="lg"  onClick={()=>{
    navigate("/mgmcet/icu")
   }}>
       Back
      </Button>
   </>
  )
}

export default Patientdetail