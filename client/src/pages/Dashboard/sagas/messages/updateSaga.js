import { put, call } from "redux-saga/effects";
import { updatingMessage } from "../../../../services/messages";
import { getItem } from "../../../../helpers/localStorage";

export default function* updateMessage(action) {
  try {
    const { id } = getItem("token");

    yield call(updatingMessage, {
      id: action.payload,
      token: id
    });

    yield put({ type: "UPDATE_MESSAGE_SUCCESS" });
  } catch (err) {
    yield put({ type: "UPDATE_MESSAGE_FAILURE", err: err.response.data });
  }
}
