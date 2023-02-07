import React, { useState } from "react";
import { nurseLogin } from "../../http";
import {useNavigate} from "react-router-dom";
export const Home = () => {
  const navigate  = useNavigate()

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
    

  // function userHandler(e){
  // let item=e.target.value;
  // if(item.length<3){
  //   setUsername
  // }
  // }
  return (
    <>
      <form>
        <input
          required
          type="email"
          placeholder="username"
          onChange={(e) => setUsername(e.currentTarget.value)}
        />
        <input
          required
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <button
        type="submit"
          onClick={async (e) => {
            e.preventDefault();
            const result = await nurseLogin({
              username: username,
              password: password,
            });

            navigate("/new")
            localStorage.setItem("auth",JSON.stringify(result));
          //  console.log(result);
          }}
        >
          Login
        </button>
      </form>
    </>
  );
};
