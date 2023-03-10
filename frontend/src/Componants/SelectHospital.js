
import { useNavigate } from 'react-router-dom';
function SelectHospital() {
    let navigate= useNavigate()
  return (
    <>
    <h1>Select Hospital</h1>
    <div className="d-grid gap-2">
      <button   onClick={()=>{
    navigate("/SelectDepartment")
   }}>
       MGM Hospital                 
      </button>
    </div>
    <button variant="secondary" size="lg"  onClick={()=>{
    navigate("/")
   }}>
       Back
      </button>
    </>
  );
}

export default SelectHospital;