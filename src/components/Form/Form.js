import React, { useState, useEffect } from "react";
import useStyle from "./style";
import { Button, Typography, Paper } from "@material-ui/core";
import Filebase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPosts, updatePosts } from "../../actions/posts";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
const Form = ({ currentId, setCurrentId }) => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const post = useSelector((state) =>
    currentId ? state.posts.find((post) => currentId === post._id) : null
  );

  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const clearHandler = () => {
    setCurrentId(null);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePosts(currentId, postData));
    } else {
      dispatch(createPosts(postData));
    }
    clearHandler();
  };
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  return (
    <>
      <Paper className={classes.paper}>
        <ValidatorForm
          method="post"
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleSubmit}
        >
          <Typography varient="h6">Creating memory</Typography>
          <TextValidator
            name="creator"
            varient="outlined"
            label="Creator"
            validators={["required"]}
            fullWidth
            errorMessages={["This field is required"]}
            value={postData.creator}
            onChange={(e) =>
              setPostData({ ...postData, creator: e.target.value })
            }
          />
          <TextValidator
            name="title"
            varient="outlined"
            label="title"
            validators={["required"]}
            fullWidth
            errorMessages={["This field is required"]}
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
          <TextValidator
            name="message"
            varient="outlined"
            label="message"
            validators={["required"]}
            fullWidth
            errorMessages={["This field is required"]}
            value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
          />
          <TextValidator
            name="tags"
            varient="outlined"
            label="tags"
            fullWidth
            value={postData.tags}
            onChange={(e) =>
              setPostData({ ...postData, tags: e.target.value.split(",") })
            }
          />
          <div className={classes.fileInput}>
            <Filebase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            ></Filebase>
          </div>
          <Button
            fullWidth
            variant="contained"
            type="submit"
            className={classes.buttonSubmit}
            size="large"
            color="primary"
          >
            Submit
          </Button>
          <Button
            fullWidth
            variant="contained"
            size="small"
            color="secondary"
            onClick={clearHandler}
          >
            Clear
          </Button>
        </ValidatorForm>
      </Paper>
    </>
  );
};

export default Form;
