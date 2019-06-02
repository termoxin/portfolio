import { combineReducers, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import reduceReducers from "reduce-reducers";
import rootSaga from "../sagas";
import initialState from "./initialState";
import auth from "./auth";
import message from "./message";
import dashboard from "../pages/Dashboard/reducers";

const reducer = reduceReducers(initialState, auth, message);

const rootReducer = combineReducers({
  auth: reducer,
  dashboard
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);

export default store;
