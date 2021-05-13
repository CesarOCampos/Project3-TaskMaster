import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  // Avatar,
  Box,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import Navbar from "./Navbar";
// import project1 from "../images/portfolio.png";
// import project2 from "../images/password_gen.png";
// import project3 from "../images/cryptostock.png";
// import project4 from "../images/ExpressNext.png";
// import avatar from "../thankfulme.png";
import LaunchIcon from "@material-ui/icons/Launch";
import GitHubIcon from "@material-ui/icons/GitHub";

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

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />

      <Grid container justify="center">
        {/* Project 1 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardMedia
              component="img"
              alt="Task 1"
              height="140"
              // image={project1}
            />

            <CardContent>
              <Typography gutterBottom variant="h5">
                Task 1
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Notes
              </Typography>
            </CardContent>

            <CardActions>
              <Button
                href=""
                target="_blank"
                size="small"
                color="#A3BCB6"
                variant="contained"
                startIcon={<GitHubIcon />}
              >
                GitHub
              </Button>

              <Button
                size="small"
                color="#A3BCB6"
                href=""
                target="_blank"
                variant="contained"
                startIcon={<LaunchIcon />}
              >
                Visit Page
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 2 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardMedia
              component="img"
              alt="Task 2"
              height="140"
              // image={project2}
            />

            <CardContent>
              <Typography gutterBottom variant="h5">
                Task 2
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Notes
              </Typography>
            </CardContent>

            <CardActions>
              <Button
                href=""
                target="_blank"
                size="small"
                color="#A3BCB6"
                variant="contained"
                startIcon={<GitHubIcon />}
              >
                GitHub
              </Button>

              <Button
                size="small"
                color="#A3BCB6"
                href=""
                target="_blank"
                variant="contained"
                startIcon={<LaunchIcon />}
              >
                Visit Page
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Project 3 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardMedia
              component="img"
              alt="Task 3"
              height="140"
              // image={project3}
            />

            <CardContent>
              <Typography gutterBottom variant="h5">
                Task 3
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Notes
              </Typography>
            </CardContent>

            <CardActions>
              <Button
                href=""
                size="small"
                color="#A3BCB6"
                target="_blank"
                variant="contained"
                startIcon={<GitHubIcon />}
              >
                GitHub
              </Button>

              <Button
                size="small"
                color="#A3BCB6"
                href=""
                target="_blank"
                variant="contained"
                startIcon={<LaunchIcon />}
              >
                Visit Page
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Project 4 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardMedia
              component="img"
              alt="Task 4"
              height="140"
              // image={project4}
            />

            <CardContent>
              <Typography gutterBottom variant="h5">
                Task 4
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Notes
              </Typography>
            </CardContent>

            <CardActions>
              <Button
                href=""
                target="_blank"
                size="small"
                color="#A3BCB6"
                variant="contained"
                startIcon={<GitHubIcon />}
              >
                GitHub
              </Button>

              <Button
                size="small"
                color="#A3BCB6"
                href=""
                target="_blank"
                variant="contained"
                startIcon={<LaunchIcon />}
              >
                Visit Page
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      {/* <Avatar className={classes.avatar} src={avatar} alt="George Huliaris" /> */}
    </Box>
  );
};

export default Portfolio;
