import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function LinearProgressWithLabel(props) {
  var color = "primary";
  if (props.status < 0) {
    color = "secondary";
  }
  const success = () => {
    if (props.status === 0) {
      return `${Math.round(props.value)}%`;
    } else if (props.status === 1) {
      return `Finished`;
    } else if (props.status === -1) {
      return `Error`;
    } else {
      return `Ready`;
    }
  };
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress color={color} variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">
          {success()}
        </Typography>
      </Box>
    </Box>
  );
}

export default LinearProgressWithLabel;
