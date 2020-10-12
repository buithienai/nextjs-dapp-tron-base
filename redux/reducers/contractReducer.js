import { CREATE_CONTRACT_SUCCESS, CREATE_TRONWEB } from '../constants/appConstants';
const initialState = {
    listContract: {},
    tronWebState: {
        installed: false,
        loggedIn: false
    },
    tronWeb: null
};

export default function contractReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_CONTRACT_SUCCESS:
            return {
                ...state,
                listContract: action.data
            };
        case CREATE_TRONWEB:
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
}