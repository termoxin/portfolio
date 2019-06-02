import { put, call } from "redux-saga/effects";
import { gettingMessages } from "../../../../services/messages";

export default function* getMessages() {
  try {
    const messages = yield call(gettingMessages);

    yield put({ type: "GET_MESSAGES_SUCCESS", messages });
  } catch (err) {
    yield put({ type: "GET_MESSAGES_FAILURE", err: err.response.data });
  }
}
