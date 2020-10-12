import { UPDATED_SOCKET } from '../constants/appConstants';
const initialState = {
    socket: null
};

export default function socketReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATED_SOCKET:
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
}