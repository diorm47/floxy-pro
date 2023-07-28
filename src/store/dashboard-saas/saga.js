import { call, put, takeEvery, all, fork } from "redux-saga/effects";

// Crypto Redux States
import { GET_TOP_SELLING_PRODUCT, GET_EARNING_DATA } from "./actionType";
import { DashboardSaasapiSuccess, DashboardSaasapiFail } from "./actions";

//Include Both Helper File with needed methods
import {
    topSellingData as topSellingDataApi,
    getEarningChartsData as getEarningChartsDataApi
}
    from "../../helpers/fakebackend_helper";

function* getSellingData({ payload: month }) {
    try {
        var response = yield call(topSellingDataApi, month);
        yield put(DashboardSaasapiSuccess(GET_TOP_SELLING_PRODUCT, response));
    } catch (error) {
        yield put(DashboardSaasapiFail(GET_TOP_SELLING_PRODUCT, error));
    }
}


function* getEarningChartsData({ payload: month }) {
    try {
        var response = yield call(getEarningChartsDataApi, month);
        yield put(DashboardSaasapiSuccess(GET_EARNING_DATA, response));
    } catch (error) {
        yield put(DashboardSaasapiFail(GET_EARNING_DATA, error));
    }
}

export function* watchGetSellingdata() {
    yield takeEvery(GET_TOP_SELLING_PRODUCT, getSellingData);
}

export function* watchGetEarningChartsData() {
    yield takeEvery(GET_EARNING_DATA, getEarningChartsData);
}


function* dashboardSaasSaga() {
    yield all([fork(watchGetSellingdata)],
        yield all([fork(watchGetEarningChartsData)])
    );
}

export default dashboardSaasSaga;
