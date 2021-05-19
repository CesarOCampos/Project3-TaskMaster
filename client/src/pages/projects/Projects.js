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
import "../../components/ProjectModal/style.css";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  mainContainer: {
    background: "#A3BCB6",
    height: "150vh",
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

  const closeModalHandler = () => setShow(false);
  return (
    <>
      <Navbar />
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          <button onClick={() => setShow(true)} className="btn-openModal">Create New Project</button>
          <ProjectModal show={show} close={closeModalHandler}/>
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
          Notes
        </Button>
        <Button className="btn" size="small" color="primary" onclick="">
          Add a Task
        </Button>
      </CardActions>
    </Card>
          ))}
        </Typography>
      </Box>
    </>
  );
};

export default Projects;
