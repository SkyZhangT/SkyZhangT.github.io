import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  makeStyles,
  Grid,
  Button,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appbar: {
    display: "relative",
    backgroundColor: "#1565c0",
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
  toolbar: theme.mixins.toolbar,
}));

const Header = (props) => {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.appbar} id="header">
        <Toolbar className={classes.toolbar}>
          <Grid container spacing={1}>
            <Grid item xs={3} sm={2} lg={1}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button className={classes.link}>Gallery</Button>
              </Link>
            </Grid>

            <Grid item xs={3} sm={2} lg={1}>
              <Link to="/about" style={{ textDecoration: "none" }}>
                <Button className={classes.link}>About</Button>
              </Link>
            </Grid>

            {/*middle spacing*/}
            <Grid item xs={5} sm={7} lg={9} />

            <Grid item xs={1}>
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
    </div>
  );
};

export default Header;
