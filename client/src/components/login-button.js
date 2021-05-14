import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

// import { makeStyles } from "@material-ui/core/styles";
//import { Button } from "@material-ui/core";
import "./style/style.css"

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
    className="btn-logout"
    size="small"
    onClick={() => loginWithRedirect()}
    
    variant="contained"
  >
    Log In
  </button>
    // <button
    //   className="btn btn-primary btn-block"
    //   onClick={() => loginWithRedirect()}
    // >
    //   Log In
    // </button>
  );
};

export default LoginButton;