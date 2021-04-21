import React from "react";
import { Fab, Icon, IconButton, Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Post from "../components/Post";
import pic1 from "../res/pic1.jpg";
import pic2 from "../res/pic2.jpg";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";

const fakedata = {
  _id: "5264651",
  username: "SZ",
  title: "OMS",
  date: "2020 Jan 1",
  image: [pic2, pic1],
  text:
    "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    minHeight: 200,
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const Gallery = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Post data={fakedata} />
      <Post data={fakedata} />

      <Link to="/newpost" style={{ textDecoration: "none" }}>
        <Fab color="primary" className={classes.fab} aria-label="add">
          <AddIcon />
        </Fab>
      </Link>
    </div>
  );
};

export default Gallery;
