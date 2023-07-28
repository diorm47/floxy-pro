import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import { GET_STATISTICS_DATA } from "./actionType";
import { getdashboardJobApiSuccess, getdashboardJobApiError } from './actions';

//Include Both Helper File with needed methods
import { getStatisticData as getStatisticDataApi } from "../../helpers/fakebackend_helper";

function* getStatisticData({ payload: duartion }) {
    try {
        var response = yield call(getStatisticDataApi, duartion);
        yield put(getdashboardJobApiSuccess(GET_STATISTICS_DATA, response));
    } catch (error) {
        yield put(getdashboardJobApiError(GET_STATISTICS_DATA, error));
    }
}

export function* watchGetStaticdata() {
    yield takeEvery(GET_STATISTICS_DATA, getStatisticData);
}

function* dashboardJobsSaga() {
    yield all([fork(watchGetStaticdata)]);
}

export default dashboardJobsSaga;