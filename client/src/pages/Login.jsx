import React from 'react'
import '../pages/Login.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import loginImg from '../images/img.jpg'
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


const Login = () => {
     const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
    const navigate = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch("http://localhost:3000/api/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email,password})
        })
        const data = await response.json();

        if(response.ok){
            localStorage.setItem("token",data.token);
            alert("Sign In Successful!")
            navigate("/");
        } else{
            alert("Invalid Credentials");
        }
      
   };


  return (
     <div className="signup-container">
      <div className="signup-form">
       
        <h1 className="title">Log In</h1>

        <form className="form" onSubmit={handleSubmit}>
        
          <input
            type="email"
            placeholder="Email Address"
            className="input-field"
            required value={email} onChange={(e)=>setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            required value={password} onChange={(e)=>setPassword(e.target.value)}
          />
          <button type="submit" className="submit-btn">Log In</button>
        </form>

        <div className="login-link">
          <p>
            Don't have an account yet? <Link to="/register" className="link">Register</Link>
          </p>
        </div>

        <div className="signup-options">
          <button className="google-btn">
            <FaGoogle />
            Continue with Google
          </button>
          <button className="apple-btn">
            <FaApple/>
            Continue with Apple
          </button>
          <button className="facebook-btn">
            <FaFacebook/>
            Continue with Facebook
          </button>
        </div>
      </div>

      <div className="image-container">
        <img src={loginImg} alt="Project Image" className="project-image" />
      </div>
    </div>
  )
}

export default Login
