import { posts, create } from "../api/index.js";
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = posts();
    return dispatch({ type: "FETCH_ALL", payload: data });
  } catch (e) {
    console.log(e);
  }
};

export const createPosts = (post) => async (dispatch) => {
  try {
    const { data } = create(post);
    return dispatch({ type: "CREATE", payload: data });
  } catch (e) {
    console.error(e);
  }
};
