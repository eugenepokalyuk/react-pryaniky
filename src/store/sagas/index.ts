import { all } from 'redux-saga/effects';
import watchAuthSaga from './authSaga';
import watchDataSaga from './dataSaga';

export default function* rootSaga() {
    yield all([
        watchAuthSaga(),
        watchDataSaga()
    ]);
}