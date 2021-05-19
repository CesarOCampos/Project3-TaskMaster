import React, { useState,useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
//import CardActionArea from "@material-ui/core/CardActionArea";
import {Box, Grid, Card, CardActions, CardContent, CardMedia, Button, Typography,} from "@material-ui/core";
import Navbar from "./Navbar";
//import LaunchIcon from "@material-ui/icons/Launch";
import GitHubIcon from "@material-ui/icons/GitHub";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import TaskModal from "./TaskModal/TaskModal";
import "../components/ProjectModal/style.css";
import { DataGrid } from "@material-ui/data-grid";
import { useDemoData } from "@material-ui/x-grid-data-generator";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "500vh",
    opacity: ".96",
    display: "inline-block",
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

const FlexLayoutGrid = () => {
  const { info } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 5,
    maxColumns: 6,
  });
}

const Tasks = () => {
  const[tasks,setTasks] = useState([])
  
  useEffect( () => {
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
    <>
    <Navbar />
    <Box component="div" className={classes.mainContainer} style={{ height: 400, width: '100%', display: 'flex', height: '100%', flexGrow: 1 }}>
    <DataGrid>
    <button onClick={() => setShow(true)} className="btn-openModal">Create New Task</button>
    {show && <TaskModal show={show} close={closeModalHandler} />}
    {tasks.map(item => (
    <Grid container justify="center">
      <Grid item xs={12} sm={8} md={6}>
        <Card className={classes.cardContainer}>
          <CardMedia component="img" alt="Task 1" height="140"/>
          <CardContent>
            <Typography gutterBottom variant="h5">{item.id}</Typography>
            <Typography gutterBottom variant="h5">{item.taskname}</Typography>
            <Typography variant="body2" color="textSecondary" component="p">{item.taskdesc}</Typography>
            <Typography gutterBottom variant="h5">{item.status}</Typography>
            <Typography>{item.projects}</Typography>
          </CardContent>
          <CardActions>
            <Button className={classes.button} color="primary" variant="contained" startIcon={<GitHubIcon />}>
              Project
            </Button>
            <Button className={classes.button} color="primary" variant="contained" startIcon={<SaveIcon />}>
              Save
            </Button>
            <Button className={classes.button} color="secondary" variant="contained" startIcon={<DeleteIcon />}>
              Delete
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid> ))}
    </DataGrid>
    </Box>
    </>
  );
};

export default {Tasks,FlexLayoutGrind()};
