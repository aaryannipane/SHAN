
import {useRef, useState,useEffect, useContext } from 'react';
import { useNavigate, useRouteLoaderData } from 'react-router-dom';
import {Form,Button} from "react-bootstrap"; 
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthProvider';
import { setCredentials } from '../../features/auth/authSlice';
import { useLoginMutation } from '../../app/api/authApiSlice';
import { useDispatch } from 'react-redux';

const LOGIN_URL= '/auth';

const Home = () => {
  const {setAuth}= useContext(AuthContext);
  let navigate= useNavigate()
    // let navigate= useNavigate()
    // const [Emailid,setEmailid]=useState('');
    // const [Password,setPassword]=useState('');
    // const [error,setError]=useState(false);
    const userRef=useRef();
    const errRef=useRef();
    const[user,setUser]=useState('');
    const[pwd,setPwd]=useState('');
    const[errMsg,setErrMsg]=useState('');
    //const[success,setSuccess]=useState(false);
    const [login, {isLoading }]=useLoginMutation()
    const dispatch=useDispatch()


    useEffect(()=>{
      userRef.current.focus();
    },[])
    useEffect(() =>{
      setErrMsg('');
    }, [user,pwd])


    

//     const handleSubmit=(e)=>{
//   e.preventDefault();
//   if(Emailid.length==0||Password.length==0){
//     setError(true)
//   }
//   console.log(Emailid,Password)
// }
const handleSubmit=async(e)=>{
  e.preventDefault();
 // console.log(user,pwd);
 try{
  const userData = await loggin ({user ,pwd }).unwrap()
//const response = await axios.post(LOGIN_URL,
  // JSON.stringify({user,pwd}),
  // {
  //   header:{'context-type' :'application/json'},
  //   withCredentials:true
  // }
  // );
//  console.log(JSON.stringify(response?.data));
//  const accessToken =response?.data?.accessToken;
//  const roles=response?.data?.roles;
//  setAuth({user,pwd,roles,accessToken});

dispatch (setCredentials({...useRouteLoaderData,user}))
  setUser('');
  setPwd('');
  navigate('./SelectDepartment');
 }
 catch(err){
  if(!err?.response){
    setErrMsg('No server Response');
  }
  else if(err.response?.status ===400){
    setErrMsg('Missing UserName or Password');
  }
  else if(err.response?.status===401){
    setErrMsg('Unauthorized');
  }
  else{
    setErrMsg('Login Failed');
  }
  errRef.current.focus();
 }
}

const handleUserInput = (e) => setEmailid(e.target.value)

const handlePwdInput = (e) => setPwd(e.target.value)

const content =isLoading?<h1>Loading...</h1>:(
  
  <section className='login'>
   <p ref={errRef} classname={errMsg ? "errmsg":
   "offscreen"} aria-live="assertive">{errMsg}</p>
   <h1>
     Sign In
   </h1>
   <form onSubmit={handleSubmit}>
     <label htmlFor="EmailId">EmailId:</label>
     <input
     type="text"
     id="EmailId"
     ref={userRef}
     autoComplete="off"
     onChange={handleUserInput}
     value={user}
     required
     />
     <label htmlFor="password">Password</label>
     <input
     type="password"
     id="password"
     onChange={handlePwdInput}
     value={pwd}
     required
     />
     <button onClick={()=>{
   navigate("/MICUDepartment")
  }}>Submit</button>
   </form>
  </section>
)
return content
   
{/* {success ? (
  <section>
  <h1>you are logged in!
  </h1>
  <br />
  <p>
  <a href=="#">Go to Home</a></p>
</section>
) */}

 
}
/* <h1>Login</h1>
    <Form style={{width:"40%",margin:"auto"}} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="number" placeholder="Enter Email Id" onChange={e=>setEmailid(e.target.value)}/>
      {error&&Emailid.length<=0? 
      <Form.Label>emailid cant be empty</Form.Label>:""}
       
        <Form.Text className="text-muted">
          We'll never share your Email Id with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Control type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
      {error&&Password.length<=0? <Form.Label>password cant be empty</Form.Label>:""}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Admin" />  
        <Form.Check type="checkbox" label="Nurse" />
        
      </Form.Group>
      
      
      <br></br>
      <Button variant="primary"size="lg"  type="submit" onClick={()=>{
    navigate("/SelectDepartment")
   }}>
        Submit
      </Button>

      
    </Form> */
export default Home;