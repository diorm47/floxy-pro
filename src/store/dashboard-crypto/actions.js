import {
    API_SUCCESS,
    API_FAIL,
    GET_WALLET_DATA
} from "./actionType";

export const DashboardCryptoapiSuccess = (actionType, data) => ({
    type: API_SUCCESS,
    payload: { actionType, data },
});

export const DashboardCryptoapiFail = (actionType, error) => ({
    type: API_FAIL,
    payload: { actionType, error },
});

/** Earning chart data */
export const getWalletbalanceData = (month) => ({
    type: GET_WALLET_DATA,
    payload: month
})