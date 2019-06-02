import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPLOAD_AVATAR_REQUEST":
      return { ...state, loading: true };
    case "UPLOAD_AVATAR_SUCCESS":
      return { ...state, loading: false };
    case "UPLOAD_AVATAR_FAILURE":
      return {
        ...state,
        loading: false,
        err: action.err
      };

    case "CHANGE_PASSWORD_REQUEST":
      return { ...state, loading: true };
    case "CHANGE_PASSWORD_SUCCESS":
      return { ...state, loading: false, err: initialState.err };
    case "CHANGE_PASSWORD_FAILURE":
      return {
        ...state,
        loading: false,
        err: action.err
      };

    default:
      return state;
  }
};

export default reducer;
