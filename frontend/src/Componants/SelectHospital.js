import Hamburger from 'hamburger-react'
import {useState} from'react'
import { useNavigate} from 'react-router-dom';
function SelectHospital() {
    let navigate= useNavigate()
    const [isOpen, setOpen] = useState(false)

  return (
    <>
    <h1 style={{fontFamily:"Bold"}}> <Hamburger toggled={isOpen} toggle={setOpen} />Select Hospital</h1>
   
    <div className="d-grid gap-2">
      <button   onClick={()=>{
    navigate("/mgmcet/departments")
   }}>
       MGM Hospital                 
      </button>
    </div>
    <button variant="secondary" size="lg"  onClick={()=>{
    navigate("")
   }}>
       Back
      </button>
    </>
  );
}

export default SelectHospital;