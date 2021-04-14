import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Post from "../components/Post";
import pic1 from "../res/pic1.jpg";

const fakedata = {
  username: "Sky Zhang",
  title: "OMS",
  date: "2020 Jan 1",
  image: pic1,
  text:
    "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
};

const Gallery = (props) => {
  return (
    <main alignItems="center" justifyContent="center">
      <Post data={fakedata} />
      <Post data={fakedata} />
    </main>
  );
};

export default Gallery;
