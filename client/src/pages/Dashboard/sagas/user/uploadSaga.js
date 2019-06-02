import { put, call } from "redux-saga/effects";
import { avatarUploading } from "../../../../services/upload";

export default function* upload(action) {
  try {
    yield call(avatarUploading, action.payload);

    yield put({ type: "UPLOAD_AVATAR_SUCCESS" });
  } catch (err) {
    yield put({ type: "UPLOAD_AVATAR_FAILURE", err });
  }
}
