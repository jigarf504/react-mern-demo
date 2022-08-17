import axios from "axios";

const url = "http://localhost:5000/posts";
export const getPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url + "/create", newPost);
export const updatePost = (id, post) =>
  axios.patch(url + `/update/${id}`, post);
export const deletePost = (id) => axios.delete(url + `/delete/${id}`);