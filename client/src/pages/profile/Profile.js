// We use an ID Token to get the profile information of a logged-in user.
// This route should be protected
import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import Navbar from "../../components/Navbar";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

import "./style.css";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  mainContainer: {
    background: "#A3BCB6",
    height: "100vh",
    opacity: ".95",
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


  const [projects, setProjects] = useState([]);
  useEffect(
    () => {
      async function getData() {
        try {
        const response = await fetch('/api/projects', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          });
          const data = await response.json();
          console.log("ya");
          //console.log(data)
          setProjects(data)
        }catch (err) {
          console.log(err)
        }
      }
      getData();
    },[]
  )

  const findStudentProject = async (id) => {
    if (id) {
      const response = await fetch('/api/projects/:id', {
        method: 'GET',
        body: JSON.stringify({ projectname: projectName, projectdesc: projectDesc }),
        headers: { 'Content-Type': 'application/json' },

      });

      if (response.ok) {
        console.log("Yippee!");
      } else {
        alert(response.statusText);
      }
    };
  }



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
                  {email}

                </Typography>

                <Typography variant="body2" color="textSecondary" component="p">
                  <img
                    src={picture}
                    alt="Profile"
                  />
                </Typography>

                <Typography variant="body2" color="textSecondary" component="p">
                  {user.email}
                </Typography>

                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="pre"
                >
                  {JSON.stringify(user, null, 2)}
                </Typography>
              </CardContent>
            </CardActionArea>

          </Card>
        </Typography>
      </Box>

    </>
  );
};

export default Profile;
