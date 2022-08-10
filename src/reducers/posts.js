const reducer = (post = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return post;
    case "CREATE":
      return [...post, action.payload];
    default:
      return post;
  }
};
export default reducer;
