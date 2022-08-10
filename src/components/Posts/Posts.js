import React from "react";
import Post from "./Post/Post";
import useStyle from "./style";
import { useSelector } from "react-redux";
const Posts = () => {
  const classes = useStyle();
  const posts = useSelector((state) => state.posts);
  return (
    <>
      <h2>Posts</h2>
      <Post />
      <Post />
      <Post />
      <Post />
    </>
  );
};

export default Posts;
