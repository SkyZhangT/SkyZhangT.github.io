import React, { useState } from "react";
import {
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  IconButton,
  CircularProgress,
  Toolbar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import getFormattedDate from "../utils/misc";
import makeRequest from "../utils/network";
import SimpleDialog from "../components/Dialog";
import LinearProgressWithLabel from "../components/ProgressBar";
import PublishIcon from "@material-ui/icons/Publish";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import Header from "../components/Header";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    minHeight: "200px",
    padding: "1rem",
  },
  line: {
    paddingTop: theme.spacing(1),
  },
  textField: {
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
  const [selectedImages, selectNew] = useState([]);
  const [uploadFiles, setUploadFiles] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState(Date.now());
  const [token, setToken] = useState("");
  const [titleError, setTitleError] = useState(true);
  const [bodyError, setBodyError] = useState(true);
  const [locationError, setLocationError] = useState(true);
  const [dateError, setDateError] = useState(false);
  const [tokenError, setTokenError] = useState(true);
  const [imageLoading, setImageLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [progress, setProgress] = useState(0);
  const [transferState, setTransferState] = useState(2);

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

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
    if (event.target.value.length > 0) {
      setLocationError(false);
    } else {
      setLocationError(true);
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
    if (newDate.getTime() == null || newDate.getTime() > Date.now()) {
      setDateError(true);
    } else {
      setDateError(false);
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

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  // upload logic
  const handleUpload = async (e) => {
    if (
      titleError ||
      bodyError ||
      dateError ||
      locationError ||
      uploadFiles.length === 0
    ) {
      handleOpenDialog();
      return;
    }
    setProgress(0);
    setTransferState(0);

    const total = uploadFiles.length + 1;
    var images = [];
    for (let i = 0; i < uploadFiles.length; i++) {
      let formdata = new FormData();
      formdata.append("image", uploadFiles[i]);

      try {
        let result = await makeRequest(
          "/image",
          "post",
          token,
          "multipart/form-data",
          formdata
        );
        if (result.status === 200 || result.status === 208) {
          images.push(result.data);
          setProgress((100 * (i + 1)) / total);
        } else {
          setTransferState(-1);
          return;
        }
      } catch (err) {
        setTransferState(-1);
        return;
      }
    }

    try {
      let result = await makeRequest(
        "/post",
        "post",
        token,
        "application/json",
        {
          user: "Sky Zhang",
          title: title,
          location: location,
          time: date,
          text: body,
          images: images,
          likes: 0,
        }
      );
      if (result.status === 200) {
        setProgress(100);
        setTransferState(1);
      } else {
        setTransferState(-1);
        return;
      }
    } catch (err) {
      setTransferState(-1);
      return;
    }
  };

  return (
    <div>
      <Header />
      <Toolbar />
      <Grid container spacing={1}>
        <Grid item lg={3}></Grid>

        <Grid item xs={12} lg={6}>
          <Paper className={classes.root}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <TextField
                  id="title"
                  label="Title"
                  type="text"
                  error={titleError}
                  className={classes.textField}
                  onChange={handleTitleChange}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <TextField
                  id="location"
                  label="Location"
                  type="text"
                  error={titleError}
                  className={classes.textField}
                  onChange={handleLocationChange}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <TextField
                  id="date"
                  label="Date"
                  type="date"
                  error={dateError}
                  defaultValue={getFormattedDate()}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  className={classes.textField}
                  onChange={handleDateChange}
                />
              </Grid>

              <Grid item xs={12} md={12}>
                <TextField
                  id="text"
                  label="Description"
                  type="text"
                  error={bodyError}
                  rows={4}
                  rowsMax={4}
                  multiline
                  className={classes.textField}
                  onChange={handleBodyChange}
                />
              </Grid>
            </Grid>

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
                disabled={transferState === 0}
              >
                <PublishIcon></PublishIcon>
                <Typography>Publish</Typography>
              </Button>
            </div>

            <div className={classes.line}>
              <LinearProgressWithLabel
                variant="determinate"
                status={transferState}
                value={progress}
              />
            </div>

            <SimpleDialog
              open={openDialog}
              onClose={handleCloseDialog}
              Notification="Invalid Post"
              action={
                <Button
                  autoFocus
                  onClick={handleCloseDialog}
                  color="primary"
                  style={{ margin: 0 }}
                >
                  ok
                </Button>
              }
            />
          </Paper>
        </Grid>

        <Grid item lg={3}></Grid>
      </Grid>
    </div>
  );
};

export default NewPost;
