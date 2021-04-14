import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
} from "@material-ui/core";
import DateRangeIcon from "@material-ui/icons/DateRange";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Route } from "react-router";
import { NavLink } from "react-router-dom";
import DateDrawer from "./DateDrawer";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  button: {
    margin: theme.spacing(1),
    color: "inherit",
    size: "large",
  },
  Typography: {
    margin: theme.spacing(2),
    size: "2rem",
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div>
      <AppBar>
        <Toolbar>
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
          <NavLink
            to="/"
            style={{ color: "yellow" }}
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            <Typography className={classes.Typography}>Gallery</Typography>
          </NavLink>

          <NavLink
            to="/about"
            style={{ color: "yellow" }}
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            <Typography className={classes.Typography}>About</Typography>
          </NavLink>
          <IconButton aria-label="login" edge="end" className={classes.button}>
            <AccountCircleIcon />
          </IconButton>
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
