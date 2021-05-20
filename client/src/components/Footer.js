import React from "react";
import { makeStyles } from "@material-ui/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";

// import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import GitHubIcon from "@material-ui/icons/GitHub";
// import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "#A3BCB6",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <BottomNavigation width="auto" style={{ background: "#222" }}>
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        // icon={<LinkedInIcon />}
        href={""}
        target="blank"
      />
      
      {/* </BottomNavigationAction> */}
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        // icon={<GitHubIcon />}
        href={""}
        target="blank"
      />
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        // icon={<InstagramIcon />}
        href={""}
        target="blank"
      />
    </BottomNavigation>
  );
};

export default Footer;
