import { API_SUCCESS, API_FAIL, GET_VISITOR_DATA } from './actionType';

export const dashboardBlogApiSuccess = (actionType, data) => ({
    type: API_SUCCESS,
    payload: { actionType, data },
});

export const dashboardBlogApiError = (actionType, error) => ({
    type: API_FAIL,
    payload: { actionType, error },
});

export const dashboardBlogVisitorData = (visitor) => ({
    type : GET_VISITOR_DATA,
    payload : visitor
});