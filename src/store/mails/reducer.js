import {
  GET_MAILS_LIST_FAIL,
  GET_MAILS_LIST_SUCCESS,
  GET_SELECTED_MAILS_SUCCESS,
  GET_SELECTED_MAILS_FAIL,
  SET_FOLDER_SELECTED_MAILS_SUCCESS,
  SET_FOLDER_SELECTED_MAILS_FAIL,
  SELECT_FOLDER_SUCCESS,
  SELECT_FOLDER_FAIL,
  UPDATE_MAIL_SUCCESS,
  UPDATE_MAIL_FAIL
} from "./actionTypes";

const INIT_STATE = {
  mailslists: [],
  error: {},
  selectedmails: [],
  folderId: [],
  folders: []
};

const Mails = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_MAILS_LIST_SUCCESS:
      return {
        ...state,
        mailslists: action.payload,
      };

    case GET_MAILS_LIST_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case SELECT_FOLDER_SUCCESS:
      return {
        ...state,
        folders: action.payload,
      };

    case SELECT_FOLDER_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case GET_SELECTED_MAILS_SUCCESS:
      return {
        ...state,
        selectedmails: action.payload ? (action.payload.length > 1) ? action.payload : state.selectedmails.includes(action.payload)
          ? state.selectedmails.filter((id) => id !== action.payload)
          : [...state.selectedmails, action.payload] : []
      };

    case GET_SELECTED_MAILS_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case UPDATE_MAIL_SUCCESS:
      return {
        ...state,
        mailslists: state.mailslists.map(mail =>
          mail.id.toString() === action.payload.id.toString()
              ? { ...mail, ...action.payload }
              : mail
      )};

    case UPDATE_MAIL_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case SET_FOLDER_SELECTED_MAILS_SUCCESS:
      return {
        ...state,
        selectedmails: state.selectedmails,
        folderId: action.payload,
      };

    case SET_FOLDER_SELECTED_MAILS_FAIL:
      return {
        ...state,
        error: action.payload,
      };


    default:
      return state;
  }
};

export default Mails;