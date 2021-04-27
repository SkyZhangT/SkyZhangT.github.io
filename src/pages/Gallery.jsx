import React, { useState, useRef, useCallback, useEffect } from "react";
import {
  Fab,
  Grid,
  CircularProgress,
  Paper,
  Typography,
  TextField,
  Button,
  Toolbar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Post from "../components/Post";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
import axios from "axios";
import { root_url } from "../config/config";
import gintama from "../res/Gintama.jpeg";
import SimpleDialog from "../components/Dialog";
import makeRequest from "../utils/network";
import Header from "../components/Header";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    minHeight: 200,
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    backgroundColor: "#1565c0",
  },
  card: {
    paddingTop: theme.spacing(0.5),
  },
  errorCard: {
    padding: theme.spacing(3),
    textAlign: "justify",
  },
  errorMessage: {
    width: "100%",
    padding: theme.spacing(1),
    color: "Red",
  },
}));

const usePostSearch = (pageNumber) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    console.log(pageNumber);
    axios({
      method: "GET",
      url: root_url + "/post",
      params: { page: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setPosts((posts) => {
          return posts.concat(res.data);
        });
        setHasMore(res.data.length > 0);
        setLoading(false);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        if (error.response) {
          //reserved for future use
          switch (error.response.status) {
            case 429:
              break;
            default:
              break;
          }
        }
        setLoading(false);
        setError(true);
        console.log(err);
      });
  }, [pageNumber]);

  return { loading, error, posts, hasMore };
};

const Gallery = (props) => {
  const classes = useStyles();
  const [pageNumber, setPageNumber] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [delIndex, setDelIndex] = useState(0);
  const [token, setToken] = useState("");
  const [tokenError, setTokenError] = useState(true);
  const { posts, loading, error, hasMore } = usePostSearch(pageNumber);

  const observer = useRef();
  const lastPostRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber(pageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const loadingButton = () => {
    if (loading && !error) {
      return (
        <div className={classes.card}>
          <CircularProgress />
        </div>
      );
    }
  };

  const errorMessage = () => {
    if (error) {
      return (
        <div className={classes.card}>
          <Paper className={classes.errorCard}>
            <Typography variant="h5" className={classes.errorMessage}>
              Oops, looks like we failed to load the content. It is because
              either you need a new service provider or the backend server is on
              its vacation. It is definitely not due to any technical issues.
            </Typography>
            <img src={gintama} alt="error" className={classes.errorMessage} />
            <Typography
              variant="h5"
              className={classes.errorMessage}
              style={{ textAlign: "center" }}
            >
              Refresh the page to retry
            </Typography>
          </Paper>
        </div>
      );
    }
  };

  const handleOpenDialog = async (index) => {
    setOpenDialog(true);
    await setDelIndex(index);
    console.log(index);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleTokenChange = (event) => {
    setToken(event.target.value);
    if (event.target.value.length > 0) {
      setTokenError(false);
    } else {
      setTokenError(true);
    }
  };

  const handleDeletePost = async () => {
    try {
      let result = await makeRequest(
        "/post/" + posts[delIndex].id,
        "delete",
        token,
        "application/json",
        {
          id: posts[delIndex].id,
        }
      );
      console.log(result);
      window.location.reload(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={classes.root}>
      <Header />
      <Toolbar />
      <Grid container spacing={1}>
        <Grid item lg={3}></Grid>

        <Grid item xs={12} lg={6}>
          {posts.map((post, index) => {
            if (posts.length === index + 1) {
              return (
                <div className={classes.card} ref={lastPostRef} key={post.id}>
                  <Post
                    data={post}
                    index={index}
                    handleOpenDialog={handleOpenDialog}
                  />
                </div>
              );
            } else {
              return (
                <div className={classes.card} key={post.id}>
                  <Post
                    data={post}
                    index={index}
                    handleOpenDialog={handleOpenDialog}
                  />
                </div>
              );
            }
          })}

          <SimpleDialog
            open={openDialog}
            onClose={handleCloseDialog}
            Notification={`Do you really want to delete the post?`}
            content={
              <div key="content">
                <TextField
                  id="text"
                  label="Token"
                  type="text"
                  error={tokenError}
                  onChange={handleTokenChange}
                />
              </div>
            }
            action={
              <div>
                <Button onClick={handleDeletePost}>Yes</Button>
                <Button onClick={handleCloseDialog}>No</Button>
              </div>
            }
          />
          {loadingButton()}
          {errorMessage()}
        </Grid>

        <Grid item lg={3}></Grid>
      </Grid>

      <Link to="/newpost" style={{ textDecoration: "none" }}>
        <Fab color="primary" className={classes.fab} aria-label="add">
          <AddIcon />
        </Fab>
      </Link>
    </div>
  );
};

export default Gallery;
