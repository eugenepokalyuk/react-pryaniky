import { PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { authFailure, authRequest, authSuccess } from '../reducers/authReducer';

interface AuthPayload {
    username: string;
    password: string;
}

interface AuthResponse {
    error_text: string;
    error_code: number;
    error_message: string;
    data: {
        token: string;
    };
}

function* authSaga(action: PayloadAction<AuthPayload>) {
    try {
        const response: AxiosResponse<AuthResponse> = yield call(axios.post, `/ru/data/v3/testmethods/docs/login`, {
            username: action.payload.username,
            password: action.payload.password,
        });

        if (response.data.error_code === 0) {
            yield put(authSuccess(response.data.data.token));
        } else {
            yield put(authFailure(response.data.error_text));
        }
    } catch (error) {
        yield put(authFailure('An unknown error occurred'));
    }
}

export default function* watchAuthSaga() {
    yield takeLatest(authRequest.type, authSaga);
}