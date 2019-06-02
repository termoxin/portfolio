import { takeEvery, takeLatest } from "redux-saga/effects";
import upload from "./user/uploadSaga";
import changePass from "./user/changePasswordSaga";
import getProjects from "./projects/getSaga";
import createProject from "./projects/createSaga";
import deleteProject from "./projects/deleteSaga";
import updateProjects from "./projects/updateSaga";

import getMessages from "./messages/getSaga";
import deleteMessage from "./messages/deleteSaga";
import updateMessage from "./messages/updateSaga";

export default function* actionDashboardWatcher() {
  yield takeEvery("UPLOAD_AVATAR_REQUEST", upload);
  yield takeEvery("CHANGE_PASSWORD_REQUEST", changePass);

  yield takeLatest("GET_PROJECTS_REQUEST", getProjects);
  yield takeEvery("CREATE_PROJECT_REQUEST", createProject);
  yield takeLatest("UPDATE_PROJECTS_REQUEST", updateProjects);
  yield takeEvery("DELETE_PROJECT_REQUEST", deleteProject);

  yield takeLatest("GET_MESSAGES_REQUEST", getMessages);
  yield takeEvery("DELETE_MESSAGE_REQUEST", deleteMessage);
  yield takeEvery("UPDATE_MESSAGE_REQUEST", updateMessage);
}
