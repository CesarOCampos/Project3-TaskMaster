// We use an ID Token to get the profile information of a logged-in user.
// This route should be protected
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box,} from "@material-ui/core";
import Navbar from "../../components/Navbar";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import "./style.css"
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  mainContainer: {
    background: "#A3BCB6",
    height: "575vh",
    opacity: ".95",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "#A3BCB6 #A3BCB6 transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent #A3BCB6 #A3BCB6",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "#A3BCB6",
    color: "white",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "$:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "#A3BCB6",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "white",
    padding: "0",
    textTransform: "uppercase",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  
}));

const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;
  const classes = useStyles();

  return (
    <>

  <Navbar />
  
  <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          User Profile
          <br />
          <br />

              <Card className={classes.root} className="card">
                 
                  <CardActionArea>

                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {name}
                      </Typography>

                      <Typography variant="body2" color="textSecondary" component="p">
                        <img
                          src={picture}
                          alt="Profile"
                          className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
                        />
                      </Typography>

                      <Typography variant="body2" color="textSecondary" component="p">
                        {email}
                      </Typography>
                      
                      <Typography variant="body2" color="textSecondary" component="pre">
                        {JSON.stringify(user, null, 2)}
                      </Typography>
                    </CardContent>

                  </CardActionArea>

                <CardActions>
                  <Button className="btn" size="small" color="primary">
                    Notes
                  </Button>
                  <Button className="btn" size="small" color="primary">
                    Add a Task
                  </Button>
                </CardActions>
              
              </Card>

        </Typography>
      </Box>

    {/* <div>
      <div className="row align-items-center profile-header">
        <div className="col-md-2 mb-3">
          <img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div className="col-md text-center text-md-left">
          <h2>{name}</h2>
          <p className="lead text-muted">{email}</p>
        </div>
      </div>
      <div className="row">
        <pre className="col-12 text-light bg-dark p-4">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
    </div> */}

    </>
  );
};

export default Profile;
