import { put, call } from "redux-saga/effects";
import { deletingProject } from "../../../../services/projects";
import { getItem } from "../../../../helpers/localStorage";

export default function* deleteProject(action) {
  try {
    const { id } = getItem("token");

    yield call(deletingProject, {
      token: id,
      ...action.payload
    });

    yield put({ type: "DELETE_PROJECT_SUCCESS" });
  } catch (err) {
    yield put({ type: "DELETE_PROJECT_FAILURE", err: err.response.data });
  }
}
