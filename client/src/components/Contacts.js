import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  TextField,
  Typography,
  // Button,
  Grid,
  Box,
  // Avatar,
} from "@material-ui/core";
// import SendIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar";
// import avatar from "../luckyme.png";

const useStyles = makeStyles((theme) => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    opacity: ".95",
  },
  button: {
    marginTop: "1rem",
    color: "#A3BCB6",
    borderColor: "#A3BCB6",
  },
  // avatar: {
  //   width: theme.spacing(15),
  //   height: theme.spacing(15),
  //   margin: theme.spacing(9),
  // },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#A3BCB6",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "#A3BCB6",
      },
      "&.Mui-focused fieldset": {
        borderColor: "tan",
      },
    },
  },
})(TextField);

const Contacts = () => {
  const classes = useStyles();
  return (
    <Box
      component="div"
      style={{ background: "#A3BCB6", height: "150vh", opacity: ".95" }}
    >
      <Navbar />

      <Grid container justify="center">
        <Box component="form" className={classes.form}>
          {/* <Avatar
            className={classes.avatar}
            src={avatar}
            alt="George Huliaris"
          /> */}
          <Typography
            variant="h5"
            style={{
              color: "#39603D",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            This changed!
          </Typography>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contacts;
