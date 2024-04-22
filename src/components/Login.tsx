import React from "react";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
    console.log(username);
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    console.log(password);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("submitted");
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="username"> Username:</label>
        <input type="text" id="username" onChange={onChangeUsername} />
        <label htmlFor="password"> Password:</label>
        <input type="password" id="password" onChange={onChangePassword} />
      </form>
    </>
  );
};

export default Login;