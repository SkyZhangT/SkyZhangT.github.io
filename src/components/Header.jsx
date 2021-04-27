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
  const { isAbout } = props;
  const classes = useStyles();

  // window.onscroll = function () {
  //   if (window.pageYOffset === 0) {
  //     alert("I AM AT THE TOP");
  //   }
  // };

  return (
    <div>
      <AppBar
        className={classes.appbar}
        id="header"
        style={{
          backgroundColor: isAbout ? "#252e37" : "#1565c0",
        }}
      >
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
            <Grid item xs={4} sm={7} lg={9} />

            <Grid item xs={2} sm={1}>
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
    </div>
  );
};

export default Header;
