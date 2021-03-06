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
    height: "auto",
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
}));

const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;
  const classes = useStyles();

  let student_id = 0;
  let student_auth0id = user.sub.split("|");
  student_auth0id = student_auth0id[1];

  if (student_auth0id == "103887618658368306919") {
    student_id = 1;
  } else if (student_auth0id == "113019573704872307362") {
    student_id = 2;
  } else if (student_auth0id == "105979323143183229328") {
    student_id = 3;
  } else if (student_auth0id == "103741485630994885413") {
    student_id = 4;
  }

  const [project, setProject] = useState({});
  const [tasks, setTasks] = useState([]);

  async function getProject() {
    try {
      const response = await fetch('/api/projects/' + student_id, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();

      setProject(data[0].project);
    } catch (err) {
      console.log(err);
    }
  }

  async function getTasks() {
    try {
      const response = await fetch('/api/tasks/' + student_id, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();

      setTasks(data);
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(
    () => {
      getProject();
      getTasks();
    },[]
  )

  return (
    <>
      <Navbar />
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          <Card className={classes.root} className="card">
            <CardActionArea>
              <CardContent>

                <Typography variant="body2" color="textSecondary" component="p">
                  <img
                    src={picture}
                    alt="Profile"
                  />
                </Typography>

                <Typography gutterBottom variant="h5" component="h2">
                  {name}
                </Typography>

                <Typography variant="h6" color="textSecondary" component="p">
                  UserName: {user.nickname}
                </Typography>

                <Typography variant="h6" color="textSecondary" component="p">
                  Email Address: {email}
                </Typography>

                <Typography variant="body2" color="textSecondary" component="p">
                  UniqueID : {student_auth0id}
                </Typography>
                  {/* {JSON.stringify(user, null, 2)} */}
                
              </CardContent>
            </CardActionArea>
          </Card>

          <Card className={classes.root} className="card">
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Current Project: {project.projectname}
                  </Typography>
                  <Typography variant="h6" color="textSecondary" component="p">
                    {project.projectdesc}
                  </Typography>

                  <Typography variant="body2" color="textSecondary" component="p">
                  <img
                    src="./projectprogress.png"
                    alt="Profile"
                  />
                  </Typography>

                  <Typography variant="h6" color="textSecondary" component="p">
                    Project Status: {project.projectstatus}
                  </Typography>
                
                </CardContent>
              </CardActionArea>
              
            </Card>

          
            <Card className={classes.root} className="card">
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    My Open Tasks:
                  </Typography>
          
              {tasks.map(task => (
                  <Typography key={task.id} variant="h6" color="textSecondary" component="p">
                  {task.taskname} ({task.status})
                  </Typography>
              ))}
          
                </CardContent>
            </Card>

        </Typography>
      </Box>
    </>
  );
};

export default Profile;
