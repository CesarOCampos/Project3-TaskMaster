import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MobilLeftMenuSlider from "@material-ui/core/Drawer";
import Footer from "./Footer";
import MenuIcon from "@material-ui/icons/Menu";
import {
  Toolbar,
  Typography,
  Box,
  AppBar,
  Divider,
  ListItem,
  IconButton,
  ListItemText,
  ListItemIcon,
  //   Avatar,
  List,
} from "@material-ui/core";
import AssignmentLateIcon from "@material-ui/icons/AssignmentLate";
import { Home, Apps, ContactMail } from "@material-ui/icons";
import AuthNav from "./auth-nav";
// import avatar from "../avatarThinking.png";

const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#2d545e",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "tan",
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <AssignmentLateIcon />,
    listText: "Current Project",
    listPath: "/projects",
  },
  {
    listIcon: <Apps />,
    listText: "Tasks",
    listPath: "/portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Drawing Board",
    listPath: "/contacts",
  },
];

const Navbar = () => {
  const [state, setState] = useState({
    Left: false,
  });

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const classes = useStyles();

  const sideList = (slider) => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={toggleSlider(slider, false)}
    >
      {/* <Avatar className={classes.avatar} src={avatar} alt="George Huliaris" /> */}
      <Divider />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem button key={key} component={Link} to={lsItem.listPath}>
            <ListItemIcon className={classes.listItem}>
              {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={lsItem.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#222" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("left", true)}>
              <MenuIcon style={{ color: "#A3BCB6" }} />
            </IconButton>
            <Typography variant="h5" style={{ color: "tan" }}>
              Task Master
            </Typography>
            <MobilLeftMenuSlider
              anchor="left"
              open={state.left}
              onClose={toggleSlider("left", false)}
            >
              {sideList("left")}
              <Footer />
            </MobilLeftMenuSlider>

            <AuthNav />

          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
