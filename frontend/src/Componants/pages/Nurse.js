import {useSelector} from "react-redux";
import { nurseLogout } from "../../http";
import Navbar from '../../Componants/Navbar'

const Nurse = ({onClose}) => {

    const data1 = useSelector((state) => {
      return  state.user;
   })

   const logout = async ()=>{
    
    const result = await nurseLogout();
    console.log(result);
    console.log("logout");
   }

  return (
  
    <div style={{position:"fixed",top:"0",background:"grey",height:"100vh",width:"100%"}}>
        <Navbar />
      <div style={{display:"flex",justifyContent:"space-between"}}>
    <h1 style={{fontFamily:"Bold"}}>Nurse</h1>
    <button onClick={logout}>Log Out</button>
      </div>
      <h1>Nurse Name:</h1>
      <h2>{data1.user.username}</h2>
    </div>
  )
}

export default Nurse;