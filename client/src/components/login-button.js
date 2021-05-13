import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

// import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
    size="small"
    color="primary"
    onClick={() => loginWithRedirect()}
    target="_blank"
    variant="contained"
  >
    Log In
  </Button>
    // <button
    //   className="btn btn-primary btn-block"
    //   onClick={() => loginWithRedirect()}
    // >
    //   Log In
    // </button>
  );
};

export default LoginButton;