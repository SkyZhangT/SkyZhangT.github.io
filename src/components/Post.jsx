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
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "2",
    borderSpacing: "20px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  comment: {
    marginLeft: "auto",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Post = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={0} lg={3}></Grid>
      <Grid item xs={12} lg={6}>
        <Card className={classes.root} raised={false}>
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
            image={props.data.image}
            title={props.data.imagetitle}
          />
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
          <Collapse in={expanded} timeout="auto" unmountOnExit></Collapse>
        </Card>
      </Grid>
      <Grid item xs={0} lg={2}></Grid>
    </Grid>
  );
};

export default Post;
