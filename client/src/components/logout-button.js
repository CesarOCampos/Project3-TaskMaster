import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
//import { Button } from "@material-ui/core";
import "./style.css/style.css"

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <button
    className="btn-logout"
    size="small"
    
    onClick={() =>
      logout({
        returnTo: window.location.origin,
      })
    }
    variant="contained"
  >
    Log Out
    </button>
    // <button
    //   className="btn btn-danger btn-block"
      
    // >
    //   Log Out
    // </button>
  );
};

export default LogoutButton;