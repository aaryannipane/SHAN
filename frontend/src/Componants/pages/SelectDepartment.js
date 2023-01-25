import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


function SelectDepartment() {
    let navigate= useNavigate()
  return (
    <>
    <h1>Select Department</h1>
    <div className="d-grid gap-2">
      <Button variant="primary" size="lg" onClick={()=>{
    navigate("/MICUDepartment")
   }}>
        MICU
      </Button>
      <Button variant="secondary" size="lg">
        CVTS
      </Button>
      <Button variant="primary" size="lg">
        HDU
      </Button>
      <Button variant="secondary" size="lg">
        SICU
      </Button>
      <Button variant="primary" size="lg">
        Medical Ward
      </Button>
      <Button variant="secondary" size="lg">
        Surgical Ward
      </Button>
      <Button variant="primary" size="lg">
        Emergency Trauma Ward
      </Button>
      <Button variant="secondary" size="lg">
        Ortho Ward
      </Button>
    </div>
    <Button variant="secondary" size="lg"  onClick={()=>{
    navigate("/MICUDepartment")
   }}>
       Submit
      </Button>
    
    <Button variant="secondary" size="lg"  onClick={()=>{
    navigate("/Home")
   }}>
       Back
      </Button>
    </>
  );
}

export default SelectDepartment;