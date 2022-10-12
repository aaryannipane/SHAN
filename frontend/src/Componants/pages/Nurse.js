import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Form,Button} from "react-bootstrap"; 

export default function Nurse() {
  
  let navigate= useNavigate()
    return (<>
    <h1>Nurse Login</h1>
    <Form style={{width:"40%",margin:"auto"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" placeholder="Enter Number" />
        <Form.Text className="text-muted">
          We'll never share your Phone Number with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary"size="lg"  type="submit" onClick={()=>{
    navigate("/SelectHospital")
   }}>
        Submit
      </Button>

      <Button variant="secondary" size="lg"  onClick={()=>{
    navigate("/Dashboard")
   }}>
       Back
      </Button>
    </Form>
       
    </>
  );
}
