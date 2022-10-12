import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';



function Ventilatorsupport() {
    let navigate= useNavigate()
  return (
    <>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Non Invansive ventilator:</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
        
      </InputGroup>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Invansive ventilator:</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
        
      </InputGroup>
      <Button variant="secondary" size="lg" active  onClick={()=>{
    navigate("/Ventilatormode")
   }}>
        Submit
      </Button>
    </>
  )
}

export default Ventilatorsupport