import React from "react";
import { Typography } from "@material-ui/core";
import Sidebar from "../components/Sidebar";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
}));

const About = (props) => {
  const { window } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Sidebar></Sidebar>
      </div>
      <div></div>
    </div>
  );
};

export default About;
