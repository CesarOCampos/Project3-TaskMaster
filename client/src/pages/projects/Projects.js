import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import Navbar from "../../components/Navbar";
<<<<<<< HEAD
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
=======
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
>>>>>>> c07c2861b3b1fd6e2d963013a172c07e88c58ea6
import "./style.css";
import ProjectModal from "../../components/ProjectModal/ProjectModal";
import "../../components/ProjectModal/style.css";
import { useAuth0 } from "@auth0/auth0-react";
import TaskModal from "../../components/TaskModal/TaskModal";
<<<<<<< HEAD
import "../../components/TaskModal/style.css";
=======
import "../../components/TaskModal/style.css"
>>>>>>> c07c2861b3b1fd6e2d963013a172c07e88c58ea6

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
  const { user } = useAuth0();
  const { name, picture, email } = user;

  let student_id = user.sub.split("|");
  student_id = student_id[1];

  const [projects, setProjects] = useState([]);

<<<<<<< HEAD
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("/api/projects", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();
        console.log("ya");
        //console.log(data)
        setProjects(data);
      } catch (err) {
        console.log(err);
      }
    }

    getData();
  }, []);
=======
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
>>>>>>> c07c2861b3b1fd6e2d963013a172c07e88c58ea6
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const [see, setSee] = useState(false);

  const closeModalHandler = () => setShow(false);
  const closeTaskHandler = () => setSee(false);
  return (
    <>
      <Navbar />
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
<<<<<<< HEAD
          <button onClick={() => setShow(true)} className="btn-openModal">
            Create New Project
          </button>
          {show && <ProjectModal show={show} close={closeModalHandler} />}
          {projects.map((item) => (
            <Card className={classes.root} className="card">
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.projectname}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {item.projectdesc}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button className="btn" size="small" color="primary"></Button>
                <Button
                  onClick={() => setSee(true)}
                  className="btn"
                  size="small"
                  color="primary"
                >
                  Add a Task
                </Button>
              </CardActions>
              {see && <TaskModal see={see} close={closeTaskHandler} />}
            </Card>
          ))}
=======
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
        <Button onClick={() => setSee(true)} className="btn" size="small" color="primary">
          Add a Task
        </Button>
      </CardActions>
      {
        see &&(<TaskModal see={see} close={closeTaskHandler}/>)
      }
    </Card>))}
>>>>>>> c07c2861b3b1fd6e2d963013a172c07e88c58ea6
        </Typography>
      </Box>
    </>
  );
};

export default Projects;
