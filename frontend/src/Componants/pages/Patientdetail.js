import axios from 'axios';
import {useState,useEffect} from'react'
import { useForm } from "react-hook-form";
import api from "../http/index"


const Patientdetail = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [isOpen, setOpen] = useState(false)

    // function getTodos(){
    //   axios({
    //   method:'p',
    //   url:'http://localhost:5500/api/patient HTTP/1.1'
    // })
    // .then(res=>console.log(res.data))
    // .catch(err=>console.log(err));
    // }
    useEffect(()=>{
        async function posttPatient(){
          const data = await api.post("/api/department/icu")
          console.log(data.data.data);
          posttPatient(data.data.data);
        }
    
        posttPatient()
      },[])
    


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
    </>
  )
}

export default Patientdetail