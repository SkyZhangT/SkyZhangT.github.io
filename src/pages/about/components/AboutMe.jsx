import React from "react";
import { useRef, useState, useCallback } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, Fade, Grid, Slide } from "@material-ui/core";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import port1 from "../res/port1.png";
import { useVisited } from "../../../utils/OnScreenHook";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    maxWidth: "100%",
    marginLeft: 0,
    marginRight: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    padding: 5,
    fontFamily: "Open Sans",
    color: "primary",
    textAlign: "left",
  },
}));

const AboutMe = (props) => {
  const classes = useStyles();

  const ref = useRef();
  const isVisible = useVisited(ref);

  return (
    <Fade in={isVisible} timeout={800}>
      <Container
        ref={ref}
        id="About Me"
        style={{
          backgroundColor: "#fafafa",
          justifyContent: "left",
        }}
        className={classes.container}
      >
        <Grid container spacing={1} justify="center" alignItems="center">
          <Grid
            item
            xs={12}
            lg={7}
            style={{ justifyContent: "left", alignItems: "left" }}
          >
            <Typography
              variant="h3"
              className={classes.text}
              style={{ fontWeight: 700, paddingTop: "5%" }}
            >
              About Me
            </Typography>
            <Typography
              variant="h6"
              className={classes.text}
              style={{ fontWeight: 500, color: "gray" }}
            >
              Photographer & Fullstack Developer,
            </Typography>
            <Typography
              variant="h6"
              className={classes.text}
              style={{ fontWeight: 400 }}
            >
              I am Tianyang Zhang, I enjoy photography as well as designing and
              developing software systems. While my background in computer
              science gave me adequate knowledge and skills to solve technical
              problems, my experience as a photographer elevated my aesthetics
              to appreciate and enjoy my life. As a full-stack developer, I am
              capable of developing both backend APIs and services and frontend
              interfaces. As a researcher, I had experience with Natural
              Language Processing.
            </Typography>
            <Button
              variant="outlined"
              style={{
                margin: 30,
                backgroundColor: "#0a1c38",
              }}
            >
              <InsertDriveFileIcon style={{ color: "white", margin: 7 }} />
              <Typography
                variant="h6"
                style={{ color: "white", fontWeight: 500, margin: 7 }}
              >
                Download Resume
              </Typography>
            </Button>
          </Grid>

          <Grid item xs={10} lg>
            <img
              src={port1}
              style={{
                width: "100%",
                maxHeight: 650,
                objectFit: "cover",
                objectPosition: "top",
                overflow: "hidden",
                marginBottom: 0,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Fade>
  );
};

export default AboutMe;
