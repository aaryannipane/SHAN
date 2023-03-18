import React from 'react'
import { useForm } from "react-hook-form";
import "./Styles.css";
import Tabled from './Tabled';
import axios from "axios";
import {useEffect} from "react";



const Identification = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
      try {
        const res = await axios.post("http://localhost:5500/api/patient/identification",data)
        if(res.status === 200){
          console.log(res.data)
        }
      } catch (error) {
        console.error(error)
      }
    };
    // const name = watch("name"); 

    async function  loginHandler(e)
    {
     e.preventDefault();
    //  useEffect(()=>
    //  {
    //   // axios.get("api link").then(res) =>{}//calling axios
      
    //   console.log("called");//res.data-only data will show 
    //   },[]);
    }

  return (
    <>
    <h1>IDENTIFICATION</h1>
    <form onSubmit={handleSubmit(onSubmit)} style={{display:"flex", flexDirection:"column"}}>
      {/* register your input into the hook by invoking the "register" function */}
      
      {/* include validation with required or other standard HTML validation rules */}
      <label>Mr.No</label>
      <input {...register("mrNo", { required: {value:true, message:"Required"}, maxLength:{value:10, message:"Max 10 characters allowed"} })} />
      {console.log(errors)}
      {errors.mrNo && <p>{errors.mrNo.message}</p>}
      <label>Name</label>
      <input type="text" {...register("name", { required: true })} />
      <label>Department</label>
      <input type="text" {...register("Department", { required: true })} />
      <label>Age</label>
      <input {...register("age")} />
      <h4>Sex</h4>
      <label htmlFor="field-male">
                    <input
                        {...register("gender")}
                        type="radio"
                        value="Male"
                        id="field-male"
                    />
                    Rain
                </label>
                <label htmlFor="field-female">
                    <input
                        {...register("gender")}
                        type="radio"
                        value="Female"
                        id="field-female"
                    />
                    Lots of wind
                </label>
                <label htmlFor="field-other">
                    <input
                        {...register("gender")}
                        type="radio"
                        value="Other"
                        id="field-other"
                    />
                    Sunny
                </label>
                <label>Ward</label>
        <select {...register("ward")}>
        <option value="None">none</option>
        <option value="Ward 1">Ward 1</option>
        <option value="Ward 2">Ward 2</option>
      </select>
      <label>BedNumber</label>
      <input type="number" {...register("bedNumber", { required: true })} />
      <label>IpdNumber</label>
      <input type="number" {...register("ipdNumber", { required: true })} />
      <label>DateOfAdmission</label>
      <input type="date" {...register("dateOfAdmission", { required: true })}  min={new Date().toISOString().split('T')[0]}/>

      {/* errors will return when field validation fails  */}
      <label>Category</label>
      <select {...register("category")}>
        <option value="None">none</option>
        <option value="WPaying">Paying</option>
        <option value="Mjpjy">Mjpjy</option>
        <option value="Other">Other</option>
      </select>
      <label>Dr.name</label>
      <input type="text" {...register("Dr.name", { required: true })} />
      <label>Unit</label>
      <input type="text" {...register("Unit", { required: true })} />
      <label>Diagnosis</label>
      <textarea type="text" {...register("Diagnosis", { required: true })} />
      <label>Chief Complaints</label>
      <textarea type="text" {...register("Chief Complaints", { required: true })} />
      <label>History of present illness</label>
      <textarea type="text" {...register("History of present illness", { required: true })} />
      <label>Allergy</label>
      <textarea type="text" {...register("Allergy", { required: true })} />
     
       <Tabled/>

      <button type="submit"  >Submit</button>      
     
      <h1>ASSESMENT</h1>
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
      <h1>SITUTION</h1>
      <label>Oxygen Support</label>
      <select {...register("Oxygen Support")}>
        <option value="None">None</option>
        <option value="Room air">Room air</option>
        <option value="Nasal cannuala">Nasal cannuala</option>
        <option value="Oxygen mask">Oxygen mask</option>
        <option value="Venturi mask">Venturi mask</option>
        <option value="High-flow mask">High-flow mask</option>
        <option value="BPAP mask">BPAP mask</option>
        <option value="other">other</option>
      </select>

      <br></br>
      <input type="text" {...register("value", { required: true })} />
   
      <label>Ventilator Support</label>
      <select {...register("ventilator Support")}>
        <option value="None">None</option>
        <option value="PRVC">PRVC</option>
        <option value="CPAP">CPAP</option>
        <option value="SIMV">SIMV</option>
        <option value="PS">PS</option>
        <option value="PC">PC</option>
        <option value="other">other</option>
      </select>
      <label>FIO2</label>
      <input type="text" {...register("FIO2", { required: true })} />
      <label>PEEP</label>
      <input type="text" {...register("PEEP", { required: true })} />
      <label>RR</label>
      <input type="text" {...register("RR", { required: true })} />
      <label>Tidal volume</label>
      <input type="text" {...register("Tidal volume", { required: true })} />
      
      <label>Continuos Infusion</label>
      <label>Inotrope</label>
      <label>Positive Inotrope</label>
      <select {...register("Positive Inotrope")}>
        <option value="None">None</option>
        <option value="PRVC">Dopmaine</option>
        <option value="CPAP">Dobutamine</option>
        <option value="SIMV">Adrenaline</option>
        <option value="PS">Atropine</option>
        <option value="other">Other</option>
      </select>
      <label>Negative Inotrope</label>
      <select {...register("Negative Inotrope")}>
        <option value="None">None</option>
        <option value="PRVC">Labetalol</option>
        <option value="CPAP">Nitroglycerin</option>
        <option value="SIMV">Sodium nitroprusside</option>
        <option value="PS">Amiosdarone</option>
        <option value="other">Other</option>
      </select>

      <label>Electrolytes correction</label>
      <select {...register("Electrolytes correction")}>
        <option value="None">None</option>
        <option value="PRVC">Sodium chloride 35</option>
        <option value="CPAP">Potassium chloride</option>
        <option value="other">Other</option>
      </select>

      <label>Immunglobin(IVIg)</label>
      <input type="text" {...register("Immunglobin", { required: true })} />
      <label>HAI</label>
      <input type="text" {...register("HAI", { required: true })} />
      <label>Fentanyl</label>
      <input type="text" {...register("Fentanyl", { required: true })} />
      <label>Atracurium</label>
      <input type="text" {...register("Atracurium", { required: true })} />
      <label>Midaozolam</label>
      <input type="text" {...register("Midaozolam", { required: true })} />
      <label>Sodium bicarbonate</label>
      <input type="text" {...register("Sodium bicarbonate", { required: true })} />
      <label>Other</label>
      <input type="text" {...register("Other", { required: true })} />
      
      <label>Nutritional Status</label>
      <label>Oral</label>
      <input type="text" {...register("Oral", { required: true })} />
      <label>Rt Feeding</label>
      <input type="text" {...register("Rt Feeding", { required: true })} />
      <label>NBM</label>
      <input type="text" {...register("NBM", { required: true })} />
      <label>Other</label>
      <input type="text" {...register("Other", { required: true })} />
      

      <label>Fluid restriction</label>
      <input type="text" {...register("Fluid restriction", { required: true })} />

           
      <button type="submit">Submit</button>      

      <h1>BACKGROUND</h1>
      <label>Past medical history</label>
      <input type="text" {...register("Past medical history", { required: true })} />
      <label>Past surgical history</label>
      <input type="text" {...register("Past surgical history", { required: true })} />
      <label>Medication</label>
      <input type="text" {...register("Medication", { required: true })}  />
      
      <h1>Blood products</h1>

      <label>whole blood</label>
      <input type="text" {...register("whole blood", { required: true })} />
      <label>pack red blood cells</label>
      <input type="text" {...register("pack red blood cells", { required: true })} /> 
      <label>fresh frozen plasma</label>
      <input type="text" {...register("fresh frozen plasma", { required: true })} />
      <label>single frozen plasma</label>
      <input type="text" {...register("single frozen plasma", { required: true })} />
      <label>cryoprecipitate antihemophilic factor</label>
      <input type="text" {...register("cryoprecipitate antihemophilic factor", { required: true })} />
    
    
    <h1>RECOMMENDATION</h1>
    <label>Pending medication</label>
      <input type="text" {...register("Pending medication", { required: true })} />
      <label>Pending reports</label>
      <input type="text" {...register("Pending reports", { required: true })} /> 
      <label>Refrences</label>
      <input type="text" {...register("Refrences", { required: true })} />
      <label>Special order</label>
      <input type="text" {...register("Special order", { required: true })} />
      <label>Pending procedures</label>
      <input type="text" {...register("Pending procedures", { required: true })} />
      <label>Other order</label>
      <input type="text" {...register("Other order", { required: true })} />

<button type="submit">Submit</button>      
      
  



      
    </form>
    </>
  )
}

export default Identification;