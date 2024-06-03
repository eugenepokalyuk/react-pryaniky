import { AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS } from './types';

export const authRequest = (username: string, password: string) => ({
    type: AUTH_REQUEST,
    payload: { username, password }
});

export const authSuccess = (token: string) => ({
    type: AUTH_SUCCESS,
    payload: token
});

export const authFailure = (error: string) => ({
    type: AUTH_FAILURE,
    payload: error
});