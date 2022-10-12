import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Form,Button} from "react-bootstrap"; 

const Admin = () => {
    let navigate= useNavigate()
    return (
        <>
<h1>Admin Page</h1>
<div className="mb-2">
        <Button variant="primary" size="lg" onClick={()=>{
    navigate("/Post")
   }}>
          Add Nurse
        </Button>{' '}
       
      </div>
   
        </>
    );
}
export default Admin;