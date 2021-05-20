import React, { useState,useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
//import CardActionArea from "@material-ui/core/CardActionArea";
import {Box, Grid, Card, CardActions, CardContent, Button, Typography,} from "@material-ui/core";
import Navbar from "./Navbar";
//import LaunchIcon from "@material-ui/icons/Launch";
//import GitHubIcon from "@material-ui/icons/GitHub";
//import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import TaskModal from "./TaskModal/TaskModal";
import "../components/TaskModal/style.css";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "500vh",
    opacity: ".96",
    display: "block"
  },
  cardContainer: {
    maxWidth: 200,
    margin: "5rem auto",
  },
}));

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function obtainData() {
      try {
        const response = await fetch("/api/tasks", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();
        console.log(data);
        setTasks(data);
      } catch (err) {
        console.log(err);
      }
    }
    obtainData();
  }, []);

  const classes = useStyles();
  const [show, setShow] = useState(false);
  const closeModalHandler = () => setShow(false);

  // const delButtonHandler = async (event) => {
  //   event.preventDefault();
  //   const id = tasks.id.value.trim();
  //   console.log(tasks.id.value);
  //   if (tasks.id) {
  //       const response = await fetch(`/api/task/${id}`, {
  //         method: "DELETE",
  //         body: JSON.stringify({ id: id }),
  //         headers: { "Content-Type": "application/json", },
  //       });
  //     (response.ok) ? document.location.replace('/api/tasks') : alert("Unable to delete task!");
  //   }
  // }

  return (
    <>
      <Navbar />
      <Box component="div" className={classes.mainContainer}>
        {show && <TaskModal show={show} close={closeModalHandler} />}
        {tasks.map((item) => (
          <Grid container justify="center">
            <Card className={classes.cardContainer} style={{width:200}}>
              <CardContent align="center">
                <Typography gutterBottom variant="h5">
                  {item.id}
                </Typography>
                <Typography gutterBottom variant="h5">
                  {item.taskname}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.taskdesc}
                </Typography>
                <Typography gutterBottom variant="h5">
                  {item.status}
                </Typography>
                <Typography>{item.projects}</Typography>
              </CardContent>
              <CardActions>
                {/* <Button
                  className={classes.button}
                  color="primary"
                  variant="contained"
                  startIcon={<GitHubIcon />}>
                  Project
                </Button> */}
                {/* <Button
                  className={classes.button}
                  color="primary"
                  variant="contained"
                  startIcon={<SaveIcon />}>
                  Save
                </Button> */}
                <Button
                  className={classes.button}
                  color="secondary"
                  variant="contained"
                  startIcon={<DeleteIcon />}
                // onClick={delButtonHandler}
                >Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>))}
      </Box>
    </>
  );
};

export default Tasks;