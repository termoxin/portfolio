import { put, call } from "redux-saga/effects";
import { getUser } from "../services/users";
import { getItem } from "../helpers/localStorage";

export default function* identifyUser(action) {
  try {
    const { id, username } = getItem("token");

    if (!id || !username) {
      yield put({
        type: "IDENTIFY_USER_FAILURE",
        err: { error: "Invalid data in localStorage" }
      });
    } else {
      const user = yield call(getUser, username, id);
      yield put({ type: "IDENTIFY_USER_SUCCESS", user });
    }
  } catch (error) {
    yield put({ type: "IDENTIFY_USER_FAILURE", err: error.response.data });
  }
}
