import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


function MICUDepartment() {
    let navigate= useNavigate()
  return (
    <>
    <h1>Select MICU Department</h1>
    <div className="d-grid gap-2">
      <Button variant="primary" size="lg" onClick={()=>{
    navigate("/MICUBed1")
   }}>
        Bed 1
      </Button>
      <Button variant="secondary" size="lg">
        Bed 2
      </Button>
      <Button variant="primary" size="lg">
      Bed 3
      </Button>
      <Button variant="secondary" size="lg">
      Bed 4
      </Button>
      <Button variant="primary" size="lg">
      Bed 5
      </Button>
      <Button variant="secondary" size="lg">
      Bed 6
      </Button>
      <Button variant="primary" size="lg">
      Bed 7
      </Button>
      <Button variant="secondary" size="lg">
      Bed 8
      </Button>
    </div>
    <Button variant="secondary" size="lg"  onClick={()=>{
    navigate("/SelectDepartment")
   }}>
       Back
      </Button>
    </>
  );
}

export default MICUDepartment;