import React from "react";
import { Typography, Avatar, List, ListItem, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import pic1 from "../res/avatar.jpg";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useOnScreen } from "../../../utils/OnScreenHook";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    justifyContent: "center",
  },
  list: { paddingTop: 100 },
  listItem: {
    position: "relative",
    justifyContent: "center",
  },
  image: {
    position: "absolute",
    width: 170,
    height: 170,
    backgroundColor: "gray",
  },
  text: {
    padding: theme.spacing(1),
  },
}));

const Sidebar = (props) => {
  const classes = useStyles();
  const aboutMeOnScreen = useOnScreen(props.aboutMe);
  const skillsOnScreen = useOnScreen(props.skills);
  const portfolioOnScreen = useOnScreen(props.portfolio);

  const aboutMeOnClick = () => props.aboutMe.current.scrollIntoView();
  const skillsOnClick = () => props.skills.current.scrollIntoView();
  const portfolioOnClick = () => props.portfolio.current.scrollIntoView();

  return (
    <div className={classes.root}>
      <List component="ul" aria-label="sidebar_list" className={classes.list}>
        <ListItem className={classes.listItem}>
          <Avatar alt="Tianyang Zhang" src={pic1} className={classes.image} />
        </ListItem>
        <ListItem className={classes.listItem} style={{ paddingTop: 100 }}>
          <Typography
            variant="h5"
            style={{ fontFamily: "Open Sans", fontWeight: 700 }}
            className={classes.text}
          >
            {" "}
            Tianyang(Sky) Zhang
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <List>
            <ListItem className={classes.listItem}>
              <EmailIcon />
              <Typography className={classes.text}>
                zhangtianyangsky@gmail.com
              </Typography>
            </ListItem>
            <ListItem className={classes.listItem}>
              <PhoneIcon />
              <Typography className={classes.text}>(614) 852-0566</Typography>
            </ListItem>
          </List>
        </ListItem>
        <ListItem className={classes.listItem}>
          <List>
            <ListItem
              button
              onClick={aboutMeOnClick}
              className={classes.listItem}
            >
              <Typography style={{ color: aboutMeOnScreen ? "red" : "black" }}>
                About Me
              </Typography>
            </ListItem>
            <ListItem
              button
              onClick={skillsOnClick}
              className={classes.listItem}
            >
              <Typography style={{ color: skillsOnScreen ? "red" : "black" }}>
                Skills
              </Typography>
            </ListItem>
            <ListItem
              button
              onClick={portfolioOnClick}
              className={classes.listItem}
            >
              <Typography
                style={{ color: portfolioOnScreen ? "red" : "black" }}
              >
                Portfolio
              </Typography>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Typography>Contact Me</Typography>
            </ListItem>
          </List>
        </ListItem>{" "}
        <ListItem className={classes.listItem}>
          <List>
            <ListItem className={classes.listItem}>
              <Link
                href="https://www.linkedin.com/in/tianyang-zhang-sky/"
                color="inherit"
              >
                <LinkedInIcon />
              </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Link href="https://github.com/SkyZhangT" color="inherit">
                <GitHubIcon />
              </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Link
                href="https://www.instagram.com/tianyan_zhang/"
                color="inherit"
              >
                <InstagramIcon />
              </Link>
            </ListItem>
          </List>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Typography style={{ color: "gray", textAlign: "center" }}>
            Made with React, Material-ui, and some love
            <FavoriteIcon />.
          </Typography>
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
