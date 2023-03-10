import React from 'react'
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add'; 
import { useForm } from "react-hook-form";




const ICU = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)} style={{display:"flex", flexDirection:"column"}}>
   
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
       <input type="text" {...register("name", { required: true })} />
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      </Box>
   </form>
    
    </>
  )
}



export default ICU;