import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
