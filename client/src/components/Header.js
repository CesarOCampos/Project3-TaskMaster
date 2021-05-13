import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
// import avatar from "";
import Typed from "react-typed";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "#3C403D",
  },
  subtitle: {
    color: "#39603D",
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
  return (
    <div style={{ background: "#A3BCB6", height: "150vh", opacity: ".95" }}>
      <Box className={classes.typedContainer}>
        <Grid container justify="center">
          {/* <Avatar className={classes.avatar} src={avatar} alt="" /> */}
        </Grid>
        <Typography className={classes.title} variant="h4">
          <Typed
            strings={["TaskMaster"]}
            typeSpeed={210}
            onComplete={(self) => self.cursor.remove()}
          />
        </Typography>
        <br />
        <Typography className={classes.subtitle} variant="h5">
          <Typed
            strings={[
              "We can write whatever we want here if we decide to keep it",
            ]}
            startDelay={4700}
            typeSpeed={50}
            // backSpeed={30}
            // backDelay={1200}
            // loop
          />
        </Typography>

        <Grid container justify="center">
          <Typography className={classes.title} variant="h5">
            Make sure you never miss a deadline!
          </Typography>
        </Grid>
      </Box>
    </div>
  );
};

export default Header;
