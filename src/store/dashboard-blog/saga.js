import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import { GET_VISITOR_DATA } from './actionType';
import { dashboardBlogApiSuccess, dashboardBlogApiError } from './actions';

//Include Both Helper File with needed methods
import { visitorData as visitorDataApi } from "../../helpers/fakebackend_helper";

function* getvisitorData({ payload: visitor }) {
    try {
        var response = yield call(visitorDataApi, visitor);
        yield put(dashboardBlogApiSuccess(GET_VISITOR_DATA, response));
    } catch (error) {
        yield put(dashboardBlogApiError(GET_VISITOR_DATA, error));
    }
}

export function* watchGetvisitordata() {
    yield takeEvery(GET_VISITOR_DATA, getvisitorData);
}

function* dashboardVisitorSaga() {
    yield all([fork(watchGetvisitordata)]);
}

export default dashboardVisitorSaga;