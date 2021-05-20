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
    height: "300vh",
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

  let student_id = user.sub.split("|");
  student_id = student_id[1];

  const [project, setProject] = useState({});
  const [tasks, setTasks] = useState([]);

  async function getProject() {
    try {
      const response = await fetch('/api/projects/' + student_id, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();

      console.log("Data: ", data[0].project);
      setProject(data[0].project);
    } catch (err) {
      console.log(err);
    }
  }

  async function getTasks() {
    try {
      console.log("In getTasks");
      const response = await fetch('/api/tasks/' + student_id, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();

      console.log("Task Data: ", data);
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
                  UniqueID : {student_id}
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
                  <Typography variant="h6" color="textSecondary" component="p">
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
