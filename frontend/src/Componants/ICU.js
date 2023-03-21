import React from 'react'
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add'; 
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import {useState,useEffect} from "react";
import axios from "axios";



const ICU = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data); 
  let navigate= useNavigate();
  const [patient,setPatient]=useState("");
  useEffect(() => {
    // Update the document title using the browser API
    axios
    .get("api link")
    .then((res) =>
console.log("",res)
);
  },[]);

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)} style={{display:"flex", flexDirection:"column"}}>
    <input type="text" {...register("name", { required: true })} />
    <Box sx={{ '& > :not(style)': { m: 1 } }}  onClick={()=>{
    navigate("/mgmcet/icu/new")
   }}>
       
      <Fab color="primary" aria-label="add" >
        <AddIcon />
      </Fab>
      </Box>
   </form>
    
    </>
  )
}



export default ICU;