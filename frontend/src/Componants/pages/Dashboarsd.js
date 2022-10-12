
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
 const Dashboarsd =()=> {
  let navigate= useNavigate()
  let data={
    'name':'Nurse'
  }
  return (
   <>
   <h1>Welcome to SHAN-APP</h1>
   <div className="mb-2">
        <Button variant="primary" size="lg" onClick={()=>{
    navigate("/Admin")
   }}>
          Admin
        </Button>{' '}
        <Button variant="secondary" size="lg" onClick={()=>{
    navigate("/Nurse")
   }}>
          Nurse
        </Button>
      </div>
   
   </>
  )
};
export default Dashboarsd;