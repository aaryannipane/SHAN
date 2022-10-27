import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';



function Handover() {
    let navigate= useNavigate()
  return (
    <>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Taken sign:</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
        
      </InputGroup>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Given sign:</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
        
        </InputGroup>
      
      <Button variant="secondary" size="lg" active  onClick={()=>{
    navigate("/Dashboard")
   }}>
        Submit
      </Button>
    </>
  )
}

export default Handover