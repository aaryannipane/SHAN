import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


function SelectDepartment() {
    let navigate= useNavigate()
  return (
    <>
    <h1>Select Department</h1>
    <div className="d-grid gap-2">
      <Button variant="primary" size="lg" onClick={()=>{
    navigate("/ICU")
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
    navigate("/SelectHospital")
   }}>
       Back
      </Button>
    </>
  );
}

export default SelectDepartment;