import React from 'react'
import { useForm } from "react-hook-form";
import { useState } from 'react'
import Tabled from "./Tabled";


const data = [
  {
    employeeId: '01',
    name: 'John Doe',
    email: 'johndoe@email.com',
    position: 'Frontend Developer',
  },
  {
    employeeId: '02',
    name: 'Sara',
    email: 'sara@email.com',
    position: 'HR Executive',
  },
  {
    employeeId: '03',
    name: 'Mike',
    email: 'mike@email.com',
    position: 'Backend Developer',
  },
]

const Background = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);const [employeeData, setEmployeeData] = useState(data)

    const onChangeInput = (e, employeeId) => {
      const { name, value } = e.target
  
      const editData = employeeData.map((item) =>
        item.employeeId === employeeId && name ? { ...item, [name]: value } : item
      )
  
      setEmployeeData(editData)
    }

    //tables

  return (
    <>
    <h1>BACKGROUND</h1>
    <form onSubmit={handleSubmit(onSubmit)} style={{display:"flex", flexDirection:"column"}}>
   
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
     
      
  

<button type="submit">Submit</button> 
</form>

</>
  )
}

export default Background