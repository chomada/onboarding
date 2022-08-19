import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {Button
} from '@chakra-ui/react'
import "../index.css";

const Login = ()=>{ 
  const navigate = useNavigate();


  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "fmachado",
      password: "123456"
    },
    {
      username: "csilva",
      password: "123456"
    },
    {
      username: "asalinas",
      password: "123456"
    },
    {
      username: "cfrontera",
      password: "123456"
    },
    {
      username: "ggomez",
      password: "123456"
    },
    {
      username: "jvgonzalez",
      password: "123456"
    },
    {
      username: "tdamico",
      password: "123456"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        navigate("/select");
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

 

  return (
    <>
    <h1 className="onboarding" colorScheme='green'> Onboarding</h1>

    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
       
        <Button type="submit"  className="submit"colorScheme='purple' >
    Submit
  </Button>
      </form>
    </div>
      </div>
    </div>
    </>
  );
}

export default Login;