import { API_SUCCESS, API_FAIL, GET_STATISTICS_DATA } from './actionType';

const INIT_STATE = {
    statistic_data: []
};

const DashboardJob = (state = INIT_STATE, action) => {
    switch (action.type) {
        case API_SUCCESS:
            switch (action.payload.actionType) {
                case GET_STATISTICS_DATA:
                    return {
                        ...state,
                        statistic_data: action.payload.data
                    };
                default:
                    return state;
            }
        case API_FAIL:
            switch (action.payload.actionType) {
                case GET_STATISTICS_DATA:
                    return {
                        ...state,
                        error: action.payload.error
                    };
                default:
                    return state;

            }
        default:
            return state;
    }
};

export default DashboardJob;