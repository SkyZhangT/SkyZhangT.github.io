import React, { useState } from "react";
import { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Button,
  CardActionArea,
  CardContent,
  CardMedia,
  Box,
  Typography,
  Fade,
  LinearProgress,
  Hidden,
  IconButton,
  Link,
  Chip,
  Slide,
} from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { projects } from "../content";
import { useVisited } from "../../../utils/OnScreenHook";
import frame1 from "../../../res/laptop_frame.png";

//[green, blue, red, yellow]
const color = ["#76d275", "#6ab7ff", "#ff7961", "#ffd633"];

const useStylesItem = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: "40%",
    [theme.breakpoints.down("lg")]: { marginTop: "50%" },
    [theme.breakpoints.down("md")]: { marginTop: "60%" },
    [theme.breakpoints.down("sm")]: { marginTop: "70%" },
  },

  text: {
    fontFamily: "Roboto",
    textAlign: "left",
  },
  frame: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  svg: { width: "100%", height: "100%" },
  textBox: {
    position: "absolute",
    top: "50%",
    left: "20%",
    width: "30%",
    transform: "translateY(-50%)",
    msTransform: "translateY(-50%)",
    justifyContent: "left",
    alignItems: "left",

    [theme.breakpoints.down("xs")]: { width: "60%" },
  },
  imageFrame: {
    position: "absolute",
    top: "50%",
    right: "10%",
    width: "40%",
    transform: "translateY(-50%)",
    msTransform: "translateY(-50%)",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    [theme.breakpoints.down("xs")]: { width: "80%" },
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

const Item = (props) => {
  const { data, colorIndex, shapeIndex, inTransition } = props;
  const classes = useStylesItem();
  const ref = useRef();
  const isVisible = useVisited(ref);

  const generateShape = (s, c) => {
    switch (s) {
      case 0:
        return <circle cx="50%" cy="50%" r="35" fill={color[c]} />;
      case 1:
        return <rect x="18" y="18" width="64" height="64" fill={color[c]} />;
      case 2:
        return <polygon points="50,15 5,80 95,80" fill={color[c]} />;
      case 3:
        return <polygon points="50,80 5,15 95,15" fill={color[c]} />;
      default:
        return <circle cx="50%" cy="50%" r="35" fill={color[c]} />;
    }
  };

  const generateLink = (className, data) => {
    if (data.link !== null && data.link.length > 0) {
      return (
        <Link href={data.link}>
          <Typography variant="subtitle1" className={className}>
            View Project
          </Typography>
        </Link>
      );
    }
  };

  return (
    <Grid
      ref={ref}
      container
      spacing={4}
      justify="center"
      style={{ paddingTop: "5%" }}
    >
      <Grid item xs={12}>
        {data.skills.map((name, index) => {
          return (
            <Chip
              key={`${index}`}
              label={name}
              className={classes.chip}
              color="secondary"
              style={{ backgroundColor: color[colorIndex] }}
            />
          );
        })}
      </Grid>
      <Grid item xs={12} lg={10} style={{ position: "relative" }}>
        <div className={classes.root} />
        <div className={classes.frame}>
          <svg viewBox="0 0 100 100" className={classes.svg}>
            {generateShape(shapeIndex, colorIndex)}
          </svg>
        </div>

        <div className={classes.textBox}>
          <Fade in={!inTransition} timeout={500}>
            <Typography
              variant="h4"
              className={classes.text}
              style={{
                fontWeight: 400,
              }}
            >{`${data.title}`}</Typography>
          </Fade>
          <Fade in={!inTransition} timeout={600}>
            <Typography
              variant="subtitle1"
              className={classes.text}
              style={{ color: "gray" }}
            >{`${data.type}`}</Typography>
          </Fade>
          <Fade in={!inTransition} timeout={700}>
            <Typography
              variant="subtitle1"
              className={classes.text}
              style={{ color: "blue" }}
            >{`${data.year}`}</Typography>
          </Fade>
          {generateLink(classes.text, data)}
        </div>

        <Hidden xsDown>
          <div className={classes.imageFrame}>
            <Slide in={!inTransition} timeout={500} direction="left">
              <img
                src={data.image}
                alt="project image"
                className={classes.image}
              />
            </Slide>
          </div>
        </Hidden>
      </Grid>

      <Hidden smUp>
        <Grid item xs={12}>
          <Slide in={!inTransition} timeout={500} direction="left">
            <img
              src={data.image}
              alt="project image"
              className={classes.image}
            />
          </Slide>
        </Grid>
      </Hidden>
    </Grid>
  );
};

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
    textAlign: "center",
  },
  navIcon: {
    color: "#3f51b5",
  },
  transitionGroup: { width: "100%", minHeight: 500 },
}));

