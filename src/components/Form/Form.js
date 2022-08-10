import React, { useState } from "react";
import useStyle from "./style";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import Filebase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPosts } from "../../actions/posts";
const Form = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const clearHandler = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("helllo", createPosts);
    dispatch(createPosts(postData));
  };
  return (
    <>
      <Paper className={classes.paper}>
        <form
          method="post"
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleSubmit}
        >
          <Typography varient="h6">Creating memory</Typography>
          <TextField
            name="creator"
            varient="outlined"
            label="Creator"
            fullWidth
            value={postData.creator}
            onChange={(e) =>
              setPostData({ ...postData, creator: e.target.value })
            }
          />
          <TextField
            name="title"
            varient="outlined"
            label="title"
            fullWidth
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
          <TextField
            name="message"
            varient="outlined"
            label="message"
            fullWidth
            value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
          />
          <TextField
            name="tags"
            varient="outlined"
            label="tags"
            fullWidth
            value={postData.tags}
            onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
          />
          <div className={classes.fileInput}>
            <Filebase
              type="file"
              multiple="false"
              onDone={(base64) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            ></Filebase>
          </div>
          <Button
            fullWidth
            variant="contain"
            type="submit"
            className={classes.buttonSubmit}
            size="large"
            color="primary"
          >
            Submit
          </Button>
          <Button
            fullWidth
            variant="contain"
            size="small"
            color="danger"
            onClick={clearHandler}
          >
            Clear
          </Button>
        </form>
      </Paper>
    </>
  );
};

export default Form;
