import React from 'react';
import './Login.css'
import { Button } from '@material-ui/core';

function Login() {

  const signIn = () => {
    // Sign in stuff
  }
  return (
    <div className="login">
      <div className="login__logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Facebook_icon_192.png"
        alt="" 
        />
        <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="" 
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  )
}

export default Login
