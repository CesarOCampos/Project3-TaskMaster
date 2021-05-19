import React, { useState,useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import {Box, Grid, Card, CardActions, CardContent, CardMedia, Button, Typography,} from "@material-ui/core";
import Navbar from "./Navbar";
import LaunchIcon from "@material-ui/icons/Launch";
import GitHubIcon from "@material-ui/icons/GitHub";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import TaskModal from "./TaskModal/TaskModal";
import "../components/ProjectModal/style.css";


const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "500vh",
    opacity: ".96",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "5rem auto",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
}));

const Tasks = () => {
  const[tasks,setTasks] = useState([])
  
  useEffect(() => {
    async function obtainData() {
      try {
        const reply = await fetch('/api/tasks', {
          method: 'GET',
          headers:{ 'Content-Type': 'application/json' },});
        const info = await reply.json();
        console.log(info);
        setTasks(info);
      } catch (err) {
        console.log(err);
      }
    }
    obtainData();
  },[])

  const classes = useStyles();
  const [show, setShow] = useState(false);
  const closeModalHandler = () => setShow(false);

  return (
  <Box component="div" className={classes.mainContainer}>
    <Navbar />
    <button onClick={() => setShow(true)} className="btn-openModal">
      Create New Task
    </button>
    <TaskModal show={show} close={closeModalHandler} />
    <Grid container justify="center">
      <Grid item xs={12} sm={8} md={6}>
        <Card className={classes.cardContainer}>
          <CardMedia component="img" alt="Task 1" height="140"/>
          <CardContent>
              <Typography gutterBottom variant="h5">
                name
            </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                description
            </Typography>
          </CardContent>
          <CardActions>
            <Button href="" target="_blank" size="small" color="#A3BCB6" variant="contained" startIcon={<GitHubIcon />}
            >
              Project
            </Button>

            <Button size="small" color="#A3BCB6" href="" target="_blank" variant="contained" startIcon={<SaveIcon />}
            >
              Save
            </Button>

            <Button size="small" color="#A3BCB6" href="" target="_blank" variant="contained" startIcon={<DeleteIcon />}>
              Delete
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  </Box>
  );
};

export default Tasks;