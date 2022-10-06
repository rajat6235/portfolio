import React, { useState } from "react";
import UsersList from "./UsersList";
import "./LoginForm.css";
export default function LoginForm() {
  const [errorMessages, setErrorMessages] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [uname, setUname] = useState("");
  const [pass, setPass] = useState("");
  const database = [
    {
      username: "user1",
      password: "pass1"
    }
  ];
  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };
  const handleUsername = (e) => {
    setUname(e.target.value);
    setErrorMessages("");
  };
  const handlePassword = (e) => {
    setPass(e.target.value);
    setErrorMessages("");
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (uname === "user1" && pass === "pass1") {
      setIsSubmitted(true);
      setErrorMessages("");
    } else {
      setErrorMessages("Invalid details");
      setIsSubmitted(false);
    }
    setUname("");
    setPass("");
  };
  
  return ( 
    
    <div className="container">
      {isSubmitted ? <UsersList/> :

      <div className="login-form">
      <div className="title">Sign In</div>
      <div className="form" onSubmit={onSubmit}>
        <form>
          <div className="input-container">
            <label> Name</label>
            <input
              type="text"
              onChange={handleUsername}
              value={uname}
              required
            />
          </div>
          <div className="input-container job-Container">
            <label> Job</label>
            <input
              type="text"
              onChange={handlePassword}
              value={pass}
              required
            />
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
          {errorMessages && <p className='error'>{errorMessages}</p>}
        </form>
      </div>
      </div>}
    </div>
  );
}
