
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function MICUBed1() {
    let navigate= useNavigate()
  return (
    <>
    <Button variant="secondary" size="sm"  onClick={()=>{
    navigate("/MICUDepartment")
   }}>
       Back
      </Button> 

    

    <Table  striped bordered responsive   >
      <thead>
        <tr>
          <th>Time<Button variant="secondary" size="sm"  onClick={()=>{
    navigate("/Calenderhis")
   }}>
       History
      </Button> </th>
          <th>1:00</th>
          <th>2:00</th>
          <th>3:00</th>
         
          <th>Add +</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Pulse</td>
          <td>213<td><Button as="input" type="reset" value="Reset" /></td></td>
          <td>213<td><Button as="input" type="reset" value="Reset" /></td></td>
          <td>213<td><Button as="input" type="reset" value="Reset" /></td></td>
        
          <td>+pulse</td>
          
        </tr>
        <tr>
          <td>Temp</td>
          <td>213<td><Button as="input" type="reset" value="Reset" /></td></td>
          <td>213<td><Button as="input" type="reset" value="Reset" /></td></td>
          <td>213<td><Button as="input" type="reset" value="Reset" /></td></td>
          
          <td>+Temp</td>
          
        </tr>
        <tr>
          <td>BP low</td>
          <td>213<td><Button as="input" type="reset" value="Reset" /></td></td>
          <td>213<td><Button as="input" type="reset" value="Reset" /></td></td>
          <td>213<td><Button as="input" type="reset" value="Reset" /></td></td>
          
          <td>+BP low</td>
          
        </tr>
      </tbody>
    </Table>










<br>
</br>


    <FloatingLabel controlId="floatingTextarea2" label="Comments" >
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{height: '100px',border:'solid'}}
        />
      </FloatingLabel>

      <br>
</br>

<Button class='A' variant="secondary" size="sm" active  onClick={()=>{
    navigate("/Bed1d")
   }}>
        Submit
      </Button>
      
    </>
  )
}

export default MICUBed1;