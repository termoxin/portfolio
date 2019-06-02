import reduceReducers from "reduce-reducers";
import initialState from "./initialState";
import messagesReducer from "./messages";
import projectsReducer from "./projects";
import settingsReducer from "./settings";

const reducer = reduceReducers(
  initialState,
  messagesReducer,
  projectsReducer,
  settingsReducer
);

export default reducer;
