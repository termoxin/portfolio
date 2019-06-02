import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PROJECTS_REQUEST":
      return { ...state, loading: true, err: initialState.err };
    case "GET_PROJECTS_SUCCESS":
      return { ...state, loading: false, projects: action.projects };
    case "GET_PROJECTS_FAILURE":
      return { ...state, loading: false, err: action.err };

    case "CREATE_PROJECT_REQUEST":
      return { ...state, loading: true };
    case "CREATE_PROJECT_SUCCESS":
      return { ...state, loading: false };
    case "CREATE_PROJECT_FAILURE":
      return { ...state, loading: false, err: action.err };

    case "DELETE_PROJECT_REQUEST":
      return { ...state, loading: true };
    case "DELETE_PROJECT_SUCCESS":
      return { ...state, loading: false };
    case "DELETE_PROJECT_FAILURE":
      return { ...state, loading: false, err: action.err };

    case "UPDATE_PROJECTS_REQUEST":
      return { ...state, loading: true };
    case "UPDATE_PROJECTS_SUCCESS":
      return { ...state, loading: false };
    case "UPDATE_PROJECTS_FAILURE":
      return { ...state, loading: false, err: action.err };

    default:
      return state;
  }
};

export default reducer;
