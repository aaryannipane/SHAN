import React, { useState } from "react";
import { nurseLogin } from "../../http";
import {useNavigate} from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Home = () => {
  const navigate  = useNavigate()

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernamerr, setUsernameerr] = useState("");
  const [passworderr, setPassworderr] = useState("");
    
  async function  loginHandler(e)
   {
    e.preventDefault();
    
    if(username===""||password==="")
    {
      return alert("type correct values")
    }
      
      const result = await nurseLogin({
        username: username,
        password: password,
      });
      console.log(result);
      navigate("/SelectHospital")
       
   }
  

  function userHandler(e){
  let item=e.target.value;
  if(item.length<3){
    setUsernameerr(true)
  }
  else{
    setUsernameerr(false)
  }
setUsername(item)
}
  function passHandler(e){
    let item=e.target.value;
    if(item.length<3){
      setPassworderr(true)
    }
    else{
      setPassworderr(false)
    }
    setPassword(item)
    }
  return (
    <>
    <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control required
          type="email"
          placeholder="username"
          onChange={userHandler} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group> {usernamerr?<span>User Not Valid</span>:""}
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control required
          type="password"
          placeholder="password"
          onChange={passHandler}/>
      </Form.Group>{passworderr?<span>Password Not Valid</span>:""}
     
      
        <button
        type="submit"
          onClick={loginHandler}
        >
          Login
        </button>
      </Form>
    </>
  );
};
