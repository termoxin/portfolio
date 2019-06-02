import { put, call } from "redux-saga/effects";
import { sendingMessage } from "../services/messages";

export default function* sendMessage(action) {
  try {
    yield call(sendingMessage, action.payload);

    yield put({ type: "SEND_MESSAGE_SUCCESS" });
  } catch (err) {
    yield put({ type: "SEND_MESSAGE_FAILURE", err: err.response.data });
  }
}
