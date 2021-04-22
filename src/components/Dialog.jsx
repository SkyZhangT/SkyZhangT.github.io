import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Dialog,
  DialogTitle,
  List,
  ListItem,
} from "@material-ui/core";

const useStyles = makeStyles({
  confirm: {
    textAlign: "center",
  },
});

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, open, Notification } = props;

  const handleClose = () => {
    onClose();
  };

  const handleListItemClick = () => {
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">{Notification}</DialogTitle>
      <List>
        <ListItem button onClick={handleListItemClick}>
          <Typography className={classes.confirm}>OK</Typography>
        </ListItem>
      </List>
    </Dialog>
  );
}

export default SimpleDialog;
