import React from "react";
import { Dialog, DialogTitle } from "@material-ui/core";

function SimpleDialog(props) {
  const { onClose, open, Notification } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">{Notification}</DialogTitle>
    </Dialog>
  );
}

export default SimpleDialog;
