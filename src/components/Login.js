import React from "react";

import { useState} from 'react';
import { useNavigate } from "react-router-dom";


const Login = () => {
  let navigate = useNavigate()
  const [userlogin, setUserLogin] = useState('');
  const [passLogin, setPassLogin] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // cek user dan password
    console.log(userlogin);
    console.log(passLogin);

    navigate('/dashboard')

  }

  return (
    <section className="login">
        <h5>Log in into your account</h5>
        <form className="form" onSubmit={handleLogin}>
            <p>Username</p>
            <input type="text" placeholder="Enter Username" id="username" onChange={(e) => setUserLogin(e)}/>
            <p>Password</p>
            <input type="password" placeholder="Enter Password" id="password" onChange={(e) => setPassLogin(e)}/>
            <button type="submit">Log in</button>
        </form>
        <p>Dont have an account ? <span><a href="/regis">Sign Up</a></span> </p>
    </section>
  );
};

export default Login;
