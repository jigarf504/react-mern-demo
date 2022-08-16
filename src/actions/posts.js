import * as api from "../api/index.js";
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.posts();
    console.log(data);
    return dispatch({ type: "FETCH_ALL", payload: data });
  } catch (e) {
    console.log(e);
  }
};

export const createPosts = (post) => async (dispatch) => {
  try {
    const { data } = api.create(post);
    return dispatch({ type: "CREATE", payload: data });
  } catch (e) {
    console.error(e);
  }
};

export const updatePosts = (id, post) => async (dispatch) => {
  try {
    const { data } = api.update(id, post);
    return dispatch({ type: "UPDATE", payload: data });
  } catch (e) {
    console.error(e);
  }
};
