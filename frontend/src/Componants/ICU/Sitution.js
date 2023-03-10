import React from 'react'
import { useForm } from "react-hook-form";
import "./Styles.css";

const Sitution = () => {
   
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  return (
    <> 
    <h1>SITUTION</h1>
    <form onSubmit={handleSubmit(onSubmit)} style={{display:"flex", flexDirection:"column"}}>
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
    </form>
    </>
  )
}

export default Sitution
