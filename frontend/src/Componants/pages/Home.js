import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Form,Button} from "react-bootstrap"; 
import ToggleButton from 'react-bootstrap/ToggleButton';

const Home = () => {
    let navigate= useNavigate()
return ( 
<>
<h1>Login</h1>
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
        <Form.Check type="checkbox" label="Admin" />  
        <Form.Check type="checkbox" label="Nurse" />
        
      </Form.Group>
      
      
      <br></br>
      <Button variant="primary"size="lg"  type="submit" onClick={()=>{
    navigate("/SelectDepartment")
   }}>
        Submit
      </Button>

      
    </Form>
       
    </>
)
};
export default Home;