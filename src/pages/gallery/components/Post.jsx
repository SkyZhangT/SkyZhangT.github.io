import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
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
  Tooltip,
  Paper,
} from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNextRounded";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import { root_url } from "../../../config/config";
import makeRequest from "../../../utils/network";
import DeleteIcon from "@material-ui/icons/Delete";
import FlagIcon from "@material-ui/icons/Flag";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
  },
  media: {
    paddingTop: "77.25%", // 16:9
    position: "relative",
    height: "100%",
    objectPosition: "top",
    backgroundColor: "#e8eaed",
    media: {
      objectFit: "fill",
    },
  },
  image: {
    width: "100%",
    height: "100%",
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
  const { data, index, handleOpenDialog } = props;

  const [p_index, setIndex] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [faved, setFaved] = useState(false);
  const [likes, setLikes] = useState(data.likes);

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

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteClick = (e) => {
    handleOpenDialog(index);
    setAnchorEl(null);
  };

  const handleFlagClick = (e) => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Card raised={false} className={classes.card}>
        <CardHeader
          avatar={
            <Link to="/about" style={{ textDecoration: "none" }}>
              <Avatar aria-label="avatar" className={classes.avatar}>
                {name}
              </Avatar>
            </Link>
          }
          action={
            <div>
              <Tooltip title="more actions" aria-label="three dots">
                <IconButton aria-label="settings" onClick={handleMenuClick}>
                  <MoreVertIcon />
                </IconButton>
              </Tooltip>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <Tooltip title="delete this post" aria-label="delete">
                  <MenuItem onClick={handleFlagClick}>
                    <FlagIcon style={{ color: "gray" }} />
                    <Typography>Flag as inappropriate</Typography>
                  </MenuItem>
                </Tooltip>
                <Tooltip title="delete this post" aria-label="delete">
                  <MenuItem onClick={handleDeleteClick}>
                    <DeleteIcon style={{ color: "gray" }} />
                    <Typography>Delete</Typography>
                  </MenuItem>
                </Tooltip>
              </Menu>
            </div>
          }
          title={`${data.title} @ ${data.location}`}
          subheader={date.toString()}
        />
        <CardMedia
          className={classes.media}
          image={`${root_url}${data.images[p_index]}`}
          classes={{ img: classes.image }}
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
          <Tooltip title="Like" aria-label="like">
            <IconButton
              aria-label="favorites"
              onClick={handleFavClick}
              style={{ color: faved ? "#f44336" : "default" }}
            >
              <FavoriteIcon />
            </IconButton>
          </Tooltip>
          <Typography>{`${likes}`}</Typography>
          {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
          <IconButton className={classes.comment} aria-label="comment">
            <MessageIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Post;
