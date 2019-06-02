import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_ADMIN":
      return { ...state, loading: true };
    case "ADMIN_ENTERED":
      return { ...state, user: action.user, loading: false, err: null };
    case "ADMIN_ENTER_FAILURE":
      return {
        ...state,
        loading: false,
        err: action.err,
        token: null
      };
    case "IDENTIFY_USER_REQUEST":
      return { ...state, loading: true };
    case "IDENTIFY_USER_SUCCESS":
      return { ...state, loading: false, user: action.user };
    case "IDENTIFY_USER_FAILURE":
      return {
        ...state,
        loading: false,
        err: action.err
      };

    case "SEND_MESSAGE_REQUEST":
      return { ...state, loading: true };
    case "SEND_MESSAGE_SUCCESS": {
      return { ...state, loading: false };
    }
    case "SEND_MESSAGE_FAILURE":
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
