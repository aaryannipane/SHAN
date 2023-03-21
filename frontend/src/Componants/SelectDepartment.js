import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import {useState} from'react'

import Hamburger from 'hamburger-react'


function SelectDepartment() {
    let navigate= useNavigate()
    const [isOpen, setOpen] = useState(false)

  return (
    <>
    <h1 style={{fontFamily:"Bold"}}><Hamburger toggled={isOpen} toggle={setOpen} />Select Department</h1>
    <div className="d-grid gap-2">
      <Button variant="primary" size="lg" onClick={()=>{
    navigate("/mgmcet/icu")
   }}>
        ICU
      </Button>
      <Button variant="secondary" size="lg" onClick={()=>{
    navigate("/ICU")
   }}>
        ICU
      </Button>
      <Button variant="primary" size="lg">
        ICU
      </Button>
      
    </div>
    
    
    <Button variant="secondary" size="lg"  onClick={()=>{
    navigate("")
   }}>
       Back
      </Button>
    </>
  );
}

export default SelectDepartment;