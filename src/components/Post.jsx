import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MessageIcon from "@material-ui/icons/Message";
import {
  Button,
  Menu,
  Card,
  MenuItem,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Radio,
  CardActionArea,
  Paper,
  Box,
} from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNextRounded";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import { root_url } from "../config/config";
import DeleteIcon from "@material-ui/icons/Delete";
import makeRequest from "../utils/network";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
  },
  media: {
    paddingTop: "77.25%", // 16:9
    position: "relative",
    height: "100%",
    objectFit: "fill",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e8eaed",
  },
  navbeforebutton: {
    position: "absolute",
    background: "transparent",
    color: "black",
    top: "0",
    left: "0",
    minHeight: "100%",
    minWidth: "10%",
  },
  navnextbutton: {
    position: "absolute",
    background: "transparent",
    color: "black",
    top: "0",
    right: "0",
    minHeight: "100%",
    minWidth: "10%",
  },
  imageClick: {
    position: "absolute",
    background: "transparent",
    top: "10%",
    right: "25%",
    minHeight: "80%",
    minWidth: "50%",
  },
  radioGroup: { justifyContent: "center" },
  comment: {
    marginLeft: "auto",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Post = (props) => {
  const classes = useStyles();
  const { window, data } = props;
  const [p_index, setIndex] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [faved, setFaved] = React.useState(false);
  const [likes, setLikes] = React.useState(data.likes);

  var date = new Date(data.time);
  const max = data.images.length;
  var name = "";

  data.user.split(" ").forEach((s) => {
    name = name + s.charAt(0);
  });

  const next_photo = () => {
    if (p_index + 1 === max) {
      setIndex(0);
    } else {
      setIndex(p_index + 1);
    }
  };

  const prev_photo = () => {
    if (p_index === 0) {
      setIndex(max - 1);
    } else {
      setIndex(p_index - 1);
    }
  };

  const navButton = () => {
    if (data.images.length > 1) {
      return (
        <React.Fragment>
          <Button className={classes.navbeforebutton} onClick={prev_photo}>
            <NavigateBeforeIcon fontSize="large" />
          </Button>

          <Button className={classes.navnextbutton} onClick={next_photo}>
            <NavigateNextIcon fontSize="large" />
          </Button>
        </React.Fragment>
      );
    } else {
      return;
    }
  };

  const radioGroup = () => {
    if (data.images.length > 1) {
      return (
        <CardActions disableSpacing className={classes.radioGroup}>
          {data.images.map((_, index) => {
            return (
              <Radio
                checked={p_index === index}
                onChange={handleRadioChange}
                name="radio-button"
                size="small"
                value={index}
                key={index}
              />
            );
          })}
        </CardActions>
      );
    } else {
      return;
    }
  };

  const handleRadioChange = (e) => {
    setIndex(parseInt(e.target.value));
  };

  const handleImageClick = (e) => {
    window.open(`${root_url}${data.images[p_index]}`, "_blank");
  };

  const handleFavClick = async (e) => {
    if (!faved) {
      try {
        let res = await makeRequest(
          "/like/" + data.id,
          "put",
          "",
          "application/json",
          { inc: true }
        );
        if (res.status === 200) {
          setLikes(res.data);
        } else {
          console.log(res.status);
          return;
        }
      } catch (err) {
        return;
      }
      setFaved(true);
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card raised={false} className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="avatar" className={classes.avatar}>
            {name}
          </Avatar>
        }
        action={
          <div>
            <IconButton aria-label="settings" onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <DeleteIcon />
                <Typography>Delete</Typography>
              </MenuItem>
            </Menu>
          </div>
        }
        title={`${data.title} @ ${data.location}`}
        subheader={date.toString()}
      />
      <CardMedia
        className={classes.media}
        image={`${root_url}${data.images[p_index]}`}
      >
        {navButton()}

        <Paper
          onClick={handleImageClick}
          className={classes.imageClick}
          elevation={0}
        />
      </CardMedia>
      {radioGroup()}
      <CardContent>
        <Typography variant={"body2"} color="textPrimary" component="p">
          {data.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="favorites"
          onClick={handleFavClick}
          style={{ color: faved ? "#f44336" : "default" }}
        >
          <FavoriteIcon />
        </IconButton>
        <Typography>{`${likes}`}</Typography>
        {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        <IconButton className={classes.comment} aria-label="comment">
          <MessageIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

Post.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
  data: {
    id: String,
    user: String,
    title: String,
    location: String,
    time: Int32Array,
    text: String,
    images: Array,
    likes: Int32Array,
    comments: Array,
  },
};

export default Post;
