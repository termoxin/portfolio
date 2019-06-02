import initialState from "./initialState";
import actions from "../actionTypes";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.UPDATE_MESSAGE_REQUEST:
      return { ...state, loading: true };
    case actions.UPDATE_MESSAGE_SUCCESS:
      return { ...state, loading: false };
    case actions.UPDATE_PROJECT_FAILURE:
      return { ...state, loading: false, err: action.err };

    case actions.DELETE_MESSAGE_REQUEST:
      return { ...state, loading: true };
    case actions.DELETE_MESSAGE_SUCCESS:
      return { ...state, loading: false };
    case actions.DELETE_MESSAGE_FAILURE:
      return { ...state, loading: false, err: action.err };

    case actions.GET_MESSAGES_REQUEST:
      return { ...state, loading: true, err: initialState.err };
    case actions.GET_MESSAGES_SUCCESS:
      return { ...state, loading: false, messages: action.messages };
    case actions.GET_MESSAGES_FAILURE:
      return { ...state, loading: false, err: action.err };

    default:
      return state;
  }
};

export default reducer;
