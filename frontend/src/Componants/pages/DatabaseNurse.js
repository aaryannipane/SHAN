import Table from 'react-bootstrap/Table';
import {Form,Button} from "react-bootstrap"; 
import { useNavigate } from 'react-router-dom';
function DatabaseNurse() {
  let navigate= useNavigate()
  return (
    <>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
      <Button variant="secondary" size="lg"  onClick={()=>{
    navigate("/Post")
   }}>
       Add Nurse
      </Button>
      <Button variant="secondary" size="lg"  onClick={()=>{
    navigate("/Dashboard")
   }}>
       Back
      </Button>
    </Table>
    
    </>
  );
}

export default DatabaseNurse;