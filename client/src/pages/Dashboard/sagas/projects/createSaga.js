import { put, call } from "redux-saga/effects";
import { creatingProject } from "../../../../services/projects";

export default function* createProject(action) {
  try {
    yield call(creatingProject, action.payload);

    yield put({ type: "CREATE_PROJECT_SUCCESS" });
  } catch (err) {
    yield put({ type: "CREATE_PROJECT_FAILURE", err: err.response.data });
  }
}
