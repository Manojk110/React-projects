import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "../styles/Login.css"
import PathConstants from '../routes/pathConstants';
export default function Cart() {
  const[mail,setMail]=useState("");
  const[pass,setPass]=useState("");
  const[msg,setMsg]=useState("");

  const handleMail=(e)=>{
    setMail(e.target.value);
  }
  const handlePass=(e)=>{
    setPass(e.target.value);
  }
  const handleAuth=(e)=>{
    if(!mail || !pass){
      setMsg("Both fields required")
    }
    else if(!/\S+@\S+\.\S+/.test(mail)){
      setMsg("Invalid Format");
    }
    else if(mail==='mk9106262@gmail.com' && pass==='Manoj123'){
      setMsg("Login Success")
    }
    else{
      setMsg("Login Failed")
    }
  }


  return (
    <div className='cart-container'>
      <center><h1>Login Here</h1></center>
      <input type='text' placeholder='Enter username' onChange={handleMail}/><br></br><br></br>
      <input type='password' placeholder='**********'onChange={handlePass}/><br></br><br></br>
      <Link to={PathConstants.TATA}>
      </Link>
      <input type='submit' onClick={handleAuth}/>
      
      <center>
      <div className='msgg'>{msg}</div></center>
    </div>
  )
}
