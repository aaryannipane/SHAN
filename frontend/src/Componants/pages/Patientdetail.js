import axios from 'axios';
import {useState,useEffect} from'react'
import { useForm } from "react-hook-form";
import api from "../../http/index.js"
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
import React, { useCallback } from "react";


const Patientdetail = () => {
    const { register, handleSubmit,reset, watch, formState: { errors } } = useForm();
    const [isOpen, setOpen] = useState(false)
    let navigate= useNavigate()
    const {id, mrNo} = useParams();

    //for reseting 
    const resetAsyncForm = useCallback(async () => {
      const result = await fetch('/api/patient'); // result: { firstName: 'test', lastName: 'test2' }
      reset(result); // asynchronously reset your form values
    }, [reset]);
    
    useEffect(() => {
      resetAsyncForm()
    }, [resetAsyncForm])




    const [patientD, setPatientD] = useState('');


    useEffect(()=>{
      async function getPatient(){
        try{
          const data = await api.get(`/api/patient/${id}/${mrNo}`,)
          const patientData = data.data.patient
          console.log(patientData);

        } catch (err){
          console.log(err.response.data.message)
        }
      }
  
      getPatient()
    },[])
    // function getPatient(){
    //   axios({
    //   method:'get',
    //   url:'/api/patient'
      
    // })
    // .then(res=>{
    //    console.log(res.data.data)
    //    setPatientD(res.data);
    //   }
    //   getPatient();
    // )

    // .catch(err=>console.log(err));
    // }
   


  return (
    <>
     <form  style={{display:"flex", flexDirection:"column"}}>
     <label>mrNo</label>
      <input {...register("mrNo")} />
      <label>Name</label>
      <input {...register("name")} />
      <label>Department</label>
      <input {...register("department")} />
      
     </form>
     <Button >get res</Button>
     <Button variant="secondary" size="lg"  onClick={()=>{
    navigate("/mgmcet/icu")
   }}>
       Back
      </Button>
    </>
  )
}

export default Patientdetail