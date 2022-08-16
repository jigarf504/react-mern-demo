import axios from "axios";

const url = "http://localhost:5000/posts";
export const posts = () => axios.get(url);
export const create = (newPost) => axios.post(url + "/create", newPost);
export const update = (id, post) => axios.patch(url + `/update/${id}`, post);