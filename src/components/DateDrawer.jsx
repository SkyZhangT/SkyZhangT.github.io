import React from "react";
import {
  makeStyles,
  List,
  ListItem,
  ListItemText,
  Drawer,
} from "@material-ui/core";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

const DateDrawer = (props) => {
  const classes = useStyles();
  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Drawer
        variant="temporary"
        anchor="left"
        open={props.open}
        onClose={props.Toggle}
        classes={{
          paper: classes.drawerPaper,
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <div>
          <div className={classes.toolbar} />
          <List>
            {["May", "April", "March", "Feburary"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </nav>
  );
};

export default DateDrawer;
