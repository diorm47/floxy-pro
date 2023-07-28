import { call, put, takeEvery } from "redux-saga/effects";

// Crypto Redux States
import {
  GET_MAILS_LIST,
  GET_SELECTED_MAILS,
  SET_FOLDER_SELECTED_MAILS,
  SELECT_FOLDER,
  UPDATE_MAIL
} from "./actionTypes";

import {
  getMailsListsSuccess,
  getMailsListsFail,
  getSelectedMailsSuccess,
  getSelectedMailsFail,
  setFolderOnSelectedMailsSuccess,
  setFolderOnSelectedMailsFail,
  selectFoldersSuccess,
  selectFoldersFail,
  updateMailSuccess,
  updateMailFail
} from "./actions";

//Include Both Helper File with needed methods
import {
  getMailsLists,
  getselectedmails,
  setfolderonmails,
  selectFolders,
  updateMail
} from "../../helpers/fakebackend_helper";

function* fetchMailsLists({ payload: filter }) {
  try {
    const response = yield call(getMailsLists, filter);
    yield put(getMailsListsSuccess(response));
  } catch (error) {
    yield put(getMailsListsFail(error));
  }
}

function* onSelectFolders() {
  try {
    const response = yield call(selectFolders);
    yield put(selectFoldersSuccess(response));
  } catch (error) {
    yield put(selectFoldersFail(error));
  }
}

function* onGetSelectedMails({ payload: selectedmails }) {
  try {
    const response = yield call(getselectedmails, selectedmails);
    yield put(getSelectedMailsSuccess(response));
  } catch (error) {
    yield put(getSelectedMailsFail(error));
  }
}

function* onSetFolderOnSelectedMails({ payload: { selectedmails, folderId, activeTab } }) {
  try {
    const response = yield call(setfolderonmails, selectedmails, folderId);
    yield put(setFolderOnSelectedMailsSuccess(response));

    try {
      const newresponse = yield call(getMailsLists, parseInt(activeTab));
      yield put(getMailsListsSuccess(newresponse));
    } catch (error) {
      yield put(getMailsListsFail(error));
    }

    try {
      const response = yield call(getselectedmails, null);
      yield put(getSelectedMailsSuccess(response));
    } catch (error) {
      yield put(getSelectedMailsFail(error));
    }

  } catch (error) {
    yield put(setFolderOnSelectedMailsFail(error));
  }
}

function* onUpdateMail({ payload: mail }) {
  try {
    const response = yield call(updateMail, mail)
    yield put(updateMailSuccess(response));
  } catch (error) {
    yield put(updateMailFail(error))
  }
}

function* mailsSaga() {
    yield takeEvery(GET_MAILS_LIST, fetchMailsLists),
    yield takeEvery(SELECT_FOLDER, onSelectFolders),
    yield takeEvery(GET_SELECTED_MAILS, onGetSelectedMails),
    yield takeEvery(SET_FOLDER_SELECTED_MAILS, onSetFolderOnSelectedMails),
    yield takeEvery(UPDATE_MAIL, onUpdateMail);
}

export default mailsSaga;