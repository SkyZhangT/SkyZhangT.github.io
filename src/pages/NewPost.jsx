import React from "react";
import {
  Fab,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  IconButton,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import getFormattedDate from "../utils/misc";
import PublishIcon from "@material-ui/icons/Publish";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    minHeight: "200px",
    padding: "1rem",
  },
  line: {
    paddingTop: theme.spacing(1),
  },
  title: {
    width: "45%",
    spacing: theme.spacing(1),
  },
  date: {
    width: "45%",
    marginLeft: "5%",
  },
  description: {
    width: "95%",
  },
  image: {
    maxWidth: "95%",
  },
  input: {
    display: "none",
  },
  imageButton: {
    backgroundColor: "black",
    color: "gray",
  },
  publishButton: {
    backgroundColor: "inherit",
    color: "orange",
  },
}));

const NewPost = (props) => {
  const classes = useStyles();
  const date = getFormattedDate();
  const [selectedImages, selectNew] = React.useState([]);

  const handleUploadClick = (event) => {
    let data = [];
    const reader = new FileReader();
    const readFile = (index) => {
      let file = event.target.files[index];
      if (index >= event.target.files.length) {
        selectNew(selectedImages.concat(data));
        return;
      }
      reader.onload = (event) => {
        data = data.concat(reader.result);
        readFile(index + 1);
      };
      reader.readAsDataURL(file);
    };

    readFile(0);
  };

  const removeImage = (index) => {
    return () => {
      selectedImages.splice(index, 1);
      selectNew(selectedImages.concat([]));
      console.log(selectedImages);
    };
  };

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item lg={3}></Grid>

        <Grid item xs={12} lg={6}>
          <Paper className={classes.root}>
            <div className={classes.line}>
              <TextField
                id="title"
                label="Title"
                defaultValue="Hello World"
                className={classes.title}
              />
              <TextField
                id="date"
                label="Date"
                type="date"
                defaultValue={date}
                className={classes.date}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>

            <div className={classes.line}>
              <TextField
                id="text"
                label="Description"
                rows={4}
                rowsMax={4}
                multiline
                className={classes.description}
              />
            </div>

            {selectedImages.map((img, index) => (
              <div className={classes.line}>
                <img
                  src={img}
                  className={classes.image}
                  onClick={removeImage(index)}
                />
              </div>
            ))}

            <div className={classes.line}>
              <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
                onChange={handleUploadClick}
              />
              <label htmlFor="contained-button-file">
                <IconButton
                  component="span"
                  className={classes.imageButton}
                  variant="outlined"
                >
                  <AddPhotoAlternateIcon />
                </IconButton>
              </label>
            </div>

            <div className={classes.line}>
              <Button className={classes.publishButton} variant="outlined">
                <PublishIcon></PublishIcon>
                <Typography>Publish</Typography>
              </Button>
            </div>
          </Paper>
        </Grid>

        <Grid item lg={3}></Grid>
      </Grid>
    </div>
  );
};

export default NewPost;
