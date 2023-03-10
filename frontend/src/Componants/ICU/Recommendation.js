import React from 'react'
import { useForm } from "react-hook-form";
const Recommendation = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

  return (
    <>
    <h1>RECOMMENDATION</h1>
    <form onSubmit={handleSubmit(onSubmit)} style={{display:"flex", flexDirection:"column"}}>
       
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

export default Recommendation