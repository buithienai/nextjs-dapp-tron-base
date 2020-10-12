import { combineReducers } from 'redux';
import contractReducer from './contractReducer';
import userReducer from './userReducer';
import socketReducer from './socketReducer';

const rootReducer = combineReducers({
	contractReducer,
	userReducer,
	socketReducer
});

export default rootReducer;