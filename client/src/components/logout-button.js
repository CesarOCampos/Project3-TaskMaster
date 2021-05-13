import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@material-ui/core";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <Button
    size="small"
    color="primary"
    onClick={() =>
      logout({
        returnTo: window.location.origin,
      })
    }
    variant="contained"
  >
    Log Out
  </Button>
    // <button
    //   className="btn btn-danger btn-block"
      
    // >
    //   Log Out
    // </button>
  );
};

export default LogoutButton;