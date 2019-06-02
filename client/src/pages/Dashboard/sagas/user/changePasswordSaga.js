import { put, call } from "redux-saga/effects";
import { changePassword } from "../../../../services/users";

export default function* changePass(action) {
  try {
    yield call(changePassword, action.payload);

    yield put({ type: "CHANGE_PASSWORD_SUCCESS" });
  } catch (err) {
    yield put({ type: "CHANGE_PASSWORD_FAILURE", err: err.response.data });
  }
}
