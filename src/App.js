import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Post from "./components/Posts/Posts";
import { useDispatch } from "react-redux";
import Form from "./components/Form/Form";
import useStyle from "./style";
import { getPosts } from "./actions/posts";
const App = () => {
  const newLocal = "https://i.imgur.com/sKs65ZC.jpeg";
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(0);
  useEffect(() => {
    if (!currentId) dispatch(getPosts());
  }, [dispatch, currentId]);
  const classes = useStyle();
  return (
    <Container maxidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h4" align="center" className={classes.heading}>
          Memories
        </Typography>
        <img
          src={newLocal}
          alt="memories"
          className={classes.image}
          height={40}
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Post setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
