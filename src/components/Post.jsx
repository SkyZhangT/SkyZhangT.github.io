import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MessageIcon from "@material-ui/icons/Message";
import { Button, Fab, Grid } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNextRounded";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

const useStyles = makeStyles((theme) => ({
  card: {
    borderSpacing: "20px",
  },
  media: {
    paddingTop: "60.25%", // 16:9
    position: "relative",
  },
  comment: {
    marginLeft: "auto",
  },
  avatar: {
    backgroundColor: red[500],
  },
  icon_row: {
    position: "absolute",
    top: "0",
    left: "0",
    minHeight: "100%",
  },
  row_cell: {
    position: "relative",
  },
  navbutton: {
    position: "absolute",
    background: "transparent",
    left: "0",
    right: "0",
    color: "black",
    minHeight: "100%",
    minWidth: "100%",
  },
}));

const Post = (props) => {
  const classes = useStyles();
  const [p_index, setIndex] = React.useState(0);
  const max = props.data.image.length;

  const next_photo = () => {
    if (p_index + 1 == max) {
      setIndex(0);
    } else {
      setIndex(p_index + 1);
    }
  };

  const prev_photo = () => {
    if (p_index == 0) {
      setIndex(max - 1);
    } else {
      setIndex(p_index - 1);
    }
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={0} lg={3}></Grid>
      <Grid item xs={12} lg={6}>
        <Card className={classes.card} raised={false}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                {props.data.username}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={props.data.title}
            subheader={props.data.date}
          />
          <CardMedia
            className={classes.media}
            image={props.data.image[p_index]}
            title={props.data.imagetitle}
          >
            <Grid container spacing={1} className={classes.icon_row}>
              <Grid xs={2} className={classes.row_cell}>
                <Button className={classes.navbutton} onClick={prev_photo}>
                  <NavigateBeforeIcon fontSize="large" />
                </Button>
              </Grid>

              <Grid xs={8}></Grid>

              <Grid xs={2} className={classes.row_cell}>
                <Button className={classes.navbutton} onClick={next_photo}>
                  <NavigateNextIcon fontSize="large" />
                </Button>
              </Grid>
            </Grid>
          </CardMedia>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.data.text}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton className={classes.comment} aria-label="comment">
              <MessageIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={0} lg={2}></Grid>
    </Grid>
  );
};

export default Post;
