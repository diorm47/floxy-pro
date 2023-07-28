import {
    GET_JOB_LIST_FAIL,
    GET_JOB_LIST_SUCCESS,
    ADD_JOB_LIST_SUCCESS,
    ADD_JOB_LIST_FAIL,
    UPDATE_JOB_LIST_SUCCESS,
    UPDATE_JOB_LIST_FAIL,
    DELETE_JOB_LIST_SUCCESS,
    DELETE_JOB_LIST_FAIL,
    GET_APPLY_JOB_SUCCESS,
    GET_APPLY_JOB_FAIL,
    DELETE_APPLY_JOB_SUCCESS,
    DELETE_APPLY_JOB_FAIL,
} from "./actionTypes";

const INIT_STATE = {
    jobs: [],
    error: {},
}

const JobReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_JOB_LIST_SUCCESS:
            return {
                ...state,
                jobs: action.payload,
            };

        case GET_JOB_LIST_FAIL:
            return {
                ...state,
                error: action.payload,
            };

        case ADD_JOB_LIST_SUCCESS:
            return {
                ...state,
                jobs: [...state.jobs, action.payload],
            };

        case ADD_JOB_LIST_FAIL:
            return {
                ...state,
                error: action.payload,
            };

        case UPDATE_JOB_LIST_SUCCESS:
            return {
                ...state,
                jobs: state.jobs.map(job =>
                    job.id.toString() === action.payload.id.toString()
                        ? { job, ...action.payload }
                        : job
                ),
            };

        case UPDATE_JOB_LIST_FAIL:
            return {
                ...state,
                error: action.payload,
            };

        case DELETE_JOB_LIST_SUCCESS:
            return {
                ...state,
                jobs: state.jobs.filter(
                    job => job.id.toString() !== action.payload.toString()
                ),
            };

        case DELETE_JOB_LIST_FAIL:
            return {
                ...state,
                error: action.payload,
            };
        case GET_APPLY_JOB_SUCCESS:
            return {
                ...state,
                jobApply: action.payload,
            };
        case GET_APPLY_JOB_FAIL:
            return {
                ...state,
                error: action.payload,
            };
        case DELETE_APPLY_JOB_SUCCESS:
            return {
                ...state,
                jobApply: state.jobApply.filter(data => data.id.toString() !== action.payload.toString())
            };
        case DELETE_APPLY_JOB_FAIL:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state
    }
}

export default JobReducer;