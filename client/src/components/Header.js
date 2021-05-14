import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
// import avatar from "";
import Typed from "react-typed";
import ProjectModal from "./ProjectModal/ProjectModal";
import "./ProjectModal/style.css"


const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "#A3BCB6",
  },
  subtitle: {
    color: "tan",
    marginBottom: "3rem",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  const [show, setShow] = useState(false);

  const closeModalHandler = () => setShow(false);

  return (
    <div style={{ background: "#233", height: "150vh", opacity: ".95" }}>
      { show ? <div onclick={closeModalHandler} className="back-drop"></div> : null }
      
    
      <Box className={classes.typedContainer}>
        <Grid container justify="center">
          {/* <Avatar className={classes.avatar} src={avatar} alt="" /> */}
        </Grid>
        <Typography className={classes.title} variant="h4">
          <Typed
            strings={["Task Master"]}
            typeSpeed={210}
            onComplete={(self) => self.cursor.remove()}
          />
        </Typography>
        <ProjectModal show={show} close={closeModalHandler}/>
        <Grid container justify="center">
          <Typography className={classes.title} variant="h5">
            Make sure you never miss a deadline!
          </Typography>
        </Grid>
        <button onClick={() => setShow(true)} className="btn-openModal">Create New Project</button>
    
      </Box>
    </div>
  );
};

export default Header;