const Portfolio = (props) => {
  const classes = useStyles();
  const [currentProj, setCurrentProj] = useState(
    projects.length > 0 ? { data: projects[0], index: 0 } : null
  );
  const [shapeIndex, setShapeIndex] = useState(Math.floor(Math.random() * 4));
  const [colorIndex, setColorIndex] = useState(Math.floor(Math.random() * 4));
  const [inTransition, setInTransition] = useState(true);
  const [parentInTransition, setParentInTransition] = useState(true);
  const [showProj, setShowProj] = useState(true);

  const ref = useRef();
  const isVisible = useVisited(ref);

  const nextProject = () => {
    setShowProj(false);
    setCurrentProj((currentProj) => ({
      data: projects[currentProj.index + 1],
      index: currentProj.index + 1,
    }));
    setShapeIndex((shapeIndex) => Math.floor(Math.random() * 4));
    setColorIndex((colorIndex) => Math.floor(Math.random() * 4));
  };

  const prevProject = () => {
    setShowProj(false);
    setCurrentProj((currentProj) => ({
      data: projects[currentProj.index - 1],
      index: currentProj.index - 1,
    }));
    setShapeIndex((shapeIndex) => Math.floor(Math.random() * 4));
    setColorIndex((colorIndex) => Math.floor(Math.random() * 4));
  };

  return (
    <Fade
      in={isVisible}
      timeout={800}
      onEnter={() => {
        setParentInTransition((parentInTransition) => true);
      }}
      onEntered={() => {
        setParentInTransition((parentInTransition) => false);
      }}
    >
      <Container
        ref={ref}
        id="Projects"
        style={{ backgroundColor: "#fafafa" }}
        className={classes.container}
      >
        <Typography
          variant="h3"
          className={classes.text}
          style={{ fontWeight: 700, paddingTop: "5%" }}
        >
          Portfolio
        </Typography>
        <Typography
          variant="h5"
          className={classes.text}
          style={{ fontWeight: 500, color: "gray" }}
        >
          I am passionate about what I do
        </Typography>
        <div key="project_navigation" style={{ paddingTop: "5%" }}>
          <Grid container alignItems="center">
            <Grid item xs={2} md={1}>
              <Button onClick={prevProject} disabled={currentProj.index <= 0}>
                <NavigateBeforeIcon className={classes.navIcon} />
              </Button>
            </Grid>
            <Grid item xs={8} md={10}>
              <LinearProgress
                variant="determinate"
                value={(100 * currentProj.index) / (projects.length - 1)}
              />
            </Grid>
            <Grid item xs={2} md={1}>
              <Button
                onClick={nextProject}
                disabled={
                  currentProj.index < 0 ||
                  currentProj.index + 1 === projects.length
                }
              >
                <NavigateNextIcon className={classes.navIcon} />
              </Button>
            </Grid>
          </Grid>
        </div>
        <Fade
          in={showProj && !parentInTransition}
          timeout={1000}
          key={currentProj.data.title}
          onEnter={() => {
            setInTransition((inTransition) => true);
          }}
          onEntered={() => {
            setInTransition((inTransition) => false);
          }}
          onExited={() => {
            setInTransition((inTransition) => true);
            setShowProj(true);
          }}
        >
          <Item
            id={currentProj.data.index}
            data={currentProj.data}
            className={classes.projects}
            inTransition={inTransition}
            shapeIndex={shapeIndex}
            colorIndex={colorIndex}
          />
        </Fade>
      </Container>
    </Fade>
  );
};

export default Portfolio;
