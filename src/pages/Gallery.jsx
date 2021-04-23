import React, { useState, useRef, useCallback, useEffect } from "react";
import { Fab, Grid, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Post from "../components/Post";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
import axios from "axios";
import { root_url } from "../config/config";

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
  },
  card: {
    paddingTop: theme.spacing(0.5),
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
        console.log(err);
        setLoading(false);
        setError(true);
      });
  }, [pageNumber]);

  return { loading, error, posts, hasMore };
};

const Gallery = (props) => {
  const classes = useStyles();
  const [pageNumber, setPageNumber] = useState(0);
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
    if (loading) {
      return (
        <div>
          <CircularProgress />
        </div>
      );
    }
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item lg={3}></Grid>

        <Grid item xs={12} lg={6}>
          <div>
            {posts.map((post, index) => {
              if (posts.length === index + 1) {
                return (
                  <div className={classes.card} ref={lastPostRef} key={post.id}>
                    <Post data={post} />
                  </div>
                );
              } else {
                return (
                  <div className={classes.card} key={post.id}>
                    <Post data={post} />
                  </div>
                );
              }
            })}
          </div>
          {loadingButton()}
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