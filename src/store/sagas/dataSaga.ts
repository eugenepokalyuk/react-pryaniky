import { PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { CREATE, DELETE, GET, SET } from '../../utils/consts';
import {
    createDataFailure,
    createDataRequest, createDataSuccess,
    deleteDataFailure,
    deleteDataRequest, deleteDataSuccess,
    fetchDataFailure,
    fetchDataRequest, fetchDataSuccess,
    updateDataFailure,
    updateDataRequest, updateDataSuccess
} from '../actions/dataActions';

interface DataResponse {
    data: any[];
}

interface DataPayload {
    id?: string;
    data?: any;
    token: string;
}

function* fetchDataSaga(action: PayloadAction<string>): Generator {
    try {
        const response: AxiosResponse<DataResponse> | any = yield call(
            axios.get,
            `/ru/data/v3/testmethods/docs/userdocs/${GET}`,
            {
                headers: { 'x-auth': action.payload },
            }
        );
        yield put(fetchDataSuccess(response.data.data));
    } catch (error) {
        if (error instanceof Error) {
            yield put(fetchDataFailure(error.message));
        } else {
            yield put(fetchDataFailure('An unknown error occurred'));
        }
    }
}

function* createDataSaga(action: PayloadAction<DataPayload>): Generator {
    try {
        const response: AxiosResponse<any> | any = yield call(
            axios.post,
            `/ru/data/v3/testmethods/docs/userdocs/${CREATE}`,
            action.payload.data,
            {
                headers: { 'x-auth': action.payload.token },
            }
        );
        yield put(createDataSuccess(response.data));
        yield put(fetchDataRequest(action.payload.token));
    } catch (error) {
        if (error instanceof Error) {
            yield put(createDataFailure(error.message));
        } else {
            yield put(createDataFailure('An unknown error occurred'));
        }
    }
}

function* updateDataSaga(action: PayloadAction<DataPayload>): Generator {
    try {
        const response: AxiosResponse<any> | any = yield call(
            axios.post,
            `/ru/data/v3/testmethods/docs/userdocs/${SET}/${action.payload.id}`,
            action.payload.data,
            {
                headers: { 'x-auth': action.payload.token },
            }
        );
        yield put(updateDataSuccess(response.data));
        yield put(fetchDataRequest(action.payload.token));
    } catch (error) {
        if (error instanceof Error) {
            yield put(updateDataFailure(error.message));
        } else {
            yield put(updateDataFailure('An unknown error occurred'));
        }
    }
}

function* deleteDataSaga(action: PayloadAction<DataPayload>): Generator {
    try {
        const response: AxiosResponse<any> | any = yield call(
            axios.post,
            `/ru/data/v3/testmethods/docs/userdocs/${DELETE}/${action.payload.id}`,
            {},
            {
                headers: { 'x-auth': action.payload.token },
            }
        );
        if (response.data.error_code === 0) {
            yield put(deleteDataSuccess(action.payload.id!));
            yield put(fetchDataRequest(action.payload.token));
        } else {
            yield put(deleteDataFailure(response.data.error_message));
        }
    } catch (error) {
        if (error instanceof Error) {
            yield put(deleteDataFailure(error.message));
        } else {
            yield put(deleteDataFailure('An unknown error occurred'));
        }
    }
}

export default function* watchDataSaga() {
    yield takeLatest(fetchDataRequest.type, fetchDataSaga);
    yield takeLatest(createDataRequest.type, createDataSaga);
    yield takeLatest(updateDataRequest.type, updateDataSaga);
    yield takeLatest(deleteDataRequest.type, deleteDataSaga);
}