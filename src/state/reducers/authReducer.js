const initialState = {
  isLoggedIn : false,
  user : {},
}

export const authReducer = (state=initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return state;
    default:
      return state;
  }
};
