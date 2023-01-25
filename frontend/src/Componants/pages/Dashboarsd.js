
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
 const Dashboarsd =()=> {
  let navigate= useNavigate()
  let data={
    'name':'Nurse'
  }
  return (
   <>
  
   <div className="d-grid gap-2">
      <Button variant="secondary" size="xxl"  onClick={()=>{
    navigate("/Admin")
   }}>
       Admin Login
      </Button>
      <Button variant="secondary" size="xxl"  onClick={()=>{
    navigate("/Nurse")
   }}>
        Nurse Login
      </Button>
      
      
    </div>
   
   </>
  )
};
export default Dashboarsd;