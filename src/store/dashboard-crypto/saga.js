import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import { GET_WALLET_DATA } from "./actionType";
import { DashboardCryptoapiSuccess, DashboardCryptoapiFail } from './actions';

//Include Both Helper File with needed methods
import { walletBalanceData as walletBalanceDataApi } from "../../helpers/fakebackend_helper";

function* getWalletDalanceData({ payload: month }) {
    try {
        var response = yield call(walletBalanceDataApi, month);
        yield put(DashboardCryptoapiSuccess(GET_WALLET_DATA, response));
    } catch (error) {
        yield put(DashboardCryptoapiFail(GET_WALLET_DATA, error));
    }
}

export function* watchGetWalletBalancedata() {
    yield takeEvery(GET_WALLET_DATA, getWalletDalanceData);
}

function* dashboardCryptoSaga() {
    yield all([fork(watchGetWalletBalancedata)]);
}

export default dashboardCryptoSaga;