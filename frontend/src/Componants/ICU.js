import React, { useEffect, useState } from 'react'
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add'; 
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import api from "../http/index"




const ICU = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data); 
  let navigate= useNavigate()
  const [patients, setPatients] = useState([])

  useEffect(()=>{
    async function getPatient(){
      const data = await api.get("/api/department/icu")
      console.log(data.data.data);
      setPatients(data.data.data);
    }

    getPatient()
  },[])

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)} style={{display:"flex", flexDirection:"column"}}>
   
    {/* <Box sx={{ '& > :not(style)': { m: 1 } }} 
     onClick={()=>{
    navigate("/mgmcet/icu/new")
   }}>
       
      <Fab color="primary" aria-label="add" >
        <AddIcon />
      </Fab>
      </Box> */}
      <input type="text" {...register("name", { required: true })} />
      <button  style={{width:"50px",fontSize: "30px",backgroundColor: "pink"}} onClick={()=>{
    navigate("/mgmcet/icu/new")
   }}>+</button>

      {patients.map((patient)=>{
        return <button style={{fontSize: "30px",backgroundColor: "pink"}}>{patient.mrNo} {patient.identification.name}</button>
      })}
   </form>
    
    </>
  )
}



export default ICU;