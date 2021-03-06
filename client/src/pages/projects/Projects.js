import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box,} from "@material-ui/core";
import Navbar from "../../components/Navbar";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import "./style.css";
import ProjectModal from "../../components/ProjectModal/ProjectModal";
import "../../components/ProjectModal/style.css"
import { useAuth0 } from "@auth0/auth0-react";
import TaskModal from "../../components/TaskModal/TaskModal";
import "../../components/TaskModal/style.css"

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
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  
}));

const Projects = () => {

  const { user } = useAuth0();
  const { name, picture, email } = user;

  let student_id = user.sub.split("|");
  student_id = student_id[1];

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
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const [see, setSee] = useState(false);
  const [clickedTask, setClickedTask] = useState("")
  const showModalHandler = (itemId) => {
    setClickedTask(itemId);
    setSee(true);
  }


  const closeModalHandler = () => setShow(false);
  const closeTaskHandler = () => setSee(false);
  return (
    <>
      <Navbar />
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          <button onClick={() => setShow(true)} className="btn-openModal">Create New Project</button>
          {
            show &&(<ProjectModal show={show} close={closeModalHandler}/>)
          }
          {projects.map(item => (
    <Card className={classes.root} className="card">
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.projectname}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {item.projectdesc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className="btn" size="small" color="primary">
        </Button>
        <Button onClick={() => showModalHandler(item.id)} className="btn" size="small" color="primary">
          Add a Task
        </Button>
      </CardActions>
      {
        see &&(<TaskModal dataId={item.id} see={clickedTask === item.id} close={closeTaskHandler}/>)
      }
    </Card>))}
        </Typography>
      </Box>
    </>
  );
};

export default Projects;
