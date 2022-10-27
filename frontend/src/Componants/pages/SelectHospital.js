import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
function SelectHospital() {
    let navigate= useNavigate()
  return (
    <>
    <h1>Select Hospital</h1>
    <div className="d-grid gap-2">
      <Button variant="primary" size="lg"  onClick={()=>{
    navigate("/SelectDepartment")
   }}>
       MGM Hospital                 
      </Button>
    </div>
    <Button variant="secondary" size="lg"  onClick={()=>{
    navigate("/Nurse")
   }}>
       Back
      </Button>
    </>
  );
}

export default SelectHospital;