import { API_SUCCESS, API_FAIL, GET_VISITOR_DATA } from './actionType';

const INIT_STATE = {
    visitor: []
};

const DashboardBlog = (state = INIT_STATE, action) => {
    switch (action.type) {
        case API_SUCCESS:
            switch (action.payload.actionType) {
                case GET_VISITOR_DATA:
                    return {
                        ...state,
                        visitor: action.payload.data
                    };
                default:
                    return state;
            }
        case API_FAIL:
            switch (action.payload.actionType) {
                case GET_VISITOR_DATA:
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

export default DashboardBlog;