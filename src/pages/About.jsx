import React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import Fab from "@material-ui/core/Fab";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Sidebar from "../components/Sidebar";
import {
  Button,
  Container,
  Grid,
  Paper,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import bkg1 from "../res/bkg1.jpg";
import bkg2 from "../res/bkg2.jpg";
import Header from "../components/Header";
import port1 from "../res/port1.png";
import pic1 from "../res/bkg1.jpg";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import DevicesIcon from "@material-ui/icons/Devices";

const drawerWidth = 20;
const minWidth = 290;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: `${drawerWidth}%`,
      minWidth: minWidth,
      flexShrink: 0,
    },
    justifyContent: "center",
  },
  menuButton: {
    position: "fixed",
    bottom: theme.spacing(2),
    left: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    backgroundColor: "#eeeeee",
    width: `${drawerWidth}%`,
    minWidth: minWidth,
    zIndex: 3,
  },
  content: {
    position: "flex",
    width: "100%",
  },
  container: {
    width: "100%",
    maxWidth: "100%",
    marginLeft: 0,
    marginRight: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  introText: {
    padding: 5,
    fontFamily: "Open Sans",
    color: "white",
  },
  aboutText: {
    padding: 5,
    fontFamily: "Open Sans",
    color: "primary",
    textAlign: "left",
  },
  skillText: {
    padding: 5,
    fontFamily: "Open Sans",
    color: "primary",
    textAlign: "center",
  },
  card: {
    height: "100%",
  },
}));

const About = (props) => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const Skills = [
    {
      title: "Development",
      text:
        "asdfaswevadfsvaserfvbsefvsdfvszdfc vaserfdvarvadfvadfvaerfgserfbgvs fvzdcvaserfbaf vbazsdcvzs",
      image: "todo",
    },
    { title: "Development", text: "todo", image: pic1 },
    { title: "Development", text: "todo", image: "todo" },
    { title: "Development", text: "todo", image: "todo" },
    { title: "Development", text: "todo", image: "todo" },
    { title: "Development", text: "todo", image: "todo" },
    { title: "Development", text: "todo", image: "todo" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header isAbout={true} />
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="persistent"
            open
          >
            <div className={classes.toolbar} />
            <Sidebar />
          </Drawer>
        </Hidden>
        <Hidden mdUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <Toolbar />
            <Sidebar />
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <Toolbar className={classes.toolbar} />
        <Container
          style={{
            position: "relative",
            height: 650,
            backgroundPosition: "20% 70%",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${bkg2})`,
            backgroundSize: "cover",
            paddingTop: 100,
          }}
          className={classes.container}
        >
          <Typography
            variant="h6"
            className={classes.introText}
            style={{ fontWeight: 300 }}
          >
            Hello,
          </Typography>
          <Typography
            variant="h4"
            className={classes.introText}
            style={{ fontWeight: 700 }}
          >
            I am Tianyang Zhang
          </Typography>
          <Typography
            variant="h6"
            className={classes.introText}
            style={{ fontWeight: 500 }}
          >
            Photographer & Fullstack Developer
          </Typography>
        </Container>

        <Container
          id="About Me"
          style={{
            backgroundColor: "#fafafa",
            paddingTop: 0,
            justifyContent: "left",
          }}
          className={classes.container}
        >
          <Grid container>
            <Grid
              item
              xs={12}
              lg={6}
              style={{ justifyContent: "left", alignItems: "left" }}
            >
              <Typography
                variant="h3"
                className={classes.aboutText}
                style={{ fontWeight: 700, paddingTop: 100 }}
              >
                About Me
              </Typography>
              <Typography
                variant="h6"
                className={classes.aboutText}
                style={{ fontWeight: 500, color: "gray" }}
              >
                Photographer & Fullstack Developer,
              </Typography>
              <Typography
                variant="h6"
                className={classes.aboutText}
                style={{ fontWeight: 400 }}
              >
                I am Tianyang Zhang, I enjoy photograpy as well as design and
                develope software systems. While my background in computer
                science gave me adequate knowledge and skills to solve technical
                problems as a software engineer, my experience as a photographer
                elevated my aesthetics to appreciate and enjoy my life as a
                person. As a fullstack developer, I am capable of developing
                both backend APIs and services and frontend interfaces.
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
            <Grid item xs={12} lg={6}>
              <img
                src={port1}
                style={{
                  width: "100%",
                  maxHeight: 600,
                  objectFit: "cover",
                  objectPosition: "top",
                  overflow: "hidden",
                  marginBottom: 0,
                }}
              />
            </Grid>
          </Grid>
        </Container>

        <Container
          id="Skill"
          style={{ backgroundColor: "white", paddingBottom: 50 }}
          className={classes.container}
        >
          <Typography
            variant="h3"
            className={classes.skillText}
            style={{ fontWeight: 700, paddingTop: 100 }}
          >
            What I'am Doing
          </Typography>
          <Typography
            variant="h5"
            className={classes.skillText}
            style={{ fontWeight: 500, color: "gray" }}
          >
            I love what I do. I take great pride in what I do.
          </Typography>
          <Grid container spacing={4} style={{ paddingTop: 50 }}>
            {Skills.map((s, index) => {
              console.log(s);
              return (
                <Grid item xs={12} md={6} lg={3} key={`${index}`}>
                  <Card id={`card ${index}`} className={classes.card}>
                    <CardActionArea className={classes.card}>
                      <CardMedia
                        image={s.image}
                        title="Contemplative Reptile"
                        style={{ height: 140 }}
                      />
                      <CardContent className={classes.card}>
                        <Typography gutterBottom variant="h5" component="h2">
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
              );
            })}
          </Grid>
        </Container>

        <Container
          id="Projects"
          style={{ backgroundColor: "#fafafa" }}
          className={classes.container}
        >
          {" "}
          <Typography
            variant="h3"
            className={classes.skillText}
            style={{ fontWeight: 700, paddingTop: 100 }}
          >
            My Portfolio
          </Typography>
          <Typography
            variant="h5"
            className={classes.skillText}
            style={{ fontWeight: 500, color: "gray" }}
          >
            I am passionate about every project I participate in
          </Typography>
        </Container>
      </main>
      <Fab
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        className={classes.menuButton}
      >
        <MenuIcon />
      </Fab>
    </div>
  );
};

About.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default About;
