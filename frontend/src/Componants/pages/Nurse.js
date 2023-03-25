import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
// import "./Styles.css";
import Hamburger from 'hamburger-react'
import {useState} from'react'


const Nurse = ({onClose}) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [isOpen, setOpen] = useState(false)

  return (
    <div style={{position:"fixed",top:"0",background:"black",height:"100vh",width:"100%"}}>
      <div style={{display:"flex",justifyContent:"space-between"}}>

    <h1 style={{fontFamily:"Bold"}}>IDENTIFICATION</h1>
    <button onClick={onClose}>X</button>
      </div>
    <form  style={{display:"flex", flexDirection:"column"}}>
      {/* register your input into the hook by invoking the "register" function */}
      
      {/* include validation with required or other standard HTML validation rules */}
     
      <label>*MR.No</label>
      <input type="text" {...register("Mr.no")} />
      <label>*Name</label>
      <input type="text" {...register("name")} />
      <label>*Department</label>
      <input type="text" {...register("department")} />
    

    <button></button>
    </form>
    </div>
  )
}

export default Nurse;