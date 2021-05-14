import React from "react";
import { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Fade,
  Typography,
  Slide,
} from "@material-ui/core";
import { skills } from "../content";
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
    textAlign: "center",
  },
  card: {
    height: "100%",
    backgroundColor: "#fafafa",
  },
}));

const Skills = (props) => {
  const classes = useStyles();

  const ref = useRef();
  const isVisible = useVisited(ref);
  const [inTransition, setInTransition] = useState(true);

  return (
    <Fade
      in={isVisible}
      timeout={800}
      onEnter={() => {
        setInTransition((inTransition) => true);
      }}
      onEntered={() => {
        setInTransition((inTransition) => false);
      }}
    >
      <Container
        ref={ref}
        id="Skill"
        style={{ backgroundColor: "white", paddingBottom: 50 }}
        className={classes.container}
      >
        <Typography
          variant="h3"
          className={classes.text}
          style={{ fontWeight: 700, paddingTop: "5%" }}
        >
          What I'am Doing
        </Typography>
        <Typography
          variant="h5"
          className={classes.text}
          style={{ fontWeight: 500, color: "gray" }}
        >
          I love what I do. I take great pride in what I do.
        </Typography>
        <Grid container spacing={4} style={{ paddingTop: 50 }}>
          {skills.map((s, index) => {
            return (
              <Slide
                in={!inTransition}
                timeout={(index + 1) * 100 + 350}
                direction="up"
                key={`${index}`}
              >
                <Grid item xs={12} md={6} lg={3}>
                  <Card id={`card ${index}`} className={classes.card}>
                    <CardActionArea className={classes.card}>
                      <CardMedia
                        image={s.image}
                        title="Contemplative Reptile"
                        style={{ height: 170 }}
                      />
                      <CardContent className={classes.card}>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="h2"
                          style={{ fontWeight: 500 }}
                        >
                          {s.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {s.text}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              </Slide>
            );
          })}
        </Grid>
      </Container>
    </Fade>
  );
};

export default Skills;
