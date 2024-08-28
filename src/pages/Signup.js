import React, { useState } from 'react';
import "../styles/Signup.css"
import PathConstants from '../routes/pathConstants';
import { Link } from 'react-router-dom';
export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setMsg("All fields are required");
    } else if (password !== confirmPassword) {
      setMsg("Passwords do not match");
    } else {
     
      setMsg("Form submitted successfully!");
    }
  };

  return (
    <div className="full-page-background">
    <div className='signup-container'>
      <h1>Sign Up</h1>
      {msg && <p className="error-msg">{msg}</p>}
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='First Name' value={firstName} onChange={handleFirstNameChange} /><br /><br />
        <input type='text' placeholder='Last Name' value={lastName} onChange={handleLastNameChange} /><br /><br />
        <input type='email' placeholder='Email' value={email} onChange={handleEmailChange} /><br /><br />
        <input type='password' placeholder='Password' value={password} onChange={handlePasswordChange} /><br /><br />
        <input type='password' placeholder='Confirm Password' value={confirmPassword} onChange={handleConfirmPasswordChange} /><br /><br />
       <Link to={PathConstants.CART}></Link>
        <button type='submit'>Sign Up</button>
    
      </form>
    </div>
    </div>
  );
}
