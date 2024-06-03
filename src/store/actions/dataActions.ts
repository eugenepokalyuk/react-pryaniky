import { createAction } from '@reduxjs/toolkit';

interface DataPayload {
    id?: string;
    data?: any;
    token: string;
}

export const fetchDataRequest = createAction<string>('data/fetchDataRequest');
export const fetchDataSuccess = createAction<any[]>('data/fetchDataSuccess');
export const fetchDataFailure = createAction<string>('data/fetchDataFailure');

export const createDataRequest = createAction<DataPayload>('data/createDataRequest');
export const createDataSuccess = createAction<any>('data/createDataSuccess');
export const createDataFailure = createAction<string>('data/createDataFailure');

export const updateDataRequest = createAction<DataPayload>('data/updateDataRequest');
export const updateDataSuccess = createAction<any>('data/updateDataSuccess');
export const updateDataFailure = createAction<string>('data/updateDataFailure');

export const deleteDataRequest = createAction<DataPayload>('data/deleteDataRequest');
export const deleteDataSuccess = createAction<string>('data/deleteDataSuccess');
export const deleteDataFailure = createAction<string>('data/deleteDataFailure');