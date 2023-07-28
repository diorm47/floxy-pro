import {
    API_SUCCESS,
    API_FAIL,
    GET_WALLET_DATA
} from "./actionType";

const INIT_STATE = {
    walletbalanceData: []
};

const DashboardCrypto = (state = INIT_STATE, action) => {
    switch (action.type) {
        case API_SUCCESS:
            switch (action.payload.actionType) {
                case GET_WALLET_DATA:
                    return {
                        ...state,
                        walletbalanceData: action.payload.data
                    };
                default:
                    return state;
            }
        case API_FAIL:
            switch (action.payload.actionType) {
                case GET_WALLET_DATA:
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


export default DashboardCrypto;