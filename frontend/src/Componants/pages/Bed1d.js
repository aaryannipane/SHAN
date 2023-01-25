import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Bed1d() {
    let navigate= useNavigate()
  return (
    <>
    <Button variant="secondary" size="sm"  onClick={()=>{
    navigate("/MICUBed1")
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
         
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Saline(ml)</td>
          <td>213<td><Button as="input" type="reset" value="Reset" /></td></td>
          <td>213<td><Button as="input" type="reset" value="Reset" /></td></td>
          <td>213<td><Button as="input" type="reset" value="Reset" /></td></td>
        
          <td>860</td>
          
        </tr>
        <tr>
          <td>Water(ml)</td>
          <td>213<td><Button as="input" type="reset" value="Reset" /></td></td>
          <td>213<td><Button as="input" type="reset" value="Reset" /></td></td>
          <td>213<td><Button as="input" type="reset" value="Reset" /></td></td>
          
          <td>880</td>
          
        </tr>
        <tr>
        <td></td>
        <td></td>
        <td>Total in</td>
        <td>1320</td>
        </tr>

      </tbody>
    </Table>
    <Table  striped bordered responsive   >
      <thead>
        <tr>
          <th>Time</th>
          <th>1:00</th>
          <th>2:00</th>
          <th>3:00</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>pee(ml)</td>
          <td>213<td><Button as="input" type="reset" value="Reset" /></td></td>
          <td>213<td><Button as="input" type="reset" value="Reset" /></td></td>
          <td>213<td><Button as="input" type="reset" value="Reset" /></td></td>
          <td>860</td>
          
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
    navigate("/Vitalsigns")
   }}>
        Submit
      </Button>
      
    </>
  )
}

export default Bed1d;