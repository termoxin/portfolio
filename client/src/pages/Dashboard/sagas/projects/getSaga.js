import { put, call } from "redux-saga/effects";
import { gettingProjects } from "../../../../services/projects";

export default function* getProjects() {
  try {
    const projects = yield call(gettingProjects);

    yield put({ type: "GET_PROJECTS_SUCCESS", projects });
  } catch (err) {
    yield put({ type: "GET_PROJECTS_FAILURE", err });
  }
}
