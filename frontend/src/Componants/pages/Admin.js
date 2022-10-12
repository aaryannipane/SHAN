import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { adminLogin } from "../../http";

const Admin = () => {
<<<<<<< HEAD
  const [phone, setphone] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
=======
    let navigate= useNavigate()
    return (
        <>
<h1>Admin Page</h1>
<Form style={{width:"40%",margin:"auto"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Admin Phone Number</Form.Label>
        <Form.Control type="Phone Number" placeholder="Phone Number" />
        <Form.Text className="text-muted">
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
    
          Login
        </Button>{' '}
        <Button variant="secondary" size="lg"  onClick={()=>{
    navigate("/Dashboard")
   }}>
       Back
      </Button>
      </div>
    </Form>
>>>>>>> aff2e22 (frontend update)

  const handleSubmit = async () => {
    const data = { phone: phone, password: password };
    const response = await adminLogin(data);

    console.log(response);
  };

  return (
    <>
      <h1>Admin Page</h1>
      <Form style={{ width: "41%", margin: "auto" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => {
              setphone(e.target.value);
            }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <div className="mb-2">
          <Button variant="primary" size="lg" onClick={handleSubmit}>
            Add Nurse
          </Button>
        </div>
      </Form>
    </>
  );
};
export default Admin;
