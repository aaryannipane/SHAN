import React, { useState } from "react";
import { nurseLogin } from "../../http";

export const Home = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <form>
        <input
          type="username"
          placeholder="username"
          onChange={(e) => setUsername(e.currentTarget.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <button
          onClick={async (e) => {
            e.preventDefault();
            const result = await nurseLogin({
              username: username,
              password: password,
            });

            console.log(result);
          }}
        >
          Login
        </button>
      </form>
    </>
  );
};
