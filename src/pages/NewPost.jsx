import React from "react";
import {
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  IconButton,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import getFormattedDate from "../utils/misc";
import SimpleDialog from "../components/Dialog";
import PublishIcon from "@material-ui/icons/Publish";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import axios from "axios";

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
  const [selectedImages, selectNew] = React.useState([]);
  const [uploadFiles, setUploadFiles] = React.useState([]);
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const [date, setDate] = React.useState(Date.now());
  const [token, setToken] = React.useState("");
  const [titleError, setTitleError] = React.useState(true);
  const [bodyError, setBodyError] = React.useState(true);
  const [dateError, setDateError] = React.useState(false);
  const [tokenError, setTokenError] = React.useState(true);
  const [imageLoading, setImageLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  // title input logic
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    if (event.target.value.length > 0) {
      setTitleError(false);
    } else {
      setTitleError(true);
    }
  };

  // set body description
  const handleBodyChange = (event) => {
    setBody(event.target.value);
    if (event.target.value.length > 0) {
      setBodyError(false);
    } else {
      setBodyError(true);
    }
  };

  // set token
  const handleTokenChange = (event) => {
    setToken(event.target.value);
    if (event.target.value.length > 0) {
      setTokenError(false);
    } else {
      setTokenError(true);
    }
  };

  // set date
  const handleDateChange = (event) => {
    let dateStr = event.target.value.split("-");
    let newDate = new Date(dateStr[0], dateStr[1] - 1, dateStr[2]);
    if (newDate.getTime() == NaN || newDate.getTime() > Date.now()) {
      setDateError(true);
    } else {
      setDateError(false);
      console.log(newDate.getTime());
      setDate(newDate.getTime());
    }
  };

  // image selecting logic
  const handleAddImage = (event) => {
    setImageLoading(true);
    let data = [];
    const reader = new FileReader();
    for (const f of event.target.files) {
      uploadFiles.push(f);
    }

    const readFile = (index) => {
      let file = event.target.files[index];
      if (index >= event.target.files.length) {
        selectNew(selectedImages.concat(data));
        setImageLoading(false);
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

  // image remove logic
  const handleRemoveImage = (index) => {
    return () => {
      selectedImages.splice(index, 1);
      selectNew(selectedImages.concat([]));
      uploadFiles.splice(index, 1);
      setUploadFiles(uploadFiles.concat([]));
    };
  };

  // display loading circle
  const loading = () => {
    if (imageLoading) {
      return (
        <div className={classes.line}>
          <CircularProgress />
        </div>
      );
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // upload logic
  const handleUpload = (e) => {
    if (titleError || bodyError || dateError || uploadFiles.length === 0) {
      handleClickOpen();
      return;
    }

    for (const f of uploadFiles) {
      let formdata = new FormData();
      formdata.append("image", f);

      axios({
        url: "http://localhost:8080/image",
        method: "post",
        data: formdata,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
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
                type="text"
                error={titleError}
                className={classes.title}
                onChange={handleTitleChange}
              />
              <TextField
                id="date"
                label="Date"
                type="date"
                error={dateError}
                defaultValue={getFormattedDate()}
                className={classes.date}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleDateChange}
              />
            </div>

            <div className={classes.line}>
              <TextField
                id="text"
                label="Description"
                type="text"
                error={bodyError}
                rows={4}
                rowsMax={4}
                multiline
                className={classes.description}
                onChange={handleBodyChange}
              />
            </div>

            {selectedImages.map((img, index) => (
              <div className={classes.line} key={"img" + index.toString()}>
                <img
                  src={img}
                  className={classes.image}
                  onClick={handleRemoveImage(index)}
                  alt="Failed to load"
                />
              </div>
            ))}

            {loading()}

            <div className={classes.line}>
              <input
                accept="image/*"
                className={classes.input}
                id="image"
                multiple
                type="file"
                onChange={handleAddImage}
              />
              <label htmlFor="image">
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
              <TextField
                id="token"
                label="Pass Token"
                type="text"
                error={tokenError}
                className={classes.title}
                onChange={handleTokenChange}
              />
            </div>

            <div className={classes.line}>
              <Button
                className={classes.publishButton}
                variant="outlined"
                onClick={handleUpload}
              >
                <PublishIcon></PublishIcon>
                <Typography>Publish</Typography>
              </Button>
            </div>
            <SimpleDialog
              open={open}
              onClose={handleClose}
              Notification="Invalid Post"
            />
          </Paper>
        </Grid>

        <Grid item lg={3}></Grid>
      </Grid>
    </div>
  );
};

export default NewPost;
