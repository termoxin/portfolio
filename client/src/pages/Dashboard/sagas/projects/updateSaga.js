import { put, call } from "redux-saga/effects";
import { updatingProjects } from "../../../../services/projects";
import { getItem } from "../../../../helpers/localStorage";

export default function* updateProjects(action) {
  try {
    const { id } = getItem("token");

    yield call(updatingProjects, {
      projects: action.payload,
      token: id
    });

    yield put({ type: "UPDATE_PROJECTS_SUCCESS" });
  } catch (err) {
    yield put({ type: "UPDATE_PROJECTS_FAILURE", err: err.response.data });
  }
}
