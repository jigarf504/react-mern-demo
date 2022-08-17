import * as api from "../api/index.js";
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.getPosts();
    console.log(data);
    return dispatch({ type: "FETCH_ALL", payload: data });
  } catch (e) {
    console.log(e);
  }
};

export const createPosts = (post) => async (dispatch) => {
  try {
    const { data } = api.createPost(post);
    return dispatch({ type: "CREATE", payload: data });
  } catch (e) {
    console.error(e);
  }
};

export const updatePosts = (id, post) => async (dispatch) => {
  try {
    const { data } = api.updatePost(id, post);
    return dispatch({ type: "UPDATE", payload: data });
  } catch (e) {
    console.error(e);
  }
};

export const deletePosts = (id) => async (dispatch) => {
  try {
    const { data } = await api.deletePost(id);
    console.log(data);
    if (data.status) {
      return dispatch({ type: "DELETE", payload: id });
    }
    console.log("Something wrong happened. please try again");
  } catch (e) {
    console.error(e);
  }
};