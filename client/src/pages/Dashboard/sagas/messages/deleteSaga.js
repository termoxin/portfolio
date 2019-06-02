import { put, call } from "redux-saga/effects";
import { deletingMessage } from "../../../../services/messages";
import { getItem } from "../../../../helpers/localStorage";

export default function* deleteMessage(action) {
  try {
    const { id } = getItem("token");

    yield call(deletingMessage, {
      id: action.payload,
      token: id
    });

    yield put({ type: "DELETE_MESSAGE_SUCCESS" });
  } catch (err) {
    yield put({ type: "DELETE_MESSAGE_FAILURE", err: err.response.data });
  }
}
