import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  makeStyles,
  Grid,
  Button,
} from "@material-ui/core";
import DateRangeIcon from "@material-ui/icons/DateRange";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import DateDrawer from "./DateDrawer";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  link: {
    position: "relative",
    top: "1em",
    background: "white",
  },
  button: {
    margin: theme.spacing(1),
    color: "inherit",
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  console.log(window.location.pathname);

  return (
    <div>
      <AppBar className={classes.root}>
        <Toolbar>
          <Grid container spacing={2}>
            <Grid item xs={2} md={1}>
              <Route exact path="/">
                <IconButton
                  aria-label="dates"
                  edge="end"
                  className={classes.button}
                  onClick={handleDrawerToggle}
                >
                  <DateRangeIcon />
                </IconButton>
              </Route>
            </Grid>

            <Grid item xs={3} md={2} lg={1}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button className={classes.link}>Gallery</Button>
              </Link>
            </Grid>

            <Grid item xs={3} md={2} lg={1}>
              <Link to="/about" style={{ textDecoration: "none" }}>
                <Button className={classes.link}>About</Button>
              </Link>
            </Grid>

            {/*middle spacing*/}
            <Grid item xs={2} md={6} lg={8} />

            <Grid item xs={2} md={1}>
              <IconButton
                aria-label="login"
                edge="end"
                className={classes.button}
              >
                <AccountCircleIcon size="medium" />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />

      <Route exact path="/">
        <DateDrawer open={drawerOpen} Toggle={handleDrawerToggle} />
      </Route>
    </div>
  );
};

export default Header;
