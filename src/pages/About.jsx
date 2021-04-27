import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Fab from "@material-ui/core/Fab";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Sidebar from "../components/Sidebar";
import { Box, Container, Paper } from "@material-ui/core";
import bkg1 from "../res/bkg1.jpg";
import bkg2 from "../res/bkg2.jpg";
import Header from "../components/Header";

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
}));

const About = (props) => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

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
        <Container
          style={{
            position: "relative",

            height: 650,

            backgroundPosition: "20% 70%",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${bkg2})`,
            backgroundSize: "cover",
            paddingTop: 130,
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
          style={{ backgroundColor: "gray", height: 600 }}
          className={classes.container}
        ></Container>
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
