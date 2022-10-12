import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Form,Button} from "react-bootstrap"; 

const Admin = () => {
    let navigate= useNavigate()
    return (
        <>
<h1>Admin Page</h1>
<Form style={{width:"40%",margin:"auto"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <div className="mb-2">
        <Button variant="primary" size="lg" onClick={()=>{
    navigate("/Post")
   }}>
          Add Nurse
        </Button>{' '}
       
      </div>
    </Form>

   
        </>
    );
}
export default Admin;