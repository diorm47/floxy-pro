import { API_SUCCESS, API_FAIL, GET_STATISTICS_DATA } from './actionType';

export const getdashboardJobApiSuccess = (actionType, data) => ({
    type: API_SUCCESS,
    payload: { actionType, data }
});

export const getdashboardJobApiError = (actionType, error) => ({
    type: API_FAIL,
    payload: { actionType, error }
});


export const getStatisticData = (duartion) => ({
    type: GET_STATISTICS_DATA,
    payload: duartion
});