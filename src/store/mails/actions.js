import {
  GET_MAILS_LIST,
  GET_MAILS_LIST_FAIL,
  GET_MAILS_LIST_SUCCESS,
  GET_SELECTED_MAILS,
  GET_SELECTED_MAILS_SUCCESS,
  GET_SELECTED_MAILS_FAIL,
  SET_FOLDER_SELECTED_MAILS,
  SET_FOLDER_SELECTED_MAILS_SUCCESS,
  SET_FOLDER_SELECTED_MAILS_FAIL,
  SELECT_FOLDER,
  SELECT_FOLDER_SUCCESS,
  SELECT_FOLDER_FAIL,
  UPDATE_MAIL,
  UPDATE_MAIL_SUCCESS,
  UPDATE_MAIL_FAIL
} from "./actionTypes";

export const getMailsLists = (filter) => ({
  type: GET_MAILS_LIST,
  payload: filter,
});

export const getMailsListsSuccess = mailslists => ({
  type: GET_MAILS_LIST_SUCCESS,
  payload: mailslists,
});

export const getMailsListsFail = error => ({
  type: GET_MAILS_LIST_FAIL,
  payload: error,
});

export const getSelectedMails = (selectedmails) => ({
  type: GET_SELECTED_MAILS,
  payload: selectedmails
});

export const getSelectedMailsSuccess = (selectedmails) => ({
  type: GET_SELECTED_MAILS_SUCCESS,
  payload: selectedmails,
});

export const getSelectedMailsFail = error => ({
  type: GET_SELECTED_MAILS_FAIL,
  payload: error,
});

export const setFolderOnSelectedMails = (selectedmails, folderId, activeTab) => ({
  type: SET_FOLDER_SELECTED_MAILS,
  payload: { selectedmails, folderId, activeTab }
});

export const setFolderOnSelectedMailsSuccess = () => ({
  type: SET_FOLDER_SELECTED_MAILS_SUCCESS
});

export const setFolderOnSelectedMailsFail = error => ({
  type: SET_FOLDER_SELECTED_MAILS_FAIL,
  payload: error,
});

export const selectFolders = () => ({
  type: SELECT_FOLDER
});

export const selectFoldersSuccess = folders => ({
  type: SELECT_FOLDER_SUCCESS,
  payload: folders,
});

export const selectFoldersFail = error => ({
  type: SELECT_FOLDER_FAIL,
  payload: error,
});

export const updateMail = mail => ({
  type : UPDATE_MAIL,
  payload : mail
})

export const updateMailSuccess = mail => ({
  type : UPDATE_MAIL_SUCCESS,
  payload : mail
})

export const updateMailFail = error => ({
  type : UPDATE_MAIL_FAIL,
  payload : error
})
