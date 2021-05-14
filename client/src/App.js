import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Home from "./components/";
import Projects from "./pages/projects/Projects";
import Profile from "./pages/profile/Profile";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";
import Loading from "./components/loading";
import ProtectedRoute from "./auth/protected-route";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
    <CssBaseline />
    <Route exact path="/" component={Home}/>

    <ProtectedRoute path="/profile" component={Profile} />

    <ProtectedRoute path="/projects" component={Projects}/>
    <ProtectedRoute path="/portfolio" component={Portfolio}/>
    <ProtectedRoute path="/contacts" component={Contacts}/>
      
    </>
  );
}

export default App;
