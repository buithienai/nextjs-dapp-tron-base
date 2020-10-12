import { all, fork } from 'redux-saga/effects';
import { watchContract } from './contractSaga';

export default function* rootSaga() {
	yield all([
		fork(watchContract)
	]);
};