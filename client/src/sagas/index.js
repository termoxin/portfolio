import { put, call, all, takeEvery } from "redux-saga/effects";
import { createToken } from "../services/tokens";
import { getUser } from "../services/users";
import { setItem } from "../helpers/localStorage";
import identifyUser from "./users";
import sendMessage from "./messages";
import actionDashboardWatcher from "../pages/Dashboard/sagas";

function* authAdmin(action) {
  try {
    const token = yield call(createToken, action.payload);
    const user = yield call(getUser, token.username, token.id);

    setItem("token", token);

    yield put({ type: "ADMIN_ENTERED", user });
  } catch (err) {
    yield put({ type: "ADMIN_ENTER_FAILURE", err: err.response.data });
  }
}

function* actionWatcher() {
  yield takeEvery("AUTH_ADMIN", authAdmin);
  yield takeEvery("IDENTIFY_USER_REQUEST", identifyUser);
  yield takeEvery("SEND_MESSAGE_REQUEST", sendMessage);
}

export default function* rootSaga() {
  yield all([actionWatcher(), actionDashboardWatcher()]);
}
