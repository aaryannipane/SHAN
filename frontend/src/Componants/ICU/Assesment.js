import React from 'react'
import { useState } from 'react'
import { useForm } from "react-hook-form";
import "./Table.css"


const data = [
  {
   
    DOI: 'Vein Flow',
    Size: '',
    Site: '',
    DOD: '',
    DOR: '',
    
  },
  {
 
    DOI: 'Vein Flow',
    Size: '',
    Site: '',
    DOD: '',
    DOR: '',
  },
  {
   
    DOI: 'Vein Flow',
    Size: '',
    Site: '',
    DOD: '',
    DOR: '',
  },
]

const Assesment = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

//tables 


  return (
    <>
     <h1>ASSESMENT</h1>
    
    <form onSubmit={handleSubmit(onSubmit)} style={{display:"flex", flexDirection:"column"}}>
    <h1>Vital signs</h1>
   <h2 >SITUTION</h2>
      <input type="text" {...register("Temperature", { required: true })} />
      <label>Pulse</label>
      <input type="text" {...register("Pulse", { required: true })} /> 
      <label>Respiration</label>
      <input type="text" {...register("Respiration", { required: true })} />
      <label>Blood pressure</label>
      <input type="text" {...register("Blood pressure", { required: true })} />
      
      <label>Other Parameters</label>
      <label>ETCO2</label>
      <input type="text" {...register("ETCO2", { required: true })} />
      <label>CVP</label>
      <input type="text" {...register("CVP", { required: true })} />
      <label>ABP</label>
      <input type="text" {...register("ABP", { required: true })} />
       
      <label>ECG</label>
      <select {...register("ECG")}>
        <option value="None">None</option>
        <option value="SR">SR</option>
        <option value="SB">SB</option>
        <option value="ST">ST</option>
      </select>


      <h1>Or</h1>
       
      <label>Arrhythmia</label>
      <select {...register("Arrhythmia")}>
        <option value="None">None</option>
        <option value="SVT">SR</option>
        <option value="AF">AF</option>
        <option value="Vtech">Vtech</option>
        <option value="VF">VF</option>
      </select>

    

      <label>Intake</label>
      <input type="text" {...register("Intake", { required: true })} />
      <label>Output</label>
      <input type="text" {...register("Output", { required: true })} />


      <h1>Investigations</h1>
      <label>Pathology</label>
      <label>Random blood sugar</label>
      <input type="text" {...register("Random blood sugar", { required: true })} />
      <label>Hemoglobin</label>
      <input type="text" {...register("Hemoglobin", { required: true })} />
      <label>WBC</label>
      <input type="text" {...register("WBC", { required: true })} />
      <label>RBC</label>
      <input type="text" {...register("RBC", { required: true })} />
      <label>Platelet count</label>
      <input type="text" {...register("Platelet count", { required: true })} />
      <label>Creatine</label>
      <input type="text" {...register("Creatine", { required: true })} />
      <label>Sodium Potassium</label>
      <input type="text" {...register("Sodium Potassium", { required: true })} />
      <label>Chloride</label>
      <input type="text" {...register("Chloride", { required: true })} />
      <label>ABG</label>
      <input type="text" {...register("ABG", { required: true })} />
      <label>HHH</label>
      <input type="text" {...register("HHH", { required: true })} />
      <label>LFT</label>
      <input type="text" {...register("LFT", { required: true })} />
      <label>Coagulation Profile</label>
      <input type="text" {...register("Coagulation Profile", { required: true })} />
      <label>Other</label>
      <input type="text" {...register("Other", { required: true })} />
      
      <h1>Radiology</h1>
      <label>X-Ray</label>
      <input type="text" {...register("X-Ray", { required: true })} />
      <label>Ct-scan</label>
      <input type="text" {...register("Ct-scan", { required: true })} />
      <label>MRI</label>
      <input type="text" {...register("MRI", { required: true })} />
      <label>Other</label>
      <input type="text" {...register("Other", { required: true })} />
      

      <button type="submit">Submit</button>      
    </form>
    



</>
  )
}

export default Assesment